import React from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import { myCompanyNumber } from '../Services/MyCompany';
import swal from 'sweetalert';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';

export default class MyCompany extends React.Component {

    state = {
        companyName: '',
        companyLocation: '',
        value: '',
        suggestions: []
    }

    componentDidMount = async () => {
        myCompanyNumber().then(res => {
            this.setState({ companyName: res.data.company_name, companyLocation: res.data.registered_office_address.locality });
            console.log('res => ', res);
        }).catch(err => {
            swal("There was an error while fetching company data");
        });
    }

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        return inputLength === 0 ? [] : this.state.suggestions.filter(companyName =>
            companyName.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    getSuggestionValue = suggestion => suggestion;

    renderSuggestion = suggestion => (
        <div>
            {suggestion}
        </div>
    );

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        }, async () => {
            const resp = await axios.get(`http://localhost:5000/ByCompanyName/${this.state.value}`);
            var suggestions = []
            resp.data.items.map(res => {
                return suggestions.push(res.title);
            });
            this.setState({ suggestions });
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(this.state.value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {

        const pathList = [
            { to: "/my-company", title: "My Company" }
        ];

        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: 'Company Name',
            value,
            onChange: this.onChange,
        };

        return (

            <div>
                <BreadCrumbs title="My Company" breadcrumbssegment={pathList} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-12 col-md-12">
                            <SideNav />
                        </div>
                        <div className="col-xl-9 col-lg-12 col-md-12 sptb">
                            <div className="card mb-0">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 col-md-12 bg-background3 border-radius-4 mb-md-5 mb-sm-3">
                                            <div className="company-profile-head">
                                                <div className="company-img">
                                                    <div className="profile-pic">
                                                        <div className="profile-pic-img">
                                                            <span className="edit-profile-img dots" data-toggle="tooltip" data-placement="top" title="Edit picture">
                                                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                                            </span>
                                                            <img src={require('../assets/images/users/male/25.jpg')} className="brround" alt="user" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="company-content">
                                                    <div className="company-name fs-18 mb-1 font-weight-semibold">{this.state.companyName ? this.state.companyName : ''}</div>
                                                    <div className="company-name fs-18 font-weight-semibold">{this.state.companyLocation ? this.state.companyLocation : ''}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-12">
                                            <label className="form-label text-dark fs-16 mb-5">A Multi-Service Marketing Agency. We specialise in the FMCG, wholesale and local business sectors.</label>
                                            <div className="custom-controls-stacked rdb-steps-1">
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-12">
                                                        <div className="form-group autosuggest-company-name">
                                                            <label className="form-label">Company Name</label>
                                                            <Autosuggest
                                                                suggestions={suggestions}
                                                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                                                getSuggestionValue={this.getSuggestionValue}
                                                                renderSuggestion={this.renderSuggestion}
                                                                inputProps={inputProps}
                                                            />
                                                            {/* <input type="text" className="form-control position-relative" placeholder="Company Name (Via API)" /> */}
                                                            <button className="search-icon"><i className="fa fa-search" aria-hidden="true"></i> </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Company Number</label>
                                                            <input type="text" className="form-control position-relative" placeholder="Number" value="654321" />
                                                            <button className="search-icon"><i className="fa fa-search" aria-hidden="true"></i> </button>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">VAT Number</label>
                                                            <input type="text" className="form-control" placeholder="VAT Number" value="123456" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Company Size</label>
                                                            <select className="form-control">
                                                                <option>5 -15</option>
                                                                <option>15 -50</option>
                                                                <option>50 -100</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Operation(s)</label>
                                                            <select className="form-control">
                                                                <option>Local</option>
                                                                <option>Data Operator</option>
                                                                <option>Project Manager</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Service Focus</label>
                                                            <select className="form-control">
                                                                <option>Web Design</option>
                                                                <option>Graphics Design</option>
                                                                <option>Application Design</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Industry Focus</label>
                                                            <select className="form-control">
                                                                <option>wholesale</option>
                                                                <option>Dealer</option>
                                                                <option>Buyer</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Company Link</label>
                                                            <input type="text" className="form-control" placeholder="Number" value="www.marketing.inc" />
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-sm-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">External Link 1</label>
                                                            <input type="text" className="form-control" placeholder="VAT Number" value="External Link 2" />
                                                        </div>
                                                    </div> */}
                                                </div>
                                                {/* <div className="row">
                                                    <div className="col-sm-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">External Link 2 </label>
                                                            <input type="text" className="form-control" placeholder="Number" value="External Link 3" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">External Link 3</label>
                                                            <input type="text" className="form-control" placeholder="VAT Number" value="External Link 4" />
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <Button className="btn btn-danger  mr-2">Cancel</Button>
                                    <Button className="btn btn-primary">Save</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
