import { useState, useEffect } from 'react';
import './Profile.css'

const MEALY_URL_GET_MENU = "https://keffrey-mealy-server.onrender.com/menu/get"

function Profile() {

    const [menu, setMenu] = useState([])

    const getMenu = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setMenu(data.data)
            })
    }

    useEffect(() => {
        getMenu(MEALY_URL_GET_MENU)

    }, [menu])

    return ( 
        <div>
            <div className='menu-container'>
                <h2 className='menu-day'>MENU FOR THE DAY</h2>
                {menu.map((menu, index) => {
                    return (
                        <Menu name={menu.mealName} url={menu.mealUrl} price={menu.mealPrice} qty={menu.mealQty} key={'menu_'+index} />
                    );
                })}
            </div>
        </div>
    );
}

function Menu({name, url, price, qty}) {
    return (
        <div className='menu'>
            <h3 className='menu-name' >{name}</h3>
            <img className='menu-image' src={url} alt='no img found' />
            
            <h3 className='menu-qty' > Quantity - {qty}</h3>
            <button className='menu-price' >{price}</button>
        </div>
    );

}



export default Profile;