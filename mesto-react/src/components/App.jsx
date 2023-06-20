
import '../pages/index.css';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import ImagePopup from './ImagePopup.jsx';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm.jsx';

function App() {
  const [isUpdateAvatarPopupOpen, setIsUpdateAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddMestoPopupOpen, setIsAddMestoPopupOpen] = useState(false);
  const [isDeleteMestoPopupOpen, setIsDeleteMestoPopupOpen] = useState(false);
  const [isShowMestoPopupOpen, setIsShowMestoPopupOpen] = useState(false);

  function closeAllPopups() {
    setIsUpdateAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddMestoPopupOpen(false);
    setIsDeleteMestoPopupOpen(false);
    setIsShowMestoPopupOpen(false)
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

  function handleDeleteMestoPopup() {
    setIsDeleteMestoPopupOpen(true)
  }

  function handleShowMestoPopup() {
    setIsShowMestoPopupOpen(true)
  }

  return (
    <>

      <Header />
      <Main
        onUserAvatarEdit={handleUpdateAvatarPopup}
        onUserProfileEdit={handleEditProfilePopup}
        onMestoAdd={handleAddMestoPopup}
        onMestoDelete={handleDeleteMestoPopup}
        onMestoShow={handleShowMestoPopup}
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

      <PopupWithForm
        popupType={'edit-profile'}
        popupTitle={'Редактировать профиль'}
        submitText={'Сохранить'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >

        <div className="popup__input-section">
          <input placeholder="Введите имя" className="popup__input" type="text" name="name" id="popup_name"
            minlength="2" maxlength="40" required />
          <span className="popup__error"></span>
        </div>
        <div className="popup__input-section">
          <input placeholder="О себе" className="popup__input" type="text" name="about" id="popup_about"
            minlength="2" maxlength="200" required />
          <span className="popup__error"></span>
        </div>

      </PopupWithForm>

      <PopupWithForm
        popupType={'add-mesto'}
        popupTitle={'Новое место'}
        submitText={'Создать'}
        isOpen={isAddMestoPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__input-section">
          <input placeholder="Название" className="popup__input" type="text" name="name" id="popup_place"
            minlength="2" maxlength="30" required />
          <span className="popup__error"></span>
        </div>
        <div className="popup__input-section">
          <input placeholder="Ссылка на картинку" className="popup__input" type="url" name="link" id="popup_link"
            minlength="2" maxlength="200" required />
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
        popupType={'delete-mesto'}
        isOpen={isShowMestoPopupOpen}
        onClose={closeAllPopups}
      />


      <template id="element_template">
        <div className="element">
          <button aria-label="Delete card" className="element__del-button" type="button"></button>
          <img id="image-element" className="element__image" src="#" alt="#" />
          <div className="element__container">
            <h2 id="element-name" className="element__title"></h2>
            <div className="element__like-container">
              <button aria-label="Like" className="element__like-button" id="like" type="button"></button>
              <p className="element__like-counter"></p>
            </div>
          </div>
        </div>
      </template>

    </>
  );
}

export default App;
