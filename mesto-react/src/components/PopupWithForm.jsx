
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
                    <button className="popup__button-save" type="submit">{submitText}</button>
                </form>
            </div>
        </div>

    )
}