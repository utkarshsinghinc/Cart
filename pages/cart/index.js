import React from 'react';
import { Link } from 'react-router-dom';

import CartProducts from './CartProducts';
import Layout from '../../components/Layout';
import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

const Cart = () => {

    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout, discount, estimatedT} = useCart();

    return (
        <Layout title="Cart"  >
            <div >

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                                <CartProducts /> :
                                <div className="p-3 text-center text-muted">
                                    Your cart is empty
                                </div>
                        }

                        {checkout &&
                            <div className="p-3 text-center text-success">
                                <p>Checkout successfull</p>
                                <Link to="/" className="btn btn-outline-success btn-sm">BUY MORE</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 &&
                        <div className="col-sm-3 p-0">
                            <div className="card card-body box">
                                <p className="mb-0">Total Cost</p>
                                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                                <hr className="my-2.5" />
                                <p className="mb-0">Shipping Cost</p>
                                <h3 className="m-0 txt-right">{120}</h3>
                                <hr className="my-2.5" />
                                <p className="mb-0">Discount</p>
                                <h3 className="m-0 txt-right">{discount}</h3>
                                <hr className="my-2.5" />
                                <p className="mb-0">Tax</p>
                                <h3 className="m-0 txt-right">{formatNumber(10)}</h3>
                                <hr className="my-4 line" />
                                <p className="mb-0">Total Items</p>
                                <h3 className="m-0 txt-right">{cartItems.length}</h3>
                                <hr className="my-2.5" />
                                <p className="mb-0">Estimated Total</p>
                                <h3 className="m-0 txt-right">{estimatedT}</h3>
                                <hr className="my-2.5" />
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary mb-2 checkout" onClick={handleCheckout}>Proceed to Pay</button>
                                    {/* <button type="button" className="btn btn-outlineprimary btn-sm clear" onClick={clearCart}>CLEAR</button> */}
                                </div>

                            </div>
                        </div>
                    }

                </div>
            </div>
        </Layout>
    );
}

export default Cart;