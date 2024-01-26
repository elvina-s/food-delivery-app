import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/slices/cartSlice";

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    return (
        <div className="Cart">
            <img 
            className="cartIcon"
            src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png"
            alt="cart"
            />
            <p className="totalPrice">TOTAL: ${totalPrice} </p>

            {cartItems.map(cartItem => 
            (<CartItem 
                key={cartItem.id} 
                cartItem={cartItem}
                />)
            )}
        </div>
    );
}

export default Cart;