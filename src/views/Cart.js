import React, { Component } from 'react'
import CartList from '../components/CartList'

export default class Cart extends Component {
    getShallowCart = (listOfCartItems) => {
        var shallowProducts = []

        // Function that counts unique number of items in a list
        function getCount(productList, itemToCount) {
            let tempList = [];
            let itemCount = 0;

            for (let i of productList) {
                tempList.push(i.name);
            }
            for (let i of tempList) {
                if(i === itemToCount) {
                    itemCount++;
                }
            }
            return itemCount;
        }

        // Create list of uniquely-named products
        var referenceProducts = [];
        for (const i of listOfCartItems) {
            if(!referenceProducts.includes(i.name)) {
                referenceProducts.push(i.name);
            }
        }
        // console.log(referenceProducts);

        // Create a list of unique objects along with their counts
        for (const i of referenceProducts) {
            shallowProducts.push({
                name: i,
                count: getCount(listOfCartItems, i)
            });
        }
        this.setState({
            shallowCart: shallowProducts
        })
    }

    componentDidMount() {
        this.getShallowCart(this.props.cart)
    }

    render() {
        const handleClearCart = this.props.handleClearCart;

        return (
            <div>
                <h3>
                    Shopping Cart
                    <span className="float-right">
                        <button onClick={() => handleClearCart()} className="btn btn-sm btn-danger">
                            Clear Cart <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                    </span>
                </h3>
                <hr />
                <div className="card-body">


                    {/* <!-- CART ITEMS : begin --> */}
                    <CartList cart={this.props.cart} handleRemoveFromCart={this.props.handleRemoveFromCart} getCountOfProduct={this.props.getCountOfProduct} />
                    {/* <!-- CART ITEMS : end --> */}


                    <div className="row">
                        <div className="pull-right">
                            <a href="/" className="btn btn-outline-secondary pull-right">
                                Update shopping cart
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="coupon col-md-5 col-sm-5 no-padding-left pull-left">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" className="form-control" placeholder="cupone code" />
                            </div>
                            <div className="col-6">
                                <input type="submit" className="btn btn-default" value="Use cupone" />
                            </div>
                        </div>
                    </div>
                    <div className="pull-right" style={{ margin: "10px" }}>
                        <button id="checkout-button" className="btn btn-success pull-right">Checkout</button>
                        <div className="pull-right" style={{ margin: "5px" }}>
                            Total price: <b>${this.props.cartTotal.toFixed(2)}</b>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}