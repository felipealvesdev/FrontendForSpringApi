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



export default function PutProductFormCardStruct(props:Props) {

  



  return (
    <div className={props.className}>
        <form className="form">
              <label>Digite o nome do produto:</label>
              <input onChange={props.handleNameInput} value={props.handleNameValue} placeholder="Digite o nome do produto"/>

              <label>Digite o modelo do produto:</label>
              <input onChange={props.handleModelInput} value={props.handleModelValue} placeholder="Digite o modelo do produto"/>

              <label>Digite o preço do produto:</label>
              <input onChange={props.handlePriceInput} value={props.handlePriceValue} type="number" placeholder="Digite o preço do produto"/>

              <label>Digite a quantidade do produto:</label>
              <input onChange={props.handleQuantityInput} value={props.handleQuantityValue} type="number" placeholder="Digite a quantidade do produto"/>

              <button type="button" onClick={props.handleSubmit}>Alterar produto</button>
              {props.isShowingPopup ?
                (<Popup className="popup" title={props.popupTitle} message={props.popupMessage}/>)
                :
                ""
              }
          </form>
          
          
    </div>
  )
}
