import React from "react";

const ImagePopup = ({selectedCard, onClose}) => {
  
  return (
    <div className={`modal modal_type_image${selectedCard && ' modal_opened'}`}>
      <div className="modal__content-layout">
        <img src={selectedCard?.link} alt="картинка" className="modal__image"/>
        <button type="button" aria-label="закрыть" className="button modal__close-button" onClick={onClose} />
        <p className="modal__place-name">{selectedCard?.name}</p>
      </div>
    </div>
  )
}

export default ImagePopup;