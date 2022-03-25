import React from "react";


const Card = ({card, onCardClick}) => {
  const cardClickHandler = () => onCardClick(card);

  return (
    <li className="element">
      <div className="element__image" style={{ backgroundImage: `url(${card.link})` }} onClick={cardClickHandler} />
      <button type="button" aria-label="удалить" className="button element__delete-button"></button>
      <div className="element__info">
        <h2 className="element__title">
          {card.name}
        </h2>
        <div className="element__like-container">
          <button type="button" aria-label="лайк" className="button element__like-button">
          </button>
          <p className="element__like-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;