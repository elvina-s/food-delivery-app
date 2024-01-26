import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../redux/slices/cartSlice";
import Data from "../../data/Data";

const CartItem = ({cartItem}) => {
    const dishes = Data.find(item => item.id === cartItem.dishId);
    const dispatch = useDispatch();
    return(
        <div className="CartItem">
            <p>{dishes.name}</p>
            <p>{cartItem.quantity} portion(-s)</p>
            <p>Price: $ {dishes.price * cartItem.quantity}</p>
            <button
            onClick={() => dispatch(deleteFromCart({cartItemId: cartItem.id}))}>
                Delete
            </button>
        </div>
    )
}

export default CartItem;