import '../pages/index.css';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import ImagePopup from './ImagePopup.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import Api from '../utils/Api.js';
import EditProfilePopup from './EditProfilePopup.jsx';

function App() {
  const [isUpdateAvatarPopupOpen, setIsUpdateAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddMestoPopupOpen, setIsAddMestoPopupOpen] = useState(false);
  const [isDeleteMestoPopupOpen, setIsDeleteMestoPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [user, setUser] = useState({});
  const [initialCards, setInitialCards] = useState([]);

  useEffect(() => {
    Promise.all([Api.getProfile(), Api.getCard()])
      .then(([userInfo, cards]) => {
        setUser({
          id: userInfo._id,
          name: userInfo.name,
          job: userInfo.about,
          avatar: userInfo.avatar
        });
        setInitialCards(cards);
      })
      .catch(console.log);
  }, [])

  function closeAllPopups() {
    setIsUpdateAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddMestoPopupOpen(false);
    setIsDeleteMestoPopupOpen(false);
    setSelectedCard({})
  }

  function handleUpdateAvatarPopup() {
    setIsUpdateAvatarPopupOpen(true)
  }

  function handleEditProfilePopup() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddMestoPopup() {
    setIsAddMestoPopupOpen(true)
  }

  function handleLikeClick(card) {
    Api.likeCard(card._id)
      .then((newCard) => {
        setInitialCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      })
      .catch(console.log)
  }

  function handleDislikeClick(card) {
    Api.dislikeCard(card._id)
      .then((newCard) => {
        setInitialCards((state) => state.map(c => c._id === card._id ? newCard : c))
      })
      .catch(console.log)
  }

  function handleDeleteMesto(card) {
    Api.deleteCard(card._id).then(() => {
      setInitialCards((state) => state.filter(c => c._id !== (card._id)))
    })
      .catch(console.log)
  }

  function handleProfileUpdate(info) {
    Api.setUserInfo(info)
      .then(data => {
        setUser(data);
        closeAllPopups()
      }
      )
      .catch(console.log)
  }

  return (
    <CurrentUserContext.Provider value={user}>
      <Header />
      <Main
        onUserAvatarEdit={handleUpdateAvatarPopup}
        onUserProfileEdit={handleEditProfilePopup}
        onMestoAdd={handleAddMestoPopup}
        onMestoDelete={handleDeleteMesto}
        onMestoShow={setSelectedCard}
        onMestoLike={handleLikeClick}
        onMestoDislike={handleDislikeClick}
        cards={initialCards}
      />
      <Footer />
      <PopupWithForm
        popupType={'update-avatar'}
        popupTitle={'Обновить аватар'}
        submitText={'Обновить'}
        isOpen={isUpdateAvatarPopupOpen}
        onClose={closeAllPopups}
      >

        <div className="popup__input-section">
          <input id="avatar-link" className="popup__input" type="url" name="link" placeholder="Ссылка на картинку"
            required />
          <span className="popup__error popup__error_active"></span>
        </div>

      </PopupWithForm>

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdate={handleProfileUpdate}
      />

      <PopupWithForm
        popupType={'add-mesto'}
        popupTitle={'Новое место'}
        submitText={'Создать'}
        isOpen={isAddMestoPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__input-section">
          <input placeholder="Название" className="popup__input" type="text" name="name" id="popup_place"
            minLength="2" maxLength="40" required />
          <span className="popup__error"></span>
        </div>
        <div className="popup__input-section">
          <input placeholder="Ссылка на картинку" className="popup__input" type="url" name="link" id="popup_link"
            minLength="2" maxLength="200" required />
          <span className="popup__error"></span>
        </div>

      </PopupWithForm>

      <PopupWithForm
        popupType={'delete-mesto'}
        popupTitle={'Вы уверены?'}
        submitText={'Да'}
        isOpen={isDeleteMestoPopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup
        popupType={'show-mesto'}
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </CurrentUserContext.Provider>
  );
}

export default App;
