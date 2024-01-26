import { useSelector, useDispatch } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../redux/slices/dishesSlice";

const Filter = ({ category }) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <div className="Category">
            <p
            onClick={() => {dispatch(filterCategory(category))}}
            className={selectedCategory === category ? "categoryButton categoryButtonSelected " : "categoryButton"}
            >
                {category}
            </p>
        </div>
    )
}

export default Filter;