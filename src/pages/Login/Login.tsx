import { useEffect, useState } from "react";
import { Card } from "../../components/Cards/Cards";
import styles from "./Login.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changeUser, setToken} from "../../redux/userSlice";
import Navbar from "../../components/Navbar/Navbar";
import { Navigate, useNavigate } from "react-router-dom";


export default function Login() {

  const urlPost = "http://localhost:8080/auth/login"
  
  const navigate = useNavigate();
  
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [formData, setFormData] = useState({
    login: "",
    password: ""
  })

  const dispatch = useDispatch();

  useEffect(()=> {
    setFormData({
      login: login,
      password: password
    })
  },[login, password])



  const handleLogin = async (event) => {
    
    event.preventDefault();

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
      navigate("/products")
    })
    .catch(error => {
      console.log("Erro ao enviar a requisicao: ", error)
    })
  }



/*  useEffect(()=>{
    axios.get(urlGetProducts, config).then(response => {
      console.log("Resposta do servidor: ", response.data)
    })
    .catch(error => {
      console.log("Erro ao enviar requisicao get: ", error)
    })
  },[])*/

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
              <input onChange={(e)=> setPassword(e.target.value)} type="password"/>

              <button type="submit">Fazer login</button>
          </form>
      </Card>
      {data.token && (
        <Navigate to="/products"/>
      )}
    </div>
  )
}
