import { useNavigate } from "react-router-dom"

type Props = {
    className?:string,
    id: string,
    productName?: string,
}

export default function ProductCardPreviewStruct(props:Props) {

  const navigate = useNavigate();

  const handleGet = () => {
    navigate(`/products/${props.id}`)
  }

  return (
    <div className={props.className}>
        <p>ID do produto: {props.id}</p>
        <p>Nome do produto: {props.productName}</p>
        <div className='buttons'>
            <button onClick={handleGet} className="viewItemBtn">Ver mais</button>
        </div>

    </div>
  )
}
