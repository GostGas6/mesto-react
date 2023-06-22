export default function ImagePopup({
    popupType,
    card,
    onClose
}) {
    const isOpen = card.link ? 'popup_opened' : ''

    return (
        <div
            className={`popup popup_type_${popupType} 
        ${isOpen ? 'popup_opened' : ''}`
            } id="showMesto"
        >
            <div className="popup popup-image" id="popup_image">
                <div className="popup__container-image">
                    <button onClick={onClose} aria-label="Close image" className="popup__close-button" id="popup_close-image" type="button"></button>
                    <img className="popup__image" src={card.link} alt={card.name} />
                    <h2 className="popup__text">{card.name}</h2>
                </div>
            </div>
        </div>
    )
}