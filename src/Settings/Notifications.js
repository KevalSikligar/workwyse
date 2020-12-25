import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import { unsubscribeUser, getNotificationByCompanyId, editNotification } from '../Services/Notifications';
import Reaptcha from 'reaptcha';
import { Modal, Form, Button, notification } from 'antd';
import { getUserDetail } from '../const';
export default class Notifications extends React.Component {

  constructor(props) {
    super(props);
    this.newBlankAray = []
  }

  state = {
    email: [],
    browser: [],
    unsubscribe: false,
    updatedValue: [],
    allNotification: [],
    disable: false
  }

  componentDidMount = () => {
    getNotificationByCompanyId().then(res => {
      this.setState({ allNotification: res.data });
      var emailArry = [];
      var broswerArry = [];
      res.data.map(res => {
        if (res.email === true) {
          emailArry.push({ name: res.name, id: res.id, active: res.active, notificationId: res.notificationType })
          this.setState({ email: emailArry });
        } else if (res.browser === true) {
          broswerArry.push({ name: res.name, id: res.id, active: res.active, notificationId: res.notificationType })
          this.setState({ browser: broswerArry });
        }
      });
    }).catch(err => {
      notification.open({
        message: 'Error',
        description: 'There was an error while fetching all notifications!'
      })
    })
  }

  unsubscribe = () => {
    this.setState({ unsubscribe: true });
  }

  onVerify = recaptchaResponse => {
    if (recaptchaResponse) {
      unsubscribeUser(getUserDetail('email')).then(res => {
        if (res.status === 200) {
          notification.open({
            message: 'Success',
            description: 'You have been unsubscribed from all the notifications!'
          });
          this.setState({ unsubscribe: false });
        }
      }).catch(err => {
        notification.open({
          message: 'Error',
          description: 'There was an error while unsubscribing from notifications!'
        });
      })
    }
  };

  updateNotifications = (data) => {
    editNotification(data).then(Res => {
      if (Res.status === 200) {
        getNotificationByCompanyId().then(res => {
          this.setState({ allNotification: res.data });
          var emailArry = [];
          var broswerArry = [];
          res.data.map(res => {
            if (res.email === true) {
              emailArry.push({ name: res.name, id: res.id, active: res.active, notificationId: res.notificationType })
              this.setState({ email: emailArry });
            } else if (res.browser === true) {
              broswerArry.push({ name: res.name, id: res.id, active: res.active, notificationId: res.notificationType })
              this.setState({ browser: broswerArry });
            }
          });
        }).catch(err => {
          // notification.open({
          //   message: 'Error',
          //   description: 'There was an error while fetching all notifications!'
          // })
        })
        notification.open({
          message: 'Success',
          description: 'Your notifications have been updated successfully!'
        });
      }
    }).catch(err => {
      notification.open({
        message: 'Error',
        description: 'There was an error while updating notifications!'
      });
    });
  }

  discardAllUpdates = () => {
    this.setState({ allNotification: this.state.allNotification });
  }

  getNotificationId(e, id, data, key) {
    this.setState({ disable: true })
    if (this.state.updatedValue.length > 0) {
      for (let index = 0; index < this.state.updatedValue.length; index++) {
        // const element = this.state.updatedValue[index];
        // console.log('element.id === id => ', element.id === id, element.id, id);
        const exist = this.state.updatedValue.map(val => {
          if (val.id === id) {
            return true
          }
          return false;
        });
        if (exist.indexOf(true) !== -1) {
          const obj1 = [];
          this.state.updatedValue.map(element => {
            if (element.id !== id) {
              obj1.push(element);
            }
          })
          setTimeout(() => {
            this.setState({ updatedValue: obj1 })
          }, 500);
          if (key === 'email') {
            for (let index = 0; index < this.state.email.length; index++) {
              const element = this.state.email[index];
              if (element.id === id) {
                this.state.email[index][`active`] = e.target.checked
                this.setState({ email: this.state.email })
              }
            }
            this.setState({ updatedValue: this.state.updatedValue })
          } else if (key === 'browser') {
            for (let index = 0; index < this.state.browser.length; index++) {
              const element = this.state.browser[index];
              if (element.id === id) {
                this.state.browser[index][`active`] = e.target.checked
                this.setState({ browser: this.state.browser })
              }
            }
            this.setState({ updatedValue: this.state.updatedValue })
          }
        } else {
          if (key === 'email') {
            for (let index = 0; index < this.state.email.length; index++) {
              const element = this.state.email[index];
              if (element.id === id) {
                this.state.email[index][`active`] = e.target.checked
                this.setState({ email: this.state.email })
              }
            }
          } else if (key === 'browser') {
            for (let index = 0; index < this.state.browser.length; index++) {
              const element = this.state.browser[index];
              if (element.id === id) {
                this.state.browser[index][`active`] = e.target.checked
                this.setState({ browser: this.state.browser });
              }
            }
          }
          var obj = {
            companyId: getUserDetail('companyId'),
            userId: getUserDetail('userId'),
            notificationId: data.id,
            active: data.active,
            id: 0
          }
          this.newBlankAray.push(obj)
          this.setState({ updatedValue: this.newBlankAray });
          break
        }
      }
    } else {
      if (key === 'email') {
        for (let index = 0; index < this.state.email.length; index++) {
          const element = this.state.email[index];
          if (element.id === id) {
            this.state.email[index][`active`] = e.target.checked
            this.setState({ email: this.state.email })
          }
        }
      } else if (key === 'browser') {
        for (let index = 0; index < this.state.browser.length; index++) {
          const element = this.state.browser[index];
          if (element.id === id) {
            this.state.browser[index][`active`] = e.target.checked
            this.setState({ browser: this.state.browser })
          }
        }
      }
      var obj = {
        companyId: getUserDetail('companyId'),
        userId: getUserDetail('userId'),
        notificationId: data.id,
        active: data.active,
        id: 0
      }
      this.newBlankAray.push(obj)
      this.setState({ updatedValue: this.newBlankAray });
    }
  }

  render() {

    const pathList = [
      { to: "/notifications", title: "Notifications" }
    ];

    return (
      <div className="notifications_sec_page">
        <BreadCrumbs title="Notifications" breadcrumbssegment={pathList} />
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-12">
              <SideNav />
            </div>
            <div className="col-xl-9 col-lg-9 sptb">
              <div className="card">
                <div className="card-body">
                  <div className="card">
                    <div className="card-header bg-light-gray d-flex justify-content-between">
                      <h3 className="text-capitalize card-title">{getUserDetail('roles') + " " + 'Notification'} </h3>
                      <button className="btn btn-danger mr-md-2" onClick={() => this.unsubscribe()}>Unsubscribe Me from All Notification</button>
                      {/* {/ <h3 className="text-capitalize card-title" onClick={() => this.unsubscribe()}>Unsubscribe Notification</h3> /} */}
                    </div>
                    <div className="card-body">
                      <div className="swticher-title">
                        <p className="text-dark fs-16 font-weight-semibold">Control what you'd like us to email you about.</p>
                      </div>
                      {/* <div className="not-getting-mail-section d-flex justify-content-between align-items-center">
                        <p className="fs-16 text-dark font-weight-semibold mb-0">Not getting any mail?</p>
                        <button className="btn service-btn w-auto px-5">Click here</button>
                      </div> */}
                      <hr className="my-5 border_sec_s" />
                      <p className="fs-16 text-dark font-weight-semibold mb-4">Email me About:</p>
                      <div className="swticher-list">
                        <div className="swticher-section mb-4">
                          {this.state.email.map(email => (
                            <label className="custom-switch d-flex justify-content-between">
                              <>
                                <span className="custom-switch-description text-dark fs-16">{email.name}</span>
                                <input type="checkbox" checked={email.active === true ? true : false} name="custom-switch-checkbox" className="custom-switch-input" onChange={(e) => this.getNotificationId(e, email.id, email, 'email')} />
                                <span className="custom-switch-indicator" ></span>
                              </>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header bg-light-gray">
                      <h3 className="card-title text-capitalize">Browser (Push) </h3>
                    </div>
                    <div className="card-body">
                      <div className="swticher-title">
                        <p className="text-dark fs-16 font-weight-semibold">
                          We can send notifications straight to your web browser. Choose what you’d like to be notified about.</p>
                      </div>
                      <hr className="my-5 border_sec_s" />
                      <div className="not-getting-mail-section d-flex justify-content-between align-items-center mb-sm-2 mb-md-4">
                        <p className="fs-16 text-dark font-weight-semibold mb-0">Notify me about: </p>
                      </div>
                      <div className="swticher-list">
                        <div className="swticher-section mb-4">
                          {this.state.browser.map(browser => (
                            <label className="custom-switch d-flex justify-content-between">
                              <>
                                <span className="custom-switch-description text-dark fs-16">{browser.name}</span>
                                <input type="checkbox" checked={browser.active === true ? true : false} name="custom-switch-checkbox" className="custom-switch-input" onChange={(e) => this.getNotificationId(e, browser.id, browser, 'browser')} />
                                <span className="custom-switch-indicator"></span>
                              </>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <Button className="btn-prev" onClick={() => this.updateNotifications(this.state.updatedValue)}> Save</Button> */}

                  <Modal visible={this.state.unsubscribe} className="unsubscribe_popup" onCancel={() => this.setState({ unsubscribe: false })}>
                    <Reaptcha className="mt-5" sitekey={process.env.REACT_APP_CAPTCHA_KEY_FOR_NOTIFICATIONS} onVerify={this.onVerify} />
                    <Form>
                      <div className="mt-4">
                        <Button className="btn-prev" onClick={() => this.setState({ unsubscribe: false })}> Cancel</Button>
                      </div>
                    </Form>
                  </Modal>
                </div>
                <div className="card-footer text-right">
                  <button className="btn btn-danger mr-md-2" onClick={() => this.discardAllUpdates()}>Discard Changes</button>
                  <button className="btn btn-primary" disabled={!this.state.disable} onClick={() => this.updateNotifications(this.state.updatedValue)}>Update Notifications</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
