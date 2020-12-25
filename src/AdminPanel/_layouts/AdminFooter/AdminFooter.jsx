import React, { Component } from 'react'

export default class AdminFooter extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="row align-items-center flex-row-reverse">
                            <div className="col-md-12 col-sm-12 mt-3 mt-lg-0 text-center">
                                Copyright © 2019 <a href={() => false}>rejoin</a>. Designed by <a href={() => false}>Spruko</a> All rights reserved.
						</div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
