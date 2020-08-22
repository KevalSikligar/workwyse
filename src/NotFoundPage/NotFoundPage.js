import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class NotFoundPage extends React.Component {

    render() {
        return (
            <>
                <div class="page">
                    <div class="page-content z-index-10">
                        <div class="container text-center text-white">
                            <div class="display-1 mb-5"> 404</div>
                            <h1 class="h2 mb-3">Page Not Found</h1>
                            <p class="h4 font-weight-normal mb-7 leading-normal">Oops!!!! you tried to access a page which is not available. go back to Home</p>
                            <NavLink to="/about-us" class="btn btn-secondary">
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