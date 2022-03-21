import React from "react";
import Logo from './images/VectorLogo.svg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="logo" src={Logo} alt="Логотип"/>
      </header>

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

      <footer className="footer">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>

      <div className="modal modal_type_profile">
        <div className="modal__block">
          <h2 className="modal__title">
            Редактировать профиль
          </h2>
          <button type="button" aria-label="закрыть" className="button modal__close-button"></button>
          <form noValidate name="formProfile" className="form form_type_profile">
            <input 
              placeholder="имя" 
              required
              name="username" 
              id="username"
              type="text" 
              className="form__input form__input_value_username"
              minLength="2"
              maxLength="40"
            />
            <span className="form__error username-error">Заполните это поле</span>
            <input 
              placeholder="описание" 
              required
              name="description" 
              id="description"
              type="text" 
              className="form__input form__input_value_about"
              minLength="2"
              maxLength="200"
            />
            <span className="form__error description-error">Заполните это поле</span>
            <button type="submit" aria-label="сохранить" className="button form__button form__button_type_save">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="modal modal_type_avatar">
        <div className="modal__block">
          <h2 className="modal__title">
            Обновить аватар
          </h2>
          <button type="button" aria-label="закрыть" className="button modal__close-button"></button>
          <form noValidate name="formAvatar" className="form form_type_avatar">
            <input 
              placeholder="Ссылка на картинку" 
              required
              name="avatarLink" 
              id="avatar-link"
              type="url" 
              className="form__input form__input_value_avatar-link"
            />
            <span className="form__error avatar-link-error">Заполните это поле</span>
            <button type="submit" aria-label="сохранить" className="button form__button form__button_type_save">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div className="modal modal_type_place">
        <div className="modal__block">
          <h2 className="modal__title">
            Новое место
          </h2>
          <button type="button" aria-label="закрыть" className="button modal__close-button"></button>
          <form noValidate name="formPlace" className="form form_type_place">
            <input 
              placeholder="Название" 
              required
              name="placeName" 
              id="place-name"
              type="text" 
              className="form__input form__input_value_place-name"
              minLength="2"
              maxLength="30"
            />
            <span className="form__error place-name-error">Заполните это поле</span>
            <input 
              placeholder="Ссылка на картинку" 
              required
              name="imageLink" 
              id="image-link"
              type="url" 
              className="form__input form__input_value_image-link"
            />
            <span className="form__error image-link-error">Заполните это поле</span>
            <button disabled type="submit" aria-label="создать" className="button form__button form__button_type_add form__button_disabled">
              Создать
            </button>
          </form>
        </div>
      </div>

      <div className="modal modal_type_image">
        <div className="modal__content-layout">
          <img src="#" alt="картинка" className="modal__image"/>
          <button type="button" aria-label="закрыть" className="button modal__close-button"></button>
          <p className="modal__place-name"></p>
        </div>
      </div>

      <div className="modal modal_type_confirm">
        <div className="modal__block">
          <h2 className="modal__title">
            Вы уверены?
          </h2>
          <button type="button" aria-label="закрыть" className="button modal__close-button"></button>
          <form noValidate name="formConfirm" className="form form_type_confirm">
            <button type="submit" aria-label="да" className="button form__button form__button_type_confirm">
              Да
            </button>
          </form>
        </div>
      </div>
      
      <template id="element">
        <li className="element">
          <div className="element__image"></div>
          <button type="button" aria-label="удалить" className="button element__delete-button"></button>
          <div className="element__info">
            <h2 className="element__title">
              
            </h2>
            <div className="element__like-container">
              <button type="button" aria-label="лайк" className="button element__like-button">
              </button>
              <p className="element__like-count"></p>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
