import { useEffect, useState } from "react";
import { Card } from "../../components/Cards/Cards";
import styles from "./Login.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changeUser, setToken} from "../../redux/userSlice";
import { Navigate, useNavigate } from "react-router-dom";


export default function Login() {

  const urlPost = "http://localhost:8080/auth/login"
  
  const navigate = useNavigate();
  
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [ isShowingError, setIsShowingError ] = useState(false);
  const errorMsg = "Usuário e / ou senha incorreta";

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
    
   await axios.post(urlPost, formData)
    .then(response => {
      console.log("Resposta do servidor ", response.data)
      dispatch(setToken(response.data?.token));
      dispatch(changeUser({
        login: formData.login,
        password: formData.password,
        token: String(response.data?.token),
        isLogged: true,
        role: String(response.data?.role)
      }))
      navigate("/products")
    })
    .catch(error => {
      console.log("Erro ao enviar a requisicao: ", error)
      setIsShowingError(true);
    })
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

  const data = useSelector(state => state.user);
  // já está salvando o token no redux !!!!!!!!!!

  Object.keys(data).forEach((item)=>{
    console.log(item + " = " + data[item])
  })

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
          <form>
              <h1>Seja bem-vindo! <br></br>{`${greetings}`}</h1>
              <h2>Faça login</h2>
              {isShowingError? <h3 className={styles.errorMsg}>{`${errorMsg}`}</h3> : ""}
              <input onChange={(e)=> setLogin(e.target.value)} placeholder="Usuário"/>

              <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Senha"/>

              <button type="button" onClick={handleLogin}>Fazer login</button>
          </form>
      </Card>
      {data.token && (
        <Navigate to="/products"/>
      )}
    </div>
  )
}
