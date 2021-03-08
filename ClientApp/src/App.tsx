import React, {useEffect} from 'react';
import {useTypeSelector} from "./hooks/useTypeSelector";
import {Nav} from "./components/header/Nav";
import {Main} from "./components/main/Main";
import {useActions} from "./hooks/useActions";
import {Footer} from "./components/footer/Footer";

function App() {
    const state = useTypeSelector(state => state);
    const { userAuth, fetchBooks } = useActions()
    useEffect(() => {
        fetchBooks();
        userAuth();

    }, []);

    //console.log(state)
    return (
        <>
            <Nav />
            <Main />
            <Footer />
        </>
    );
}

export default App;
