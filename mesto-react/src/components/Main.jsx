import avatar from '../images/avatar.png';

function Main({
    onUserAvatarEdit,
    onUserProfileEdit,
    onMestoAdd,
    onMestoDelete,
    onMestoShow
}) {

    // function handleEditProfileClick() {
    //     document.querySelector('#popup_edit').classList.add('popup_opened')
    // }
    // function handleEditAvatarClick() {
    //     document.querySelector('#popup-change-avatar').classList.add('popup_opened')
    // }
    // function handleAddPlaceClick() {
    //     document.querySelector('#popup-add').classList.add('popup_opened')
    // }

    return ((
        <main>
            <section className="profile">
                <div onClick={onUserAvatarEdit} className="profile__avatar-overlay"></div>
                <img className="profile__avatar" src={avatar} alt="Аватар профиля" />
                <div className="profile__info">
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <button onClick={onUserProfileEdit} aria-label="Edit profile" className="profile__edit-button" type="button"></button>
                    <p className="profile__subtitle">Исследователь океана</p>
                </div>
                <button onClick={onMestoAdd} aria-label="Add" className="profile__add-button" type="button"></button>
            </section>
            <section className="elements">
            </section>
        </main>
    ))
}

export default Main;