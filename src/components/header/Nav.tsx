import {Link} from 'react-router-dom'

export const Nav: React.FC = () => {

    return (
        <header className={'header__container'}>
            <nav className={'header-navigation'}>
                <Link to={'/'}>Главная</Link>
                <Link to={'/books'}>Главная</Link>
                <Link to={'/calc'}>Главная</Link>
            </nav>
            <div className={'header-logo'}></div>
        </header>
    );
};
