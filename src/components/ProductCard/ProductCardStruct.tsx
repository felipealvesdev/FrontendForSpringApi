import { useNavigate } from "react-router-dom"

type Props = {
    className?:string,
    id: string,
    productName?: string,
    productModel?: string,
    productPrice?: number,
    productQuantity?: number
}

export default function ProductCardStruct(props:Props) {

  const navigate = useNavigate();

  const handleGetBack = () => {
    navigate(`/products`)
  }

  return (
    <div className={props.className}>
        <p>ID do produto: {props.id}</p>
        <p>Nome do produto: {props.productName}</p>
        <p>Modelo do produto: {props.productModel}</p>
        <p>Preço do produto: {props.productPrice}</p>
        <p>Quantidade de produto: {props.productQuantity}</p>
        <div className='buttons'>
            <button onClick={handleGetBack}>Voltar</button>
            <button>Alterar</button>
            <button>Deletar</button>
        </div>

    </div>
  )
}
