import Filter from "./Filter";

const AllCategories = () => {
    const categories = [
        "SEAFOOD",
        "ITALIAN",
        "APPETIZERS",
        "SALADS",
        "ALL",
    ]
    return (
        <div className="AppAC">
            {categories.map(category => 
                <Filter
                key={category}
                category={category}
                />
            )}
        </div>
    );
}

export default AllCategories;