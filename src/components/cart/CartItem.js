import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../redux/slices/cartSlice";
import Data from "../../data/Data";

const CartItem = ({cartItem}) => {
    const dishes = Data.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();
    return(
        <div className="CartItem">
            <p className="dishName">{dishes.name}</p>
            <p className="dishPortions">{cartItem.quantity} portion(-s)</p>
            <p className="dishPrice">Price: $ {dishes.price * cartItem.quantity}</p>
            <button
            className="deleteBtn"
            onClick={() => dispatch(deleteFromCart({cartItemId: cartItem.id}))}>
                Delete
            </button>
        </div>
    )
}

export default CartItem;