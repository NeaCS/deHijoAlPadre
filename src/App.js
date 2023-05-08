import React from 'react';
import './style.css';
import Hijo from './components/Hijo';
import { useState } from 'react';

export default function App(props) {
  let [aumentar, setAumentar] = useState(0);

  let sumarContador = (e) => {
    setAumentar(aumentar++);
    console.log(e); //SUMAR
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Contador: {aumentar}</p>
      <Hijo sumarContador={sumarContador} />
    </div>
  );
}
