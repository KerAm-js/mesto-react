import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmPopup from "./ConfirmPopup";

function App() {
  
  const [action, setAction] = useState(() => () => {});
  const [cards, setCards] = useState([]);
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

  const handleAddPlace = (name, link) => {
    api.addCard(name, link)
      .then(card => setCards([card, ...cards]))
      .catch(e => console.log(e))
  }

  const handleActionConfirm = () => {
    action();
    closeConfirmPopupHanlder();
  }

  const closeConfirmPopupHanlder = () => {
    setAction(() => () => {});
    setIsConfirmPopupOpened(false);
  }

  const handleCardLike = card => {
    const isLiked = card.likes.some(user => user._id === currentUser._id);
    if (!isLiked) {
      api.setLike(card._id)
        .then(card => setCards(prev => prev.map(item => item._id === card._id ? card : item)))
        .catch(e => console.log(e))
    } else {
      api.deleteLike(card._id)
        .then(card => setCards(prev => prev.map(item => item._id === card._id ? card : item)))
        .catch(e => console.log(e))
    }
  }

  const handleCardDelete = id => {
    setIsConfirmPopupOpened(true);
    setAction(() => {
      return () => {
        api.deleteCard(id)
          .then(() => setCards(prev => prev.filter(card => card._id !== id)))
          .catch(e => console.log(e))
      }
    })
  }

  useEffect(() => {
    api.getUserData()
      .then(userData => setCurrentUser(userData))
      .catch(e => console.log(e))
    api.getCards()
      .then(cards => setCards(cards))
      .catch(e => console.log(e))
  }, [])

  return (
    <CurrentUserContext.Provider className="App" value={currentUser}>
      
      <Header />
      <Main 
        cards={cards}
        onCardDelete={handleCardDelete}
        onCardLike={handleCardLike}
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

      <AddPlacePopup 
        isOpened={isAddPlaceopupOpened}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlace}
      />

      <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups}/>

      <ConfirmPopup 
        onConfirm={handleActionConfirm}
        onClose={closeConfirmPopupHanlder}
        isOpened={isConfirmPopupOpened}
      />

    </CurrentUserContext.Provider>
  );
}

export default App;
