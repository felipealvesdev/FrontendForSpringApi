import { useEffect, useState } from "react";
import { Card } from "../../components/Cards/Cards";
import styles from "./Login.module.css";
import axios from "axios";


export default function Register() {

  const url = "http://localhost:8080/auth/register"
  /*const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6ImFkbWluIiwiZXhwIjoxNzA2NTY2Mjk4fQ.yD1lHhqMdOPmmQKxBOF9CBeNaMIJmIeKvHk0X2lOg8U"
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };*/
  
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const [formData, setFormData] = useState({
    login: login,
    password: password
  })


  const handleLogin = async () => {
    setFormData({
      login: login,
      password: password
    })

    

   axios.post(url, formData)
    .then(response => {
      console.log("Resposta do servidor ", response.data)
    })
    .catch(error => {
      console.log("Erro ao enviar a requisicao: ", error)
    })
  }

  useEffect(()=>{
    axios.get(url).then(response => {
      console.log("Resposta do servidor: ", response.data)
    })
    .catch(error => {
      console.log("Erro ao enviar requisicao get: ", error)
    })
  },[])

  

  return (
    <div className={styles.container}>
      <Card>
          <form onSubmit={handleLogin}>
              <label>Digite seu nome</label>
              <input onChange={(e)=> setLogin(e.target.value)}/>

              <label>Digite sua senha</label>
              <input onChange={(e)=> setPassword(e.target.value)}/>
              
              <label>Digite o role:</label>
              <input onChange={(e)=> setRole(e.target.value)}/>

              <button type="submit">Fazer login</button>
          </form>
      </Card>
    </div>
  )
}
