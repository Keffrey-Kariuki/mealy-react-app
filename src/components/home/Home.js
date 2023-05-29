import { useState, useEffect } from 'react';
import './Home.css'

const MEALY_URL_GET_MEALS = "https://keffrey-mealy-server.onrender.com/meal/get"

function Home() {

    const [meals, setMeals] = useState([])

    const getMeals = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setMeals(data.data)
            })
    }

    useEffect(() => {
        getMeals(MEALY_URL_GET_MEALS)
    }, [meals])



    return ( 
        <div>
            <div className="home-div">
                <div className='home-text-div'>
                    <h2 className='h2-hello'>
                        FROM AFRICAN DISHES TO FAST FOOD MEALS<br />
                        WE HAVE IT ALL!
                    </h2>

                    <button className='create-button' onClick={()=> document.location='Create'}>
                        Create Account
                    </button> 
                </div>
            
                <div className="burger-image-div">
                    <img className='burger-image' src='images/burger-2.png' alt='no img found'/>
                </div>
            </div>

            <div className="meal-div">
                <h1 className='what-we-serve'>
                    WHAT WE SERVE
                </h1>

                {meals.map((meal, index) => {
                    return (
                        <Meals name={meal.name} image={meal.url} price={meal.price} key={'home_'+index}/>
                    );
                })}

            </div>
        </div>
    );
}

function Meals({name, image, price}) {

    return ( 
        <div className='meal-card'>
            <h2 className="meal-name">
                {name}
            </h2>

            <h2 className='meal-price'>
                Ksh {price}
            </h2>

            <img className='meal-image' src={image} alt='no img found'/>
        </div>
    );

}

export default Home;