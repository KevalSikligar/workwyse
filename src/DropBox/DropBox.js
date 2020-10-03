import React, { Component } from "react";
import DropboxChooser from "./react-dropbox-chooser";

export default class DropBox extends Component {
    render() {
        const APP_KEY = "qe8kl4gnlvsctvz";

        return (
            <div className="container">
                <DropboxChooser
                    appKey={APP_KEY}
                    success={(files) => console.log("chose:", files)}
                    cancel={() => console.log("closed")}
                    multiselect={true}
                >
                    {/* <span id="myId">Click me!</span>
                        <div className="dropbox"></div> */}
                    {this.props.children}
                </DropboxChooser>
            </div>
        );
    }
}
