import {Link} from 'react-router-dom';

export const Nav: React.FC = () => {

    return (
        <header >
            <div className={'container'}>
                <nav className={'header-navigation'}>
                    <div className={'logo'}></div>
                    <Link to={'/'}>Главная</Link>
                    <Link to={'/books'}>Каталог</Link>
                    <Link to={'/calc'}>Канкулятор анжуманий</Link>
                </nav>
                <div className={'user-actions'}>
                    <Link to={'/auth'}>Войти</Link>
                    <Link to={'/reg'}>Зарегистрироваться</Link>
                </div>
            </div>
        </header>
    );
};
