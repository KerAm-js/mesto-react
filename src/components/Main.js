import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import Card from "./Card";

export default function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  const handleCardLike = card => {
    const isLiked = card.likes.some(user => user._id === currentUser._id);
    if (!isLiked) {
      api.setLike(card._id)
        .then(card => setCards(cards.map(item => item._id === card._id ? card : item)))
        .catch(e => console.log(e))
    } else {
      api.deleteLike(card._id)
        .then(card => setCards(cards.map(item => item._id === card._id ? card : item)))
        .catch(e => console.log(e))
    }
  }

  const handleCardDelete = id => {
    api.deleteCard(id)
      .then(() => setCards(cards.filter(card => card._id !== id)))
      .then(e => console.log(e))
  }

  useEffect(() => {
    api.getCards()
      .then(cards => {
        setCards(cards)
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватарка"/>
          <button className="button profile__edit-avatar-btn" onClick={onEditAvatar}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__username">
            {currentUser.name}
          </h1>
          <button aria-label="редактировать профиль" onClick={onEditProfile} type="button" className="button profile__edit-button"/>
          <p className="profile__about">
            {currentUser.about}
          </p>
        </div>
        <button type="button" aria-label="добавить пост" onClick={onAddPlace} className="button profile__add-place-button"/>
      </section>

      <section className="elements"> 
        <ul className="elements__list">
          {
            cards.map(item => (
              <Card 
                key={item._id} 
                card={item} 
                onCardClick={onCardClick} 
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            ))
          }
        </ul>
      </section>

    </main>
  )
}