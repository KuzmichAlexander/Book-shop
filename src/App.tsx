import React, {useEffect} from 'react';
import {useTypeSelector} from "./hooks/useTypeSelector";
import {Nav} from "./components/header/Nav";
import {Main} from "./components/main/Main";
import {useActions} from "./hooks/useActions";

function App() {
    const state = useTypeSelector(state => state.fetchBook);
    const { fetchBooks } = useActions()
    useEffect(() => {
        fetchBooks();
    }, []);

    console.log(state)
    return (
        <div>
            {state.books.length
                ? <span>KNIGGA загрузилaсь</span>
                : <span>ХХЗУЩПЩЗЛАЫВЩОЛДАЫВ</span> }
            <Nav />
            <Main />
        </div>
    );
}

export default App;
