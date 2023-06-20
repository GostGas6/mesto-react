export default function ImagePopup({
    popupType,
    isOpen,
    onClose
}) {
    return (
        <div
            className={`popup popup_type_${popupType} 
        ${isOpen ? 'popup_opened' : ''}`
            } id="showMesto"
        >
            <div class="popup popup-image" id="popup_image">
                <div class="popup__container-image">
                    <button onClick={ onClose } aria-label="Close image" class="popup__close-button" id="popup_close-image" type="button"></button>
                    <img class="popup__image" src="#" alt="#" />
                        <h2 class="popup__text"></h2>
                </div>
            </div>
        </div>
    )
}