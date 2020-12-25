import React, { Component } from 'react'
import { CardElement, ElementsConsumer, Elements } from '@stripe/react-stripe-js';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import { Form, Input, Button, notification, Table, Modal } from 'antd';
import { getClientId, savePaymentMethod, getCurrentUserInvoices, detailedInvoice } from '../Services/StripeService';
import { loadStripe } from '@stripe/stripe-js';
import { setUserAddress, editUserAddress } from '../Services/CommonServices';
import { getUserInfo } from '../Services/Authentication';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import { getUserDetail, setUserDetail } from '../const';
import queryString from 'query-string';
class Billing extends Component {

  formRef = React.createRef();

  state = {
    userDetails: null,
    storeInvoiceDetails: [],
    openModal: false
  }

  componentDidMount() {
    if (this.formRef) {
      this.formRef.current.setFieldsValue({
        foreName: getUserDetail('foreName'),
        surName: getUserDetail('surName'),
        addressLine1: getUserDetail('userAddresses').length > 0 ? getUserDetail('userAddresses')[0]['street1'] : '',
        addressLine2: getUserDetail('userAddresses').length > 0 ? getUserDetail('userAddresses')[0]['street2'] : '',
        city: getUserDetail('userAddresses').length > 0 ? getUserDetail('userAddresses')[0]['city'] : '',
        state: getUserDetail('userAddresses').length > 0 ? getUserDetail('userAddresses')[0]['state'] : '',
        country: getUserDetail('userAddresses').length > 0 ? getUserDetail('userAddresses')[0]['country'] : '',
        postalCode: getUserDetail('userAddresses').length > 0 ? getUserDetail('userAddresses')[0]['postalCode'] : '',
        phoneNumber: getUserDetail('phoneNumber'),
        email: getUserDetail('email')
      });
    }
    this.setState({ userDetails: getUserDetail() });
    if (getUserDetail('stripeCustomerId') !== null) {
      getCurrentUserInvoices().then(res => {
        if (res.status === 200 && res.data.length > 0) {
          detailedInvoice(res.data[0].subscriptionId).then(res => {
            this.setState({ storeInvoiceDetails: res.data });
          }).catch(err => {
            notification.open({
              message: 'Error',
              description: 'There was an error while fetching Invoice!'
            });
          });
        }
      });
    }
  }

  render() {

    const pathList = [{ to: "/billing", title: "Billing" }];

    const { storeInvoiceDetails } = this.state;

    const columns = [
      {
        title: "Invoice End Date",
        dataIndex: "invoicePeriodEndDate",
        key: "invoicePeriodEndDate",
        render: (invoicePeriodEndDate) => moment(invoicePeriodEndDate).format('LL')
      },
      {
        title: "Amount Due",
        dataIndex: "amountDue",
        key: "amountDue",
        render: (amountDue) => amountDue ? amountDue : '-'
      },
      {
        title: "Download Invoice",
        dataIndex: "stripeHostedInvoiceUrl",
        key: "stripeHostedInvoiceUrl",
        render: (text, record) => (
          <button className="view-btns" type="button" onClick={(e) => downloadData(record.id, record.stripeHostedInvoiceUrl)}><i className="fa fa-download"></i></button>
        )
      }
    ]

    const downloadData = (id, record) => {
      window.open(record, '_blank');
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
      if (getUserDetail('stripeCustomerId') === null) {
        notification.error({
          message: 'Error',
          description: "Please enter your Address to create a customer Id!"
        })
      } else {
        // Block native form submission.
        event.preventDefault();
        const { stripe, elements } = this.props;
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
        const cardElement = elements.getElement(CardElement);
        await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
        }).then(res => {
          console.log('res => ', res);
          // console.log('rescreatePaymentMethod => ', res);
          if (res.paymentMethod) {
            const data = {
              userEmail: getUserDetail('email'),
              stripePmId: res.paymentMethod.id,
              cardBrand: res.paymentMethod.card.brand,
              cardExpiryMonth: res.paymentMethod.card.exp_month,
              cardExpiryYear: res.paymentMethod.card.exp_year,
              last4DigitsOfCard: res.paymentMethod.card.last4
            }
            savePaymentMethod(data).then(res => {
              if (res.status === 200) {
                getUserInfo(localStorage.getItem('access_token')).then(userInfo => {
                  userInfo.data.userName = `${userInfo.data.foreName.charAt(0).toUpperCase() + userInfo.data.foreName.slice(1)} ${userInfo.data.surName.charAt(0).toUpperCase() + userInfo.data.surName.slice(1)}`
                  userInfo.data.roles = userInfo.data.roles[0]
                  setUserDetail(userInfo.data)
                }).catch(() => { })
                notification.open({
                  message: 'Success',
                  description: 'Your card has been successfully saved!'
                });
                localStorage.setItem('paymentId', res.data.stripeCustomerPaymentMethodId);
              }
              // If redirect param set then redirect to that path
              const parsed = queryString.parse(this.props.location.search);
              if (parsed.redirect) {
                this.props.history.push(`${parsed.redirect}`)
              }
            }).catch(err => {
              notification.open({
                message: 'Error',
                description: 'There was an error while adding a card!'
              });
            })
          } else if (res.error) {
            notification.open({
              message: 'Error',
              description: 'There was an error while creating a payment method'
            });
          }
        }).catch(err => {
          console.log('err => ', err);
          notification.open({
            message: 'Error',
            description: 'There was an error while creating a payment method'
          });
        });
      }
    };

    const { stripe } = this.props;

    const onFinishFailed = () => { }

    const updateUserData = (values) => {
      const data = {
        id: 1,
        companyId: getUserDetail('companyId'),
        userId: getUserDetail('userId'),
        street1: values.addressLine1,
        street2: values.addressLine2,
        state: values.state,
        postalCode: values.postalCode,
        city: values.city,
        country: values.country,
      }
      editUserAddress(data).then(res => {
        if (res.status === 200) {
          notification.success({
            message: 'Success',
            description: 'Users address has been updated successfully!'
          })
          getUserInfo(localStorage.getItem('access_token')).then(userInfo => {
            userInfo.data.userName = `${userInfo.data.foreName.charAt(0).toUpperCase() + userInfo.data.foreName.slice(1)} ${userInfo.data.surName.charAt(0).toUpperCase() + userInfo.data.surName.slice(1)}`
            userInfo.data.roles = userInfo.data.roles[0]
            setUserDetail(userInfo.data)
          }).catch(err => {
            // console.log('err => ', err);
          })
        }
      }).catch(Err => {
        // console.log('Err => ', Err);
        // notification.er
      })
    }

    const sendUserData = (values) => {
      const dataAddres = {
        id: 0,
        companyId: getUserDetail('companyId'),
        userId: getUserDetail('userId'),
        street1: values.addressLine1,
        street2: values.addressLine2 ? values.addressLine2 : '',
        state: values.state,
        postalCode: values.postalCode,
        city: values.city,
        country: values.country
      }
      setUserAddress(dataAddres).then(Res => {
        if (Res.status === 200) {
          const data = {
            foreName: values.foreName,
            familyName: values.surName,
            phoneNumber: getUserDetail('phoneNumber') ? getUserDetail('phoneNumber') : "",
            email: getUserDetail('email'),
            addressLine1: values.addressLine1,
            addressLine2: values.addressLine2 ? values.addressLine2 : '',
            city: values.city,
            stateOrCounty: values.stateOrCounty,
            postCode: values.postalCode,
            country: values.country
          }
          getClientId(data).then(res => {
            if (res.status === 200) {
              getUserInfo(localStorage.getItem('access_token')).then(userInfo => {
                userInfo.data.userName = `${userInfo.data.foreName.charAt(0).toUpperCase() + userInfo.data.foreName.slice(1)} ${userInfo.data.surName.charAt(0).toUpperCase() + userInfo.data.surName.slice(1)}`
                userInfo.data.roles = userInfo.data.roles[0]
                setUserDetail(userInfo.data)
              }).catch(err => {
                // console.log('err => ', err);
              })
              notification.open({
                message: 'Success',
                description: 'Customer Id has been successfully created!'
              });
              localStorage.setItem('customerId', res.data.id);
            }
          }).catch(err => {
            // console.log('err => ', err);
          });
        }
        // console.log('RessetUserAddress => ', Res);
      }).catch(err => {
        // console.log('err => ', err);
      })
      // console.log('values => ', values);
    }

    return (
      <div>
        <div className="billing_section">
          <BreadCrumbs title="Billing" breadcrumbssegment={pathList} />
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-12 col-md-12">
                <SideNav />
              </div>
              <div className="col-xl-9 col-lg-12 col-md-12">
                <div className="sptb">
                  <div className="card mb-0">
                    <div className="card-body">
                      <div className="row">
                        <Form name="User Details" onFinish={getUserDetail('userAddresses').length > 0 ? updateUserData : sendUserData}
                          autoComplete={'off'}
                          onFinishFailed={onFinishFailed} ref={this.formRef}>
                          <div className="col-12">
                            <div className="card-blocks">
                              <div className="company-profile-head bg-background3 ">
                                <h4>User Details</h4>
                              </div>
                              <div className="row">
                                <div className="form-group col-md-6">
                                  <label className="asterisk">First Name</label>
                                  {/* <span>{getUserDetail('foreName')}</span> */}
                                  <Form.Item name="foreName" >
                                    <Input readOnly={true} />
                                  </Form.Item>
                                </div>
                                <div className="form-group col-md-6">
                                  <label className="asterisk">Last Name</label>
                                  <Form.Item name="surName">
                                    <Input readOnly={true} />
                                  </Form.Item>
                                </div>
                                <div className="form-group col-md-6">
                                  <label className="form-label asterisk">Street Line 1</label>
                                  <Form.Item name="addressLine1"
                                    rules={[{ required: true, message: 'Please input your Street Line 1!' }]}>
                                    <Input />
                                  </Form.Item>
                                </div>
                                <div className="form-group col-md-6">
                                  <label>Street Line 2</label>
                                  <Form.Item name="addressLine2" rules={[{ required: false }]}>
                                    <Input />
                                  </Form.Item>
                                </div>
                                <div className="form-group col-md-6">
                                  <label className="form-label asterisk">Post Code</label>
                                  <Form.Item name="postalCode"
                                    rules={[{ required: true, message: 'Please input your Post Code!' }]}>
                                    <Input />
                                  </Form.Item>
                                </div>
                                <div className="form-group col-md-6">
                                  <label >State</label>
                                  <Form.Item name="state" rules={[{ required: false }]}>
                                    <Input />
                                  </Form.Item>
                                </div>
                                <div className="form-group col-md-6">
                                  <label className="form-label asterisk">City</label>
                                  <Form.Item name="city"
                                    rules={[{ required: true, message: 'Please input your City!' }]}>
                                    <Input />
                                  </Form.Item>
                                </div>
                                <div className="form-group col-md-6">
                                  <label className="form-label asterisk">Country</label>
                                  <Form.Item name="country"
                                    rules={[{ required: true, message: 'Please input your Country!' }]}>
                                    <Input />
                                  </Form.Item>
                                  <Form.Item className="text-right mt-4">
                                    <Button type="default mr-2" htmlType="cancel"> Cancel</Button>
                                    <Button type="primary" htmlType="submit"> {getUserDetail('userAddresses').length > 0 ? 'Update' : 'Submit'} </Button>
                                  </Form.Item>
                                </div>
                                {/* <div className="form-group col-md-6">
                                  <label className="asterisk">Phone Number</label>
                                  <Form.Item name="phoneNumber"
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}>
                                    <Input readOnly={true} />
                                  </Form.Item>
                                </div>
                                <div className="form-group col-md-6">
                                  <label>Email</label>
                                  <Form.Item name="email">
                                    <Input readOnly={true} />
                                  </Form.Item>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </Form>
                        {/* {getUserDetail('stripeCustomerId') !== null && */}
                        <div className="col-12">
                          <div className="card-blocks">
                            <div className="company-profile-head bg-background3 ">
                              <h4>Billing Information</h4>
                            </div>
                            {getUserDetail('stripeCustomerPaymentMethodLastFourDigits') === null ?
                              <div className="wrapped">
                                <div className="form-group mb-0">
                                  <form onSubmit={handleSubmit}>
                                    <fieldset className="FormGroup card-blocks payment-section mx-0">
                                      <div className="FormRow border-top-0">
                                        <CardElement options={CARD_OPTIONS}
                                          onReady={() => {
                                            // console.log("CardElement [ready]");
                                          }}
                                          onChange={event => {
                                            // console.log("CardElement [change]", event);
                                          }}
                                          onBlur={() => {
                                            // console.log("CardElement [blur]");
                                          }}
                                          onFocus={() => {
                                            // console.log("CardElement [focus]");
                                          }} />
                                      </div>
                                    </fieldset>
                                    <div className="text-right">
                                      <button type="submit" className="ant-btn ant-btn-primary" disabled={!stripe}> Submit </button>
                                    </div>
                                  </form>
                                </div>
                              </div> :
                              <div className="wrapped">
                                <div className="form-group mb-0">
                                  <form onSubmit={handleSubmit}>
                                    <fieldset className="FormGroup card-blocks payment-section payment_sec_s mx-0">
                                      <div className="FormRow border-top-0 pay_section">
                                        <label className="__PrivateStripeElement-input" aria-hidden="true" aria-label=" " autocomplete="false" maxlength="1" style={{ border: 'none !important', display: 'block !important', position: 'absolute !important', height: '1px !important', top: '0px !important', left: '0px !important', padding: '0px !important', margin: '0px !important', width: '100% !important', opacity: '0 !important', background: 'transparent !important', pointerEvents: 'none !important', fontSize: '16px !important' }}><i class="fa fa-credit-card-alt" aria-hidden="true"></i> {`**** **** **** ${getUserDetail('stripeCustomerPaymentMethodLastFourDigits')}`}</label>
                                        <div>
                                          <label className="__PrivateStripeElement-input" aria-hidden="true" aria-label=" " autocomplete="false" maxlength="1" style={{ border: 'none !important', display: 'block !important', position: 'absolute !important', height: '1px !important', top: '0px !important', left: '0px !important', padding: '0px !important', margin: '0px !important', width: '100% !important', opacity: '0 !important', background: 'transparent !important', pointerEvents: 'none !important', fontSize: '16px !important' }}>{`${getUserDetail('stripeCustomerPaymentMethodExpiryMonth')}`}</label>
                                          <label className="__PrivateStripeElement-input" aria-hidden="true" aria-label=" " autocomplete="false" maxlength="1" style={{ border: 'none !important', display: 'block !important', position: 'absolute !important', height: '1px !important', top: '0px !important', left: '0px !important', padding: '0px !important', margin: '0px !important', width: '100% !important', opacity: '0 !important', background: 'transparent !important', pointerEvents: 'none !important', fontSize: '16px !important' }}>/ {`${JSON.stringify(getUserDetail('stripeCustomerPaymentMethodExpiryYear')).substring(2)}`}</label>
                                        </div>
                                      </div>
                                    </fieldset>
                                    <div className="text-right">
                                      <button type="button" className="ant-btn ant-btn-primary" onClick={() => this.props.history.push('under-construction')}> Update </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            }
                          </div>
                        </div>
                        {/* } */}
                        {/* } */}
                        <div className="col-md-12">
                          <div className="card-blocks m-0">
                            <div className="company-profile-head bg-background3">
                              <h4>Previous Invoices</h4>
                            </div>
                            <div className="">
                              <Table
                                className="services-table table-bordered invoice-table text-center table-striped table-responsive"
                                dataSource={storeInvoiceDetails} columns={columns}
                                locale={{ emptyText: 'No Invoices For This Week' }} />
                            </div>
                          </div>
                        </div>
                        {this.state.openModal &&
                          <Modal title="All Projects Invoice Details" visible={this.state.openModal} onCancel={() => this.setState({ openModal: false })} >
                            <p>{this.state.storeInvoiceDetails.map(data => (
                              <p>{data.relatedProjects.map(getData => (
                                <>
                                  <p>{getData.title}</p>
                                  <p>{getData.categoryName}</p>
                                  <p>{getData.tagName}</p>
                                  <p>{moment(getData.createdDate).format('MM-DD-YYYY')}</p>
                                </>
                              ))}
                              </p>
                            ))}</p>
                          </Modal>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)
      </div >
    )
  }

}

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#805aed',
      color: '#805aed',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: '#805aed' },
    },
    invalid: {
      iconColor: '#eb1c26',
      color: '#eb1c26',
    },
  },
};

const Billings = withRouter(Billing)
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const InjectedCheckoutForm = () => (
  <ElementsConsumer>
    {({ stripe, elements, ...rest }) => (
      <>
        <Billings stripe={stripe} {...rest} elements={elements} />
      </>
    )}
  </ElementsConsumer>
);

const StripeBilling = () => (
  <Elements stripe={stripePromise}>
    <InjectedCheckoutForm />
  </Elements>
);

export default StripeBilling;


