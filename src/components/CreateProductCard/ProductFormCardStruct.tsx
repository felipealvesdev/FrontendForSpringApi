import { Popup } from "../Popup/Popup.style"

type Props = {
    className?: string,
    handleIdInput?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleModelInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleNameInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handlePriceInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleQuantityInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit:(e: React.MouseEvent<HTMLButtonElement>) => void,
    handleModelValue: string,
    handleNameValue: string,
    handlePriceValue: number,
    handleQuantityValue: number,
    isShowingPopup: boolean,
    popupTitle: string,
    popupMessage: string
}



export default function ProductFormCardStruct(props:Props) {

  



  return (
    <div className={props.className}>
        <h1>CreateProductCardStruct</h1>
        
        <form className="form">
              <label>Digite o modelo do produto:</label>
              <input onChange={props.handleModelInput} value={props.handleModelValue}/>

              <label>Digite o nome do produto:</label>
              <input onChange={props.handleNameInput} value={props.handleNameValue}/>

              <label>Digite o preço do produto:</label>
              <input onChange={props.handlePriceInput} value={props.handlePriceValue} type="number"/>

              <label>Digite a quantidade do produto:</label>
              <input onChange={props.handleQuantityInput} value={props.handleQuantityValue} type="number"/>

              <button type="button" onClick={props.handleSubmit}>Enviar</button>
          </form>
          {props.isShowingPopup ?
              (<Popup title={props.popupTitle} message={props.popupMessage}/>)
              :
              ""
          }
          
    </div>
  )
}
