import useCloseOnEsc from '../utils/useCloseOnEsc.jsx';

export default function ImagePopup({
    popupType,
    card,
    onClose
}) {
    const isOpen = card.link && 'popup_opened'
    useCloseOnEsc({ isOpen, onClose })

    return (
        <div className={`popup popup-image ${isOpen ? 'popup_opened' : ''}`
        } id="popup_image"
        >
            <div className="popup__container-image">
                <button onClick={onClose} aria-label="Close image" className="popup__close-button" id="popup_close-image" type="button"></button>
                <img className="popup__image" src={card.link ?? '#'} alt={card.name ?? ' '} />
                <h2 className="popup__text">{card.name ?? ' '}</h2>
            </div>
        </div>
    )
}