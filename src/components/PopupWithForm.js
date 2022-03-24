import React from 'react';

const PopupWithForm = ({children, name, title, isOpened, onClose}) => {
  return (
    <div className={`modal modal_type_${name} ${isOpened ? 'modal_opened' : null}`}>
        <div className="modal__block">
          <h2 className="modal__title">
            {title}
          </h2>
          <button type="button" aria-label="закрыть" className="button modal__close-button" onClick={onClose}></button>
          <form noValidate name={`form${name[0].toUpperCase()}${name.slice(1)}`} className="form form_type_profile">
            {children}
          </form>
        </div>
      </div>
  )
}

export default PopupWithForm;