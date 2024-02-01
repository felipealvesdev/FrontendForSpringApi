import { useNavigate } from "react-router-dom"

type Props = {
    className?:string,
    id: string,
    productName?: string,
    productModel?: string,
    productPrice?: number,
    productQuantity?: number,
    handleGetBack: () => void,
    handleUpdate: () => void,
    handleDelete: () => void
}

export default function ProductCardStruct(props:Props) {


  return (
    <div className={props.className}>
        <p>ID do produto: {props.id}</p>
        <p>Nome do produto: {props.productName}</p>
        <p>Modelo do produto: {props.productModel}</p>
        <p>Preço do produto: {props.productPrice}</p>
        <p>Quantidade de produto: {props.productQuantity}</p>
        <div className='buttons'>
            <button onClick={props.handleGetBack}>Voltar</button>
            <button onClick={props.handleUpdate}>Alterar</button>
            <button onClick={props.handleDelete}>Deletar</button>
        </div>

    </div>
  )
}
