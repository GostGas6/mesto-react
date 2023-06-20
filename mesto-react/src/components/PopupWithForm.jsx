// import Popup from './Popup.js';

// export default class PopupWithForm extends Popup {
//     constructor(popupSelector, { submitCallback }) {
//         super(popupSelector);
//         this._submitCallback = submitCallback;
//         this._form = this._popup.querySelector('.popup__form');
//         this._inputsList = Array.from(this._popup.querySelectorAll('.popup__input'));
//         this._inputsValues = {};
//         this._buttonSubmit = this._form.querySelector('.popup__button-save');
//         this._buttonSubmitText = this._buttonSubmit.value;
//     }

//     _getInputValues() {
//         this._inputsList.forEach((input) => {
//             this._inputsValues[input.name] = input.value;
//         });

//         return this._inputsValues
//     };

//     setEventListeners() {
//         super.setEventListeners();
//         this._form.addEventListener('submit', (event) => {
//             event.preventDefault();
//             this._submitCallback(this._getInputValues());
//         });
//     };

//     renderLoading(isLoading, loadingText) {
//         if (!this._buttonSubmit) return;
//         if (isLoading) {
//             this._buttonSubmit.value = loadingText;
//         } else {
//             this._buttonSubmit.value = this._buttonSubmitText
//         }
//     };

//     close() {
//         super.close();
//         this._form.reset();
//     };

//     fillInputs(userData) {
//         this._inputsList.forEach((input) => {
//             input.value = userData[input.name] ?? '';
//         });
//     }
// }

export default function PopupWithForm({
    popupType,
    popupTitle,
    submitText,
    children,
    isOpen,
    onClose,
}) {
    return (
        <div
            className={
                `popup popup_type_${popupType} 
        ${isOpen ? 'popup_opened' : ''}`
            } id="updateAvatar"
        >
            <div className="popup__container">
                <form name={popupType} autoComplete="off" className="popup__form" noValidate>
                    <button onClick={onClose} className="popup__close-button" type="button" aria-label="Close popup"></button>
                    <h2 className="popup__title">{popupTitle}</h2>
                    {children}
                    <input className="popup__button-save" type="submit" value="Да" />
                    {submitText}
                </form>
            </div>
        </div>

    )
}