import avatar from '../images/avatar.png';

function Main() {
    return ((
        <main>
            <section className="profile">
                <div className="profile__avatar-overlay"></div>
                <img className="profile__avatar" src={avatar} alt="Аватар профиля" />
                <div className="profile__info">
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <button aria-label="Edit profile" className="profile__edit-button" type="button"></button>
                    <p className="profile__subtitle">Исследователь океана</p>
                </div>
                <button aria-label="Add" className="profile__add-button" type="button"></button>
            </section>
            <section className="elements">
            </section>
        </main>
    ))
}

export default Main;