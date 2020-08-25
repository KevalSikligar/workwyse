import React from 'react';
import { NavLink } from 'react-router-dom';

class NotFoundPage extends React.Component {

    render() {
        return (
            <>
                <div className="page">
                    <div className="page-content z-index-10">
                        <div className="container text-center text-white">
                            <div className="display-1 mb-5"> 404</div>
                            <h1 className="h2 mb-3">Page Not Found</h1>
                            <p className="h4 font-weight-normal mb-7 leading-normal">Oops!!!! you tried to access a page which is not available. go back to Home</p>
                            <NavLink to="/about-us" className="btn btn-secondary">
                                Back To Home
					        </NavLink>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NotFoundPage