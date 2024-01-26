import Data from "../../data/Data";
import Dish from "../dish/Dish";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/slices/dishesSlice";

const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory)
    return (
        <div>
            {
                Data.filter(dish => {
                    if(selectedCategory === "ALL") return true;
                    return selectedCategory === dish.category;
                })
                .map(dish => <Dish key={dish.id} dish={dish} />) 
            }
        </div>
    );
} 

export default Dishes;