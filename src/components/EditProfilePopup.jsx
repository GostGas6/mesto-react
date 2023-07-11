import PopupWithForm from './PopupWithForm.jsx';
import { CurrentUserContext } from '../context/CurrentUserContext.jsx';
import { useContext, useEffect, useState } from 'react';

export default function EditProfilePopup({ isOpen, onClose, onUpdate }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setJob(currentUser.about);
    }, [currentUser, isOpen]);

    function handleSubmit(event) {
        event.preventDefault();
        onUpdate({
            name: name,
            about: job
        })
    }

    return (
        <PopupWithForm
            popupType={'edit-profile'}
            popupTitle={'Редактировать профиль'}
            submitText={'Сохранить'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >

            <div className="popup__input-section">
                <input placeholder="Введите имя" className="popup__input" type="text" name="name" id="popup_name"
                    minLength="2" maxLength="40" required />
                <span className="popup__error"></span>
            </div>
            <div className="popup__input-section">
                <input placeholder="О себе" className="popup__input" type="text" name="about" id="popup_about"
                    minLength="2" maxLength="200" required />
                <span className="popup__error"></span>
            </div>
        </PopupWithForm>
    )
}