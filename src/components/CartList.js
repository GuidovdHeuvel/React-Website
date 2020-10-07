import React, { Component } from 'react'
import CartItem from './CartItem';

export default class CartList extends Component {
    render() {
        const shallowCart = [...new Set(this.props.cart)];
        // console.log(shallowCart);

        return (
            <React.Fragment>
                {shallowCart.map(item => <CartItem cart={this.props.cart} item={(item)} getCountOfProduct={this.props.getCountOfProduct} key={item.id} handleRemoveFromCart={this.props.handleRemoveFromCart} />)}
            </React.Fragment>
        )
    }
}