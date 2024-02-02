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
        <h1>CreateProductCardStruct</h1>
        
        <form className="form">
              <label>Digite o modelo do produto:</label>
              <input onChange={props.handleModelInput}/>

              <label>Digite o nome do produto:</label>
              <input onChange={props.handleNameInput}/>

              <label>Digite o preço do produto:</label>
              <input onChange={props.handlePriceInput} type="number"/>

              <label>Digite a quantidade do produto:</label>
              <input onChange={props.handleQuantityInput} type="number"/>

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
