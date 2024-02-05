import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Navbar.module.css";
import { logout } from '../../redux/userSlice';

export default function Navbar() {

    const data = useSelector(state => state.user)
    const dispatch = useDispatch();

    const handleLogoff = () => {
        dispatch(logout())
    }

    const [ date, setDate ] = useState<Date>(new Date());

    const [ greetings, setGreetings ] = useState<string>("");

    useEffect(()=> {
        setInterval(()=> {
            setDate(new Date())
            if(date.getHours() < 12) {
                setGreetings("Bom dia")
            } else if (date.getHours() < 18) {
                setGreetings("Boa tarde")
            } else {
                setGreetings("Boa noite")
            }
        },1000)
    },[]);


    return (
    <nav className={styles.container}>
        <div className={styles.info}>
            <h1>{`${greetings}`}, {data.login}! </h1>
            <h2>Seja muito bem-vindo.</h2>
        </div>
        <div className={styles.options}>
            {data.isLogged && (
                <button onClick={handleLogoff}>Deslogar</button>
            )}

        </div>
    </nav>
    )
}
