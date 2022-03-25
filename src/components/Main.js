import React, { useEffect, useState } from "react";
import Api from '../utils/api';
import Card from "./Card";

export default function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [userAvatar, setUserAvatar] = useState('');
  const [userDescription, setUserDesceiption] = useState('');
  const [userName, setUserName] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Api.getUserData()
      .then(userData => {
        setUserAvatar(userData.avatar);
        setUserDesceiption(userData.about);
        setUserName(userData.name);
      })
      .catch(e => console.log(e));

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
          <img className="profile__avatar" src={userAvatar} alt="Аватарка"/>
          <button className="button profile__edit-avatar-btn" onClick={onEditAvatar}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__username">
            {userName}
          </h1>
          <button aria-label="редактировать профиль" onClick={onEditProfile} type="button" className="button profile__edit-button"/>
          <p className="profile__about">
            {userDescription}
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