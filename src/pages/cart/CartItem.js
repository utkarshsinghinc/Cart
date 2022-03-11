import React from 'react';

import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../components/icons';
import "./styles.css"



const CartItem = ({ product }) => {

    const { increase, decrease, removeProduct } = useCart();

    return (
        <>
            <div className="card-1 flex-row">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o2agyBK886yCqnwRbGDpET-1%3A5?alt=media&token=0033943f-03b7-4e4c-b15c-dd05054f8d12"
                    alt="image not found"
                    className="unsplash-j9ld-6fs-6-_cs imge"
                />
                <div className="group-2143 flex-col">
                    <p className="txt-162">VEG</p>
                    <p className="txt-657">Hamburger Vegei..</p>

                    <div className="group-2142">
                        <p className="txt-6110">Rs 250</p>
                    </div>
                </div>
                <div className="btn-_set flex-row flexx">
                    <button
                        onClick={() => increase(product)}
                        className="btn btn-primary btn-sm mr-2 mb-1 inc">
                        <PlusCircleIcon width={"20px"} />
                    </button>
                    <div className="col-sm-2 p-2 text-center inc2">
                        <p className="mb-0 ing">{product.quantity}</p>
                    </div>
                    <button onClick={() => decrease(product)}
                        className="btn btn-danger btn-sm mb-1 inc">
                        <MinusCircleIcon width={"20px"} />
                    </button>
                </div>
            </div>
            <div className="card-1 flex-row">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o2agyBK886yCqnwRbGDpET-1%3A5?alt=media&token=0033943f-03b7-4e4c-b15c-dd05054f8d12"
                    alt="image not found"
                    className="unsplash-j9ld-6fs-6-_cs imge"
                />
                <div className="group-2143 flex-col">
                    <p className="txt-162">VEG</p>
                    <p className="txt-657">Hamburger Vegei..</p>

                    <div className="group-2142">
                        <p className="txt-6110">Rs 250</p>
                    </div>
                </div>
                <div className="btn-_set flex-row flexx">
                    <button
                        onClick={() => increase(product)}
                        className="btn btn-primary btn-sm mr-2 mb-1 inc">
                        <PlusCircleIcon width={"20px"} />
                    </button>
                    <div className="col-sm-2 p-2 text-center inc2">
                        <p className="mb-0 ing">{product.quantity}</p>
                    </div>
                    <button onClick={() => decrease(product)}
                        className="btn btn-danger btn-sm mb-1 inc">
                        <MinusCircleIcon width={"20px"} />
                    </button>
                </div>
            </div>
            <div className="card-1 flex-row">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/o2agyBK886yCqnwRbGDpET-1%3A5?alt=media&token=0033943f-03b7-4e4c-b15c-dd05054f8d12"
                    alt="image not found"
                    className="unsplash-j9ld-6fs-6-_cs imge"
                />
                <div className="group-2143 flex-col">
                    <p className="txt-162">VEG</p>
                    <p className="txt-657">Hamburger Vegei..</p>

                    <div className="group-2142">
                        <p className="txt-6110">Rs 250</p>
                    </div>
                </div>
                <div className="btn-_set flex-row flexx">
                    <button
                        onClick={() => increase(product)}
                        className="btn btn-primary btn-sm mr-2 mb-1 inc">
                        <PlusCircleIcon width={"20px"} />
                    </button>
                    <div className="col-sm-2 p-2 text-center inc2">
                        <p className="mb-0 ing">{product.quantity}</p>
                    </div>
                    <button onClick={() => decrease(product)}
                        className="btn btn-danger btn-sm mb-1 inc">
                        <MinusCircleIcon width={"20px"} />
                    </button>
                </div>
            </div>
            {/* 
            <div className="row no-gutters py-2">
                <div className="col-sm-2 p-2">
                    <img
                        alt={product.name}
                        style={{ margin: "0 auto", maxHeight: "50px" }}
                        src={product.photo} className="img-fluid d-block" />
                </div>
                <div className="col-sm-4 p-2">
                    <h5 className="mb-1">{product.name}</h5>
                    <p className="mb-1">Price: {formatNumber(product.price)} </p>

                </div>
                <div className="col-sm-2 p-2 text-center ">
                    <p className="mb-0">Qty: {product.quantity}</p>
                </div>
                <div className="col-sm-4 p-2 text-right">
                    <button
                        onClick={() => increase(product)}
                        className="btn btn-primary btn-sm mr-2 mb-1">
                        <PlusCircleIcon width={"20px"} />
                    </button>

                    {
                        product.quantity > 1 &&
                        <button
                            onClick={() => decrease(product)}
                            className="btn btn-danger btn-sm mb-1">
                            <MinusCircleIcon width={"20px"} />
                        </button>
                    }

                    {
                        product.quantity === 1 &&
                        <button
                            onClick={() => removeProduct(product)}
                            className="btn btn-danger btn-sm mb-1">
                            <TrashIcon width={"20px"} />
                        </button>
                    }

                </div>
            </div> */}
        </>
    );
}

export default CartItem;