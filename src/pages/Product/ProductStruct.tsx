import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar"
import { ProductCard } from "../../components/ProductCard/ProductCard.style"
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ProductFormCard } from "../../components/CreateProductCard/ProductFormCardStruct.style";
import { Popup } from "../../components/Popup/Popup.style";


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
    const urlPutProduct = `http://localhost:8080/products/${id}`;
    const urlDeleteProduct = `http://localhost:8080/products/${id}`;

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
        setModel(post.model);
        setName(post.name);
        setPrice(post.price);
        setQuantity(post.quantity);
    }
    const handleDelete = () => {
        setIsDeleting(true);
        axios.delete(urlDeleteProduct, config).then(response => {
            console.log(response.data)
            setTimeout(()=>{
                navigate(`/products`);
            },2000);
        })
        .catch(error => {
            console.log("Erro ao enviar requisicao get: ", error);
        })
        
        
    }

    const [ isUpdating, setIsUpdating ] = useState(false);
    const [ isShowingPopup, setIsShowingPopup ] = useState(false);
    const [ isDeleting, setIsDeleting ] = useState(false);


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

    

    const [ sendPost, setSendPost ] = useState<Product>({
        id: `${id}`,
        name: post.name,
        model: post.model,
        price: post.price,
        quantity: post.quantity
    });

    useEffect(()=> {
        setSendPost({
            id: `${id}`,
            name: name,
            model: model,
            price: price,
            quantity: quantity
        })
    }, [post, model, name, price, quantity])


    const handleSubmit = async () => {

        console.log("Clicou atualizar");
        setSendPost({
            id: `${id}`,
            name: name,
            model: model,
            price: price,
            quantity: quantity
        })
        console.log(
            sendPost
        )

        await axios.put(urlPutProduct, sendPost, config).then(response => {
            console.log("Resposta do servidor no id: ", response.data);
            setIsShowingPopup(true);
            setTimeout(()=> {
                navigate(`/products`)
                setIsShowingPopup(false);
            },2000);
        })
        .catch(error => {
            console.log("Erro ao enviar requisicao get: ", error);
        })
    }

    useEffect(()=> {
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
        <h1>Valor de isShowingPopup: {`${isShowingPopup}`}</h1>
        <h1>Valor de isShowingPopup: {`${isDeleting}`}</h1>
        
        {isUpdating && (
                <ProductFormCard
                    handleModelInput={handleModelInput}
                    handleNameInput={handleNameInput}
                    handlePriceInput={handlePriceInput}
                    handleQuantityInput={handleQuantityInput}

                    handleModelValue={model}
                    handleNameValue={name}
                    handlePriceValue={price}
                    handleQuantityValue={quantity}

                    handleSubmit={handleSubmit}

                    isShowingPopup={isShowingPopup}
                    popupTitle="Produto alterado!"
                    popupMessage="Você será redirecionado para a página principal."
                />
        )}

        {isDeleting && (
                <Popup className=""
                    title="Item deletado com sucesso!" 
                    message="Você será redirecionado para a página principal" 
                    $inputColor="#E8fA20"
                />
        )}
        

    </div>
  )
}
