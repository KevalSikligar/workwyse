import React, { Component } from "react";
import DropboxChooser from "./react-dropbox-chooser";
import { connect } from "react-redux";
import { getAllCompanyDetails } from "../redux/action/SignUp/SignUpAction";
class DropBox extends Component {

    state = {
        chosenLink: '',
    }

    successFiles(files) {
        // console.log("chose:", files)
        this.setState({ chosenLink: files[0].name });
        this.props.dispatch(getAllCompanyDetails('uploadLink', files));
    }

    render() {
        const APP_KEY = process.env.REACT_APP_DROP_BOX_KEY;
        const { disbleTextBox = false } = this.props
        return (
            <>
                <DropboxChooser
                    appKey={APP_KEY}
                    linkType="direct"
                    success={(files) => this.successFiles(files)}
                    cancel={() => { }}
                    multiselect={true}>
                    {this.props.children}
                    {!disbleTextBox && this.state.chosenLink ?
                        <input value={this.state.chosenLink} /> : ''}
                </DropboxChooser>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        dropbox: state
    }
}

export default connect(mapStateToProps)(DropBox)

