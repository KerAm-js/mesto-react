import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpened, setIsEditProfilePopupOpened] = useState(false);
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpened] = useState(false);
  const [isAddPlaceopupOpened, setIsAddPlaceopupOpened] = useState(false);
  const [isConfirmPopupOpened, setIsConfirmPopupOpened] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpened(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpened(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlaceopupOpened(true);
  }

  const handleCardClick = card => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpened(false);
    setIsEditProfilePopupOpened(false);
    setIsAddPlaceopupOpened(false);
    setIsConfirmPopupOpened(false);
    setSelectedCard(null);
  }

  return (
    <div className="App">
      
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick} 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm 
        name='profile' 
        title='Редактировать профиль' 
        isOpened={isEditProfilePopupOpened} 
        onClose={closeAllPopups}
        submitBtnText="Сохранить"
      >
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
      </PopupWithForm>

      <PopupWithForm 
        name='avatar' 
        title='Обновить аватар' 
        isOpened={isEditAvatarPopupOpened} 
        onClose={closeAllPopups}
        submitBtnText="Сохранить"
      >
        <input 
          placeholder="Ссылка на картинку" 
          required
          name="avatarLink" 
          id="avatar-link"
          type="url" 
          className="form__input form__input_value_avatar-link"
        />
        <span className="form__error avatar-link-error">Заполните это поле</span>
      </PopupWithForm>

      <PopupWithForm 
        name='place' 
        title='Новое место' 
        isOpened={isAddPlaceopupOpened} 
        onClose={closeAllPopups}
        submitBtnText="Создать"
        submitBtnSelectorType="add"
        isSubmitBtnDisabled={true}
      >
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
      </PopupWithForm>

      <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups}/>

      <PopupWithForm
        name='confirm'
        title='Вы уверены?'
        isOpened={isConfirmPopupOpened}
        onClose={closeAllPopups}
        submitBtnText='Да'
        submitBtnSelectorType='confirm'
      />

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

    </div>
  );
}

export default App;
