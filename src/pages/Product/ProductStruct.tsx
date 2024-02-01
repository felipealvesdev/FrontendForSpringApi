import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar"
import { ProductCard } from "../../components/ProductCard/ProductCard.style"
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ProductFormCard } from "../../components/CreateProductCard/ProductFormCardStruct.style";

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

    const navigate = useNavigate();

    const handleGetBack = () => {
        navigate(`/products`);
    }
    const handleUpdate = () => {
        setIsUpdating(prev => !prev)
    }
    const handleDelete = () => {
        navigate(`/products`)
    }

    const [ isUpdating, setIsUpdating ] = useState(false);


    const [ model, setModel ] = useState<string>("");
    const [ name, setName ] = useState<string>(post.name);
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



    const handleSubmit = async (event) => {
        event.preventDefault();

        await axios.get(urlGetProduct, config).then(response => {
            console.log("Resposta do servidor no id: ", response.data);
            navigate(`/products/${id}`)
        })
        .catch(error => {
            console.log("Erro ao enviar requisicao get: ", error);
        })
    }

    

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
            handleGetBack={handleGetBack}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
        />
        <h1>Valor de isUpdating: {`${isUpdating}`}</h1>
        {isUpdating && (
            <div>
                <ProductFormCard
                    handleModelInput={handleModelInput}
                    handleNameInput={handleNameInput}
                    handlePriceInput={handlePriceInput}
                    handleQuantityInput={handleQuantityInput}

                    handleModelValue={post.model}
                    handleNameValue={post.name}
                    handlePriceValue={post.price}
                    handleQuantityValue={post.quantity}

                    handleSubmit={handleSubmit}
                />
            </div>
        )}
        

    </div>
  )
}
