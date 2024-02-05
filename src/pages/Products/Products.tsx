import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Products.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../../components/ProductCard/ProductCard.style";
import { ProductCardPreview } from "../../components/ProductCardPreview/ProductCardPreview.style";
import { PutProductFormCard } from "../../components/PutProductCard/PutProductFormCardStruct.style";
import { PostProductFormCard } from "../../components/PostProductCard/PostProductFormCard.style";
import { useNavigate } from "react-router-dom";


export default function Products() {

    const data = useSelector(state => state.user);
    const urlGetProducts = "http://localhost:8080/products";
    const urlPostProduct = "http://localhost:8080/products";

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

    type PostProduct = {
        model: string,
        name: string,
        price: number,
        quantity: number
    }

    const navigate = useNavigate();

    const [ posts, setPosts ] = useState<Product[]>();
    const [ isCreatingPost, setIsCreatingPost ] = useState<boolean>();
    const [ isShowingPopup, setIsShowingPopup ] = useState(false);

    const [ model, setModel ] = useState<string>("");
    const [ name, setName ] = useState<string>("");
    const [ price, setPrice ] = useState<number>(0);
    const [ quantity, setQuantity ] = useState<number>(0);

    const handleModelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModel(e.target.value);
    }
    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handlePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(parseFloat(e.target.value));
    }
    const handleQuantityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseFloat(e.target.value));
    }



    const HandleCreatingPost = () => {
        setIsCreatingPost(prev => !prev);
    }

    const getPosts = async () => {
        await axios.get(urlGetProducts, config).then(response => {
            console.log("Resposta do servidor: ", response.data);
            setPosts(response.data);
        })
        .catch(error => {
            console.log("Erro ao enviar requisicao get: ", error);
        })
    }

    const [ post, setPost ] = useState<PostProduct>({
        name:"",
        model:"",
        price:0,
        quantity:0
    });

    useEffect(()=> {
        setPost({
            name: name,
            model: model,
            price: price,
            quantity: quantity
        })
    }, [model, name, price, quantity])

    const handleSubmit = async () => {

        console.log("Clicou atualizar");
        setPost({
            name: name,
            model: model,
            price: price,
            quantity: quantity
        })
        console.log(
            post
        )

        await axios.post(urlPostProduct, post, config).then(response => {
            console.log("Resposta do servidor no id: ", response.data);
            setIsShowingPopup(true);
            setTimeout(()=> {
                getPosts();
                navigate(`/products`)
                setIsShowingPopup(false);
            },2000);
        })
        .catch(error => {
            console.log("Erro ao enviar requisicao get: ", error);
        })
    }




    useEffect(()=>{
       getPosts();
    },[])


    return (
        <div className={styles.container}>
            <Navbar />
            <h1>Products page</h1>
            <button onClick={HandleCreatingPost}>Criar novo produto</button>
            {isCreatingPost && (
                <PostProductFormCard
                    handleModelInput={handleModelInput}
                    handleNameInput={handleNameInput}
                    handlePriceInput={handlePriceInput}
                    handleQuantityInput={handleQuantityInput}


                    handleSubmit={handleSubmit}

                    isShowingPopup={isShowingPopup}
                    popupTitle="Produto alterado!"
                    popupMessage="Você será redirecionado para a página principal."
                />
            )}
            
            <div className={styles.products}>
                {posts  && posts.map((post, index) => (
                            <ProductCardPreview key={index}
                                id={post.id} 
                                productName={post.name}
                            />
                    ))}    
            </div>
        </div>
    )
}
