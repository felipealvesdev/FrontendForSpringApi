import { useEffect, useState } from "react";
import { Card } from "../../components/Cards/Cards";
import styles from "./Login.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changeUser, setToken} from "../../redux/userSlice";
import Navbar from "../../components/Navbar/Navbar";


export default function Login() {

  const urlGetProducts = "http://localhost:8080/products"
  const urlPost = "http://localhost:8080/auth/login"
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6ImFkbWluIiwiZXhwIjoxNzA2NjQzNDU5fQ.RQPrZ86oSxVPQhZOXQf2Yk8_Z03TO5duz5qTonfxyE0"
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
  
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [formData, setFormData] = useState({
    login: "admin",
    password: "123"
  })

  const dispatch = useDispatch();



  const handleLogin = async (event) => {
    
    event.preventDefault();
    setFormData({
      login: "admin",
      password: "123"
    })

    
    

   await axios.post(urlPost, formData)
    .then(response => {
      console.log("Resposta do servidor ", response.data)
      dispatch(setToken(response.data?.token));
      dispatch(changeUser({
        login: formData.login,
        password: formData.password,
        token: String(response.data?.token),
        isLogged: true,
      }))
    })
    .catch(error => {
      console.log("Erro ao enviar a requisicao: ", error)
    })
  }



  useEffect(()=>{
    axios.get(urlGetProducts, config).then(response => {
      console.log("Resposta do servidor: ", response.data)
    })
    .catch(error => {
      console.log("Erro ao enviar requisicao get: ", error)
    })
  },[])

  const data = useSelector(state => state.user);
  // já está salvando o token no redux !!!!!!!!!!

  Object.keys(data).forEach((item)=>{
    console.log(item + " = " + data[item])
  })

  return (
    <div className={styles.container}>

      <Navbar />

      <Card className={styles.card}>
          <form onSubmit={handleLogin}>
              <label>Digite seu nome</label>
              <input onChange={(e)=> setLogin(e.target.value)}/>

              <label>Digite sua senha</label>
              <input onChange={(e)=> setPassword(e.target.value)}/>

              <button type="submit">Fazer login</button>
          </form>
      </Card>
    </div>
  )
}
