import React from "react";
import success from '../images/VectorSuccess.svg';
import error from '../images/VectorError.svg';

const InfoTooltip = ({ title, status, isOpened, onClose, }) => {
  return (
    <div className={`modal modal_type_tooltip ${isOpened ? 'modal_opened' : null}`}>
      <div className="modal__block modal__block_type_tooltip">
        <img className="modal__tooltip-image" src={status === 'success' ? success : error} />
        <h2 className="modal__title modal__title_type_tooltip">
          {title}
        </h2>
        <button type="button" aria-label="закрыть" className="button modal__close-button" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default InfoTooltip;