import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Login from "./Login";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmPopup from "./ConfirmPopup";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Register from "./Register";

function App() {

  const [logged, setLogged] = useState(false);
  const [action, setAction] = useState(() => () => {});
  const [cards, setCards] = useState([]);
  const [isEditProfilePopupOpened, setIsEditProfilePopupOpened] = useState(false);
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpened] = useState(false);
  const [isAddPlaceopupOpened, setIsAddPlaceopupOpened] = useState(false);
  const [isConfirmPopupOpened, setIsConfirmPopupOpened] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
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

  const onAuthEmailChangeHandler = evt => setAuthEmail(evt.target.value);
  const onAuthPasswordChangeHandler = evt => setAuthPassword(evt.target.value);

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

      <Switch>
        <Route 
          exact 
          path="/" 
        >
          {
            () => (
              logged
                ? <Main 
                    cards={cards}
                    onCardDelete={handleCardDelete}
                    onCardLike={handleCardLike}
                    onEditAvatar={handleEditAvatarClick} 
                    onEditProfile={handleEditProfileClick} 
                    onAddPlace={handleAddPlaceClick} 
                    onCardClick={handleCardClick}
                  />
                : <Redirect to='sign-up' />
            )
          }
        </Route>
        <Route 
          exact 
          path="/sign-in" 
        >
          <Login 
            email={authEmail} 
            setEmail={onAuthEmailChangeHandler}
            password={authPassword}
            setPassword={onAuthPasswordChangeHandler} 
          />
        </Route>
        <Route 
          exact 
          path="/sign-up" 
        >
          <Register 
            email={authEmail} 
            setEmail={onAuthEmailChangeHandler}
            password={authPassword}
            setPassword={onAuthPasswordChangeHandler} 
          />
        </Route>
      </Switch>
      
      {
        logged && <Footer />
      }
      
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
