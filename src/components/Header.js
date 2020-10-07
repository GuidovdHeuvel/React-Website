import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    

    render() {
        const cart = this.props.cart;

        return (
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="index.html">React Application</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/something">Something</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/marketplace">Marketplace</Link>
                            </li>
                            <li className="">
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart"> 
                                    <span style={{marginRight: '5px'}}>Cart</span> 
                                    <i style={{marginRight: '5px'}} className="fa fa-shopping-cart"></i>
                                    <span className="badge badge-light"> { cart.length } | ${ this.props.cartTotal.toFixed(2) } </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}