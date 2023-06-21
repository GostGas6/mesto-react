// import avatar from '../images/avatar.png';
import { useEffect, useState } from 'react';
import Api from '../utils/Api';
import Card from './Card';


function Main({
    onUserAvatarEdit,
    onUserProfileEdit,
    onMestoAdd,
    onMestoDelete,
    onMestoShow
}) {
    const [user, setUser] = useState({});
    const [initialCards, setInitialCards] = useState([]);

    useEffect(() => {
        Promise.all([Api.getProfile(), Api.getCard()])
            .then(([userInfo, cards]) => {
                setUser({
                    id: userInfo._id,
                    name: userInfo.name,
                    job: userInfo.about,
                    avatar: userInfo.avatar
                });
                setInitialCards(cards);
            })
            .catch(console.log);
    }, [])

    return ((
        <main>
            <section className="profile">
                <div onClick={onUserAvatarEdit} className="profile__avatar-overlay"></div>
                <img className="profile__avatar" src={user.avatar} alt="Аватар профиля" />
                <div className="profile__info">
                    <h1 className="profile__title">{user.name}</h1>
                    <button onClick={onUserProfileEdit} aria-label="Edit profile" className="profile__edit-button" type="button"></button>
                    <p className="profile__subtitle">{user.job}</p>
                </div>
                <button onClick={onMestoAdd} aria-label="Add" className="profile__add-button" type="button"></button>
            </section>
            <section className="elements">
                {initialCards.map((mesto) => (
                    <Card
                        key={mesto._id}
                        card={mesto}
                        onShow={onMestoShow}
                        onDelete={onMestoDelete}
                    />
                ))}
            </section>
        </main>
    ))
}

export default Main;