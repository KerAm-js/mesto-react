import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {

  const [isEditProfilePopupOpened, setIsEditProfilePopupOpened] = useState(false);
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpened] = useState(false);
  const [isAddPlaceopupOpened, setIsAddPlaceopupOpened] = useState(false);

  const handleEditAvatarClick = () => {
    // document.querySelector('.modal_type_avatar').classList.add('modal_opened')
    setIsEditAvatarPopupOpened(true);
  }

  const handleEditProfileClick = () => {
    // document.querySelector('.modal_type_profile').classList.add('modal_opened')
    setIsEditProfilePopupOpened(true);
  }

  const handleAddPlaceClick = () => {
    // document.querySelector('.modal_type_place').classList.add('modal_opened')
    setIsAddPlaceopupOpened(true);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpened(false);
    setIsEditProfilePopupOpened(false);
    setIsAddPlaceopupOpened(false);
  }

  return (
    <div className="App">
      
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick} 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
      />
      <Footer />

      <PopupWithForm name='profile' title='Редактировать профиль' isOpened={isEditProfilePopupOpened} onClose={closeAllPopups}>
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
      </PopupWithForm>


      <PopupWithForm name='avatar' title='Обновить аватар' isOpened={isEditAvatarPopupOpened} onClose={closeAllPopups}>
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
      </PopupWithForm>

      <PopupWithForm name='place' title='Новое место' isOpened={isAddPlaceopupOpened} onClose={closeAllPopups}>
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
      </PopupWithForm>

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
