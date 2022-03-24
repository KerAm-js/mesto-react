import React from "react";

export default function Main({onEditAvatar, onEditProfile, onAddPlace}) {

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img className="profile__avatar" src="#" alt="Аватарка"/>
          <button className="button profile__edit-avatar-btn" onClick={onEditAvatar}/>
        </div>
        <div className="profile__info">
          <h1 className="profile__username">
          </h1>
          <button aria-label="редактировать профиль" onClick={onEditProfile} type="button" className="button profile__edit-button"/>
          <p className="profile__about">
          </p>
        </div>
        <button type="button" aria-label="добавить пост" onClick={onAddPlace} className="button profile__add-place-button"/>
      </section>

      <section className="elements"> 
        <ul className="elements__list">
        </ul>
      </section>

    </main>
  )
}