import React from "react";
import imagee from "../../components/images/1.jpeg";
import { useCart } from "../../hooks/useCart";
import { formatNumber } from "../../helpers/utils";
import {
  PlusCircleIcon,
  MinusCircleIcon,
  TrashIcon,
} from "../../components/icons";
import "./styles.css";

const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useCart();

  return (
    <>
      <div className="card-1 boxxx flex-row">
        <img src={imagee} class="imge"></img>
        <div className="group-2143 flex-col">
          <p className="txt-162">VEG</p>
          <p className="txt-657">Hamburger Vegei.</p>

          <div className="group-2142">
            <p className="txt-6110">{formatNumber(250)}</p>
          </div>
        </div>
        <div class flex-row className="buttons">
        <div className="btn-_set increment flex-row flexx">
          <button
            onClick={() => increase(product)}
            className="btn btn-primary btn-sm mr-2 mb-1 inc"
          >
            <PlusCircleIcon width={"20px"} />
          </button>
          <div className="col-sm-2 p-2 text-center inc2">
            <p className="mb-0 ing">{product.quantity}</p>
          </div>
          <button
            onClick={() => (product.quantity < 1 ? 0 : decrease(product))}
            className="btn btn-danger btn-sm mb-1 inc"
          >
            <MinusCircleIcon width={"20px"} />
          </button>
        </div>
        <div>
          {" "}
          <button className="btn btn-danger remove btn-sm mb-1 inc" onClick={() => removeProduct(product)}>
            Remove
          </button>
        </div>
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
};

export default CartItem;
