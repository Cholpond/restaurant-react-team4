const Button = ({getAllMeals, getBreakfast, getLunch, getShakes, getDinner}) => {
    return (
        <div>
            <button onClick={getAllMeals}>All</button>
            <button onClick={getBreakfast}>Breakfast</button>
            <button onClick={getLunch}>Lunch</button>
            <button onClick={getShakes}>Shakes</button>
            <button onClick={getDinner}>Dinner</button>
        </div>
    )
}

export default Button