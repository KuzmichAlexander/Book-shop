import {Route} from 'react-router';
import {Home} from "./Home";
import {Calc} from "./Calc";

export const Main: React.FC = () => {
    document.title = 'Главная';
    return (
        <main>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Calc' component={Calc}/>
        </main>
    );
};
