import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Products.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../../components/ProductCard/ProductCard.style";
import { ProductCardPreview } from "../../components/ProductCardPreview/ProductCardPreview.style";


export default function Products() {

    const data = useSelector(state => state.user);
    const urlGetProducts = "http://localhost:8080/products";
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

    const [ posts, setPosts ] = useState<Product[]>();

    useEffect(()=>{

    },[]);

    useEffect(()=>{
        axios.get(urlGetProducts, config).then(response => {
            console.log("Resposta do servidor: ", response.data);
            setPosts(response.data);
        })
        .catch(error => {
            console.log("Erro ao enviar requisicao get: ", error);
        })
    },[])


    return (
        <div className={styles.container}>
            <Navbar />
            <h1>Products page</h1>
            
            <div className={styles.products}>
                {posts  && posts.map((post) => (
                            <ProductCardPreview
                                id={post.id} 
                                productName={post.name}
                            />
                    ))}    
            </div>
        </div>
    )
}
