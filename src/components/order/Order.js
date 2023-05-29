import React, { useState, useEffect } from 'react'
import './Order.css'

const MEAL_DB_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"

function Order() {

    const [meals, setMeals] = useState([])

    const getMeals = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setMeals(data.categories)
            })
    }

    useEffect(() => {
        getMeals(MEAL_DB_URL)

    }, [meals])


    return ( 
        <div className='order-container'>
            {meals.map(
                (meal) => {
                    return (
                        <Categories image={ meal.strCategoryThumb} title={meal.strCategory} />
                    );
                }
            )}
        </div>
    );
}

function Categories({image, title}) {
    return (
        <div className='card'>
            <h3 className='card-title'>{title}</h3>
            <img className='card-image' src={image} alt='no img found' />
        </div>
    );
}

export default Order;