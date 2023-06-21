export default function Card({
    card,
    onDelete,
    onShow,
}) {
    function handleCardDelete() {
        onDelete()
    }

    function handleCardClick() {
        onShow(card)
    }

    function handleLikeClick() {
        console.log('like/dislike')
    }

    return ((
        <template id="element_template">
            <div className="element">
                <button onClick={handleCardDelete} aria-label="Delete card" className="element__del-button" type="button"></button>
                <img id="image-element" className="element__image" src={card.link} alt={card.name} onClick={handleCardClick} />
                <div className="element__container">
                    <h2 id="element-name" className="element__title">{card.name}</h2>
                    <div class="element__like-container">
                        <button onClick={handleLikeClick} aria-label="Like" className="element__like-button" id="like" type="button"></button>
                        <p className="element__like-counter">{card.likes.length}</p>
                    </div>
                </div>
            </div>
        </template>
    ))
}
