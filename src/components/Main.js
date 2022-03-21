import React from "react";

export default function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img className="profile__avatar" src="#" alt="Аватарка"/>
          <button className="button profile__edit-avatar-btn"></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__username">
          </h1>
          <button aria-label="редактировать профиль" type="button" className="button profile__edit-button">
          </button>
          <p className="profile__about">
          </p>
        </div>
        <button type="button" aria-label="добавить пост" className="button profile__add-place-button">
        </button>
      </section>

      <section className="elements"> 
        <ul className="elements__list">
        </ul>
      </section>

    </main>
  )
}