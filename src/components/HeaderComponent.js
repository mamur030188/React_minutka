import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {

    render () {
        return (
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Cafe Minutka</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Cafe Minutka</h1>
                                <p>We take inspiration from the best cuisines, and create a unique experience. Our lipsmacking creations will tickle your senses!</p>
                            </div>

                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;
