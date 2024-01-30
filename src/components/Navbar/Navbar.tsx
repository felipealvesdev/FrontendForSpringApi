import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Navbar.module.css";
import { logout } from '../../redux/userSlice';

export default function Navbar() {

    const data = useSelector(state => state.user)
    const dispatch = useDispatch();

    const handleLogoff = () => {
        dispatch(logout())
    }

  return (
    <nav className={styles.container}>
        <div className={styles.info}>
            <h1>Bem-vindo {data.login}</h1>
            <h2>Está logado? {data.isLogged? "Sim" : "Não"}</h2>
        </div>
        <div className={styles.options}>
            {data.isLogged && (
                <button onClick={handleLogoff}>Deslogar</button>
            )}

        </div>
    </nav>
  )
}
