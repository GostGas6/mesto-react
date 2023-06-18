
import '../pages/index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div>
      
      <Header />
      <Main />
      <Footer />

      <div className="popup" id="popup_edit">
        <div className="popup__container">
          <button aria-label="Close popup" className="popup__close-button"></button>
          <form name="profile-form" className="popup__form" novalidate>
            <h2 className="popup__title">Редактировать профиль</h2>
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
            <input aria-label="Submit popup" className="popup__button-save" value="Сохранить" type="submit"
              disabled="true" />
          </form>
        </div>
      </div>

      <div id="popup-add" className="popup">
        <div className="popup__container">
          <button aria-label="Close popup form" className="popup__close-button"></button>
          <form name="profile-form" className="popup__form" novalidate>
            <h2 className="popup__title">Новое место</h2>
            <div class="popup__input-section">
              <input placeholder="Название" className="popup__input" type="text" name="name" id="popup_place"
                minlength="2" maxlength="30" required />
              <span className="popup__error"></span>
            </div>
            <div className="popup__input-section">
              <input placeholder="Ссылка на картинку" className="popup__input" type="url" name="link" id="popup_link"
                minlength="2" maxlength="200" required />
              <span className="popup__error"></span>
            </div>
            <input aria-label="Create popup form" className="popup__button-save undefined popup__button-save_inactive"
              value="Создать" type="submit" disabled="true" />
          </form>
        </div>
      </div>

      <div className="popup popup-image" id="popup_image">
        <div className="popup__container-image">
          <button aria-label="Close image" className="popup__close-button" id="popup_close-image" type="button"></button>
          <img className="popup__image" src="#" alt="#" />
          <h2 className="popup__text"></h2>
        </div>
      </div>

      <div id="popup-confirm-delete" className="popup">
        <div className="popup__container">
          <form name="form-confirm-delete" className="popup__form">
            <button className="popup__close-button" type="button" aria-label="Close popup"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <input className="popup__button-save" type="submit" value="Да" />
          </form>
        </div>
      </div>

      <div id="popup-change-avatar" className="popup">
        <div className="popup__container">
          <form name="form-change-avatar" className="popup__form">
            <button className="popup__close-button" type="button" aria-label="Close popup"></button>
            <h2 className="popup__title">Обновить аватар</h2>

            <div className="popup__input-section">
              <input id="avatar-link" className="popup__input" type="url" name="link" placeholder="Ссылка на картинку"
                required />
              <span className="popup__error popup__error_active"></span>
            </div>

            <input className="popup__button-save" type="submit" value="Да" />
          </form>
        </div>
      </div>

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

    </div>
  );
}

export default App;
