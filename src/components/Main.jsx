// import avatar from '../images/avatar.png';
import Card from './Card.jsx';
import { CurrentUserContext } from '../context/CurrentUserContext.jsx';
import { useContext } from "react";
import { useState } from 'react';



function Main({
    onUserAvatarEdit,
    onUserProfileEdit,
    onMestoAdd,
    onMestoDelete,
    onMestoShow,
    onMestoLike,
    onMestoDislike,
    cards
}) {
    const [user, setUser] = useState({});
    const [initialCards, setInitialCards] = useState([]);
    const currentUser = useContext(CurrentUserContext);

    return ((
        <main>
            <section className="profile">
                <div onClick={onUserAvatarEdit} className="profile__avatar-overlay"></div>
                <img className="profile__avatar" src={currentUser.avatar ?? '#'} alt="Аватар профиля" />
                <div className="profile__info">
                    <h1 className="profile__title">{currentUser.name ?? 'Ильсур Гарипов'}</h1>
                    <button onClick={onUserProfileEdit} aria-label="Edit profile" className="profile__edit-button" type="button"></button>
                    <p className="profile__subtitle">{currentUser.job ?? 'Студент Я.Практикума'}</p>
                </div>
                <button onClick={onMestoAdd} aria-label="Add" className="profile__add-button" type="button"></button>
            </section>
            <section className="elements">
                {cards.map((mesto) => (
                    <Card
                        key={mesto._id}
                        card={mesto}
                        onShow={onMestoShow}
                        onDelete={onMestoDelete}
                        onLike={onMestoLike}
                        onDislike={onMestoDislike}
                    />
                ))}
            </section>
        </main>
    ))
}

export default Main;