import ChangeQuantity from "../ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/slices/cartSlice";
import { useState } from "react";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    return (
        <div className="Dish">
            <div className="dishInfo">
                <img
                src={`./${dish.img}.webp`}
                alt="dish"
                className="dishImage"
                />
                <p className="dishName">
                    {dish.name}
                </p>
                <p className="dishInListPrice">
                    $ {dish.price}
                </p>
            </div>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <div className="divAddToCartBtn">
                <button
                onClick={() => {dispatch(addItemToCart({dish, quantity}))}}
                className="addToCartBtn">
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Dish;