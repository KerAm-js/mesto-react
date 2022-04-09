import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


const Card = ({card, onCardClick}) => {
  const cardClickHandler = () => onCardClick(card);
  const currentUser = useContext(CurrentUserContext);

  const isOwn = currentUser._id === card.owner._id;
  const isLiked = card.likes.some(user => user._id === currentUser._id);
  const likeBtnClass = `button element__like-button ${ isLiked ? 'element__like-button_active' : null }`;

  return (
    <li className="element">
      <div className="element__image" style={{ backgroundImage: `url(${card.link})` }} onClick={cardClickHandler} />
      {
        isOwn && (<button type="button" aria-label="удалить" className="button element__delete-button"></button>)
      }
      <div className="element__info">
        <h2 className="element__title">
          {card.name}
        </h2>
        <div className="element__like-container">
          <button type="button" aria-label="лайк" className={likeBtnClass}>
          </button>
          <p className="element__like-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;