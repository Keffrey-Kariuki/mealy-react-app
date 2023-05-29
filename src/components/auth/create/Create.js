import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Create.css'

function Create() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isPending, setIsPending] = useState(false)
    const [emailAlready, setEmailAlready] = useState("")


    const sendData = (e) => {
        e.preventDefault();
        const profile = { name, email, password };

        setIsPending(true)

        fetch('https://keffrey-mealy-server.onrender.com/profile/create', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            mode: 'cors', 
            body: JSON.stringify(profile)
        }).then((response) => response.json())
            .then((data) => {
                if (data.message === "user has been created successfully") {
                    document.location = '/profile'
                    setEmailAlready("")
                    setIsPending(false)
                } else {
                    console.log(data.message)
                    setEmailAlready("Profile already exists!")
                    setIsPending(false)
                }
          })
    }

    return ( 

        <div className="create-div">
            <h1 className='form-header-log-in'>
                CREATE ACCOUNT
            </h1>

            <form>
                <input className='input-name' type='text' placeholder='ENTER NAME' name="name" value={name} onChange={(e) => setName(e.target.value)} />
            
                <input className='input-email' type='text' placeholder='ENTER EMAIL' name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            
                <input className='input-password' type='text' placeholder='ENTER PASSWORD' name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            
                {!isPending && <button className="submit-button" onClick={sendData}>
                    CREATE
                </button>}

                {isPending && <button disabled className="submit-button" onClick={sendData}>
                    WAIT ... 
                </button>}

                <Link to="/login">
                    <p className='do-not-have'>
                        Already have an account?
                    </p>
                </Link>

            </form>

            <h3 className="email-already">{ emailAlready}</h3>
   
        </div>
    );
}

export default Create;