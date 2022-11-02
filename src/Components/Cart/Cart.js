import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, delProduct } from "../../redux/action";

export const Cart = () => {
    const [cartList, setCartList] = useState([]);
    const [total, setTotal] = useState(0);

    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const calcTotal = () => {
        const totalAmt = cartList.reduce((total, item) => total + item.price * item.qty, 0)
        const roundedAmt = Math.round((totalAmt + Number.EPSILON) * 100) / 100;
        setTotal(roundedAmt);
    }
    useEffect(() => {
        setCartList(state);
        console.log(cartList);
    }, [state]);

    useEffect(() => {
        calcTotal();
    }, [cartList]);

    const decreaseItem = (product) => {
        dispatch(delProduct(product));
    }

    const increaseItem = (product) => {
        dispatch(addToCart(product));
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-6 fw-bolder text-center">Cart Items</h1>
                        <hr />
                    </div>
                </div>

                {cartList.map((cartItem) => {
                    return (
                        <div className="row justify-content-center mb-3 p-3 bg-light bg-gradient" key={cartItem.id}>
                            <div className="col-md-6">
                                <img src={cartItem.image} alt={cartItem.title} height="200px" width="200px" />
                            </div>
                            <div className="col-md-6">
                                <h6 className="fw-bolder text-black-50">
                                    {cartItem.title}
                                </h6>
                                <p className="fw-bolder">{cartItem.qty} X ${cartItem.price} = {cartItem.qty * cartItem.price}</p>
                                <button className="btn btn-outline-dark p-1" onClick={() => decreaseItem(cartItem)}>
                                    <i className="fa fa-minus"></i>
                                </button>
                                <button className="btn btn-outline-dark p-1 ms-2" onClick={() => increaseItem(cartItem)}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    )
                })}

                {cartList.length ? <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <p className="fw-bolder">Total: &nbsp;</p> <span className="fw-bolder">${total}</span>
                    </div>
                </div> : <div className="row justify-content-center">Add Products to Cart</div>}

                {/* {cartList.length ? <div className="row">
                    <div className="col-12 text-center">
                        <button className="btn btn-outline-dark px-2">
                            Proceed to Checkout
                        </button>
                    </div>
                </div> : <div className="row justify-content-center">Add Products to Cart</div>} */}
            </div>
        </div>
    )
}