import { useSelector } from "react-redux"

type Props = {
    className?:string,
    id: string,
    isUpdating?:boolean,
    productName?: string,
    productModel?: string,
    productPrice?: number,
    productQuantity?: number,
    handleGetBack: () => void,
    handleUpdate: () => void,
    handleDelete: () => void
}

export default function ProductCardStruct(props:Props) {

  const data = useSelector(state => state.user)


  return (
    <div className={props.className}>
        <p>ID do produto: {props.id}</p>
        <p>Nome do produto: {props.productName}</p>
        <p>Modelo do produto: {props.productModel}</p>
        <p>Preço do produto: {props.productPrice}</p>
        <p>Quantidade de produto: {props.productQuantity}</p>
        <div className='buttons'>
            <button onClick={props.handleGetBack} className="previousPageBtn" >Voltar</button>
            {data.role == "admin" && (
                <button onClick={props.handleUpdate} className="updateBtn">{!props.isUpdating? "Alterar" : "Fechar"}</button>              
                
            )}
            {data.role == "admin" && (
              <button onClick={props.handleDelete} className="deleteBtn">Deletar</button>
            )}


        </div>

    </div>
  )
}
