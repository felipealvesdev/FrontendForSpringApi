import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar"
import { ProductCard } from "../../components/ProductCard/ProductCard.style"
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

type Props = {
    className?: string,
}
export default function ProductStruct(props:Props) {

    interface RouteParams extends Record<string, string | undefined> {
        id: string;
    }

    const params = useParams<RouteParams>();
    const { id } = params;

    const data = useSelector(state => state.user);
    const urlGetProduct = `http://localhost:8080/products/${id}`;
    const token = data.token;
    const config = {
        headers: {
        'Authorization': `Bearer ${token}`
        }
    }

    type Product = {
        id: string,
        model: string,
        name: string,
        price: number,
        quantity: number
    }


    const [ post, setPost ] = useState<Product>({
        id:"",
        name:"",
        model:"",
        price:0,
        quantity:0
    });

    const [ isUpdating, setIsUpdating ] = useState(false);

    useEffect(()=>{
        axios.get(urlGetProduct, config).then(response => {
            console.log("Resposta do servidor no id: ", response.data);
            setPost(response.data);
        })
        .catch(error => {
            console.log("Erro ao enviar requisicao get: ", error);
        })
    },[])


  return (
    <div className={props.className}>
        <Navbar />

        <ProductCard
            id={post.id} 
            productName={post.name} 
            productModel={post.model}
            productPrice={post.price}
            productQuantity={post.quantity}
        />




    </div>
  )
}
