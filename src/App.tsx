import React from 'react';
import {useTypeSelector} from "./hooks/useTypeSelector";

function App() {
  const state = useTypeSelector(state => state);
  console.log(state)
  return (
    <div>1</div>
  );
}

export default App;
