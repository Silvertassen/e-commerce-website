import React from 'react';

import { connect } from 'react-redux';
import { clearItemsFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ( { cartItem, clearItemsFromCart, addItemToCart, removeItemFromCart } ) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="Text"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>&#10092;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItemToCart(cartItem)}>&#10093;</div>
        </span>
        <span className="price">${price}</span>
        <div className="remove-button" onClick={() => clearItemsFromCart(cartItem)}>&#10005;</div>
    </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItemsFromCart: cartItem => dispatch(clearItemsFromCart(cartItem)),
    addItemToCart: cartItem => dispatch(addItem(cartItem)),
    removeItemFromCart: cartItem => dispatch(removeItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);