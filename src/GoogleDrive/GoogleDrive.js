/*global google*/
import React, { Component } from 'react'
import GooglePicker from './ListDocuments';
const SCOPE = ['https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.metadata',
    'https://www.googleapis.com/auth/drive.file'];
// const DEVELOPER_KEY = 'AIzaSyAnyXnOHV5MNn3GVIYcYekMY6QlAw9hhXU';
const DEVELOPER_KEY = 'AIzaSyA_1Y6HBXXhTvDVN0vM4OCYhCZzj1j6OA4';
const CLIENT_ID = "883505734730-7culcu4hmm1m13ocq1uhbkr3fc31gpnf.apps.googleusercontent.com";
// const CLIENT_ID = '850839595666-b9lgfp4nnq0nlghk3karrs861uqpnvg9.apps.googleusercontent.com';
export default class GoogleDrive extends Component {

    render() {

        return (
            <div>
                <GooglePicker clientId={CLIENT_ID}
                    developerKey={DEVELOPER_KEY}
                    scope={SCOPE}
                    onChange={data => console.log('on change:', data)}
                    onAuthFailed={data => console.log('on auth failed:', data)}
                    multiselect={true}
                    navHidden={true}
                    authImmediate={false}
                    viewId={'FOLDERS'}
                    createPicker={(google, oauthToken) => {
                        const googleViewId = google.picker.ViewId.FOLDERS;
                        const docsView = new google.picker.DocsView(googleViewId)
                            .setIncludeFolders(true)
                            .setMimeTypes('application/vnd.google-apps.folder',
                                'application/vnd.google-apps.audio',
                                'application/vnd.google-apps.document',
                                'application/vnd.google-apps.file',
                                'application/vnd.google-apps.photo',
                                'application/vnd.google-apps.spreadsheet',
                                'application/vnd.google-apps.video')
                            .setSelectFolderEnabled(true);
                        const picker = new window.google.picker.PickerBuilder()
                            .addView(docsView)
                            .setOAuthToken(oauthToken)
                            .setDeveloperKey(DEVELOPER_KEY)
                            .setCallback(this.pickerCallback)
                        picker.build().setVisible(true);
                    }}>
                    {this.props.children}
                </GooglePicker>
            </div>
        )
    }


    pickerCallback(data) {
        if (data.action === google.picker.Action.PICKED) {
            var fileId = data.docs[0].id;
            console.log('fileId => ', fileId);
        }
    }

}
