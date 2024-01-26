const ChangeQuantity = ({quantity, setQuantity}) => {
    const increaseQuantity = () => {
        if(quantity >= 0) {
            setQuantity(quantity + 1)
        } else {return}
    }
    const decreaseQuantity = () => {
        if(quantity > 0) {
            setQuantity(quantity - 1)
        }
        else {return}
    }

    return (
        <div className="regulateQuantityAndTheBtn">
            <div className="regulateQuantity">
                <button 
                onClick={decreaseQuantity}
                className="decreaseQuantity"
                >
                    -
                </button>
                <p className="dishQuantityToAddToCart">
                {quantity}
                </p>
                <button
                onClick={increaseQuantity}
                className="increaseQuantity"
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default ChangeQuantity;