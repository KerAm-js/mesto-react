import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Api from '../utils/api';
import Card from "./Card";

export default function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [cards, setCards] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    Api.getCards()
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
            cards.map(item => (<Card key={item._id} card={item} onCardClick={onCardClick} />))
          }
        </ul>
      </section>

    </main>
  )
}