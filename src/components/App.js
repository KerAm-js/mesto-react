import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpened, setIsEditProfilePopupOpened] = useState(false);
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpened] = useState(false);
  const [isAddPlaceopupOpened, setIsAddPlaceopupOpened] = useState(false);
  const [isConfirmPopupOpened, setIsConfirmPopupOpened] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    avatar: '',
    about: '',
    _id: '',
    cohort: '',
  });

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

  const handleUpdateUser = ({name, about}) => {
    api.editProfile(name, about)
      .then(userData => setCurrentUser(userData))
      .catch(e => console.log(e))
  }

  const handleUpdateAvatar = avatar => {
    api.editAvatar(avatar) 
      .then(userData => setCurrentUser(userData))
      .catch(e => console.log(e))
  }

  useEffect(() => {
    api.getUserData()
      .then(userData => setCurrentUser(userData))
      .catch(e => console.log(e))
  }, [])

  return (
    <CurrentUserContext.Provider className="App" value={currentUser}>
      
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick} 
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick} 
        onCardClick={handleCardClick}
      />
      <Footer />

      <EditProfilePopup 
        isOpened={isEditProfilePopupOpened}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <EditAvatarPopup 
        isOpened={isEditAvatarPopupOpened}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

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

    </CurrentUserContext.Provider>
  );
}

export default App;
