import { Link } from 'react-router-dom';
import './Login.css'
import { useState } from 'react';

function Login() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [isPending, setIsPending] = useState(false)
    const [warning, setWarning] = useState("")

    const sendData = (e) => {
        e.preventDefault();
        const loginProfile = { name, password };

        setIsPending(true)

        fetch('https://keffrey-mealy-server.onrender.com/profile/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            mode: 'cors', 
            body: JSON.stringify(loginProfile)   
        }).then((response) => response.json())
            .then((data) => {
                if (data.message === "profile does not exist") {
                    setIsPending(false)
                    setWarning("Profile does not exist!")
                } 
                if (data.message === true) {
                    document.location = '/profile'
                    setIsPending(false)
                }
                if (data.message === false) {
                    setWarning("Password is incorrect!")
                    setIsPending(false)
                }

            })


    }

    return ( 
        <div className="login-div">
            <h1 className='form-header-log-in'>
                LOGIN
            </h1>

            <form>
                <input className='input-name' type='text' placeholder='ENTER NAME' name="name" value={name} onChange={(e) => setName(e.target.value) }/>

                <input className='input-password' type='text' placeholder='ENTER PASSWORD' name="password" value={password} onChange={(e) => setPassword(e.target.value) }/>

                {!isPending && <button type='submit' className='submit-button' onClick={sendData}>
                    SUBMIT
                </button>}

                {isPending && <button disabled className='submit-button' onClick={sendData}>
                    WAIT ...
                </button>}

                <Link to="/create">
                    <p className='do-not-have'>
                        Don't have an account?
                    </p>
                </Link>
            </form>

            <h3 className='warning'>{warning}</h3>

        </div>
    );
}

export default Login;