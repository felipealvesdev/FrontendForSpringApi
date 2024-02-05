import React from 'react'
import { Popup } from '../Popup/Popup.style'


type Props = {
    className?: string,
    handleIdInput?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleModelInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleNameInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handlePriceInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleQuantityInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit:(e: React.MouseEvent<HTMLButtonElement>) => void,
    isShowingPopup: boolean,
    popupTitle: string,
    popupMessage: string
}


export default function PostProductFormCardStruct(props:Props) {
    
  return (
    <div className={props.className}>
        <form className="form">
              <label>Digite o nome do produto:</label>
              <input onChange={props.handleNameInput} placeholder="Digite o nome:"/>

              <label>Digite o modelo do produto:</label>
              <input onChange={props.handleModelInput} placeholder="Digite o modelo:"/>

              <label>Digite o preço do produto:</label>
              <input onChange={props.handlePriceInput} type="number" placeholder="Ex: 20,99"/>

              <label>Digite a quantidade do produto:</label>
              <input onChange={props.handleQuantityInput} type="number"  placeholder="Ex: 37"/>

              <button type="button" onClick={props.handleSubmit}>Adicionar produto</button>

              {props.isShowingPopup ?
                (<Popup className="popup" title={props.popupTitle} message={props.popupMessage}/>)
                :
                ""
              }
          </form>
          
          
    </div>
  )
}
