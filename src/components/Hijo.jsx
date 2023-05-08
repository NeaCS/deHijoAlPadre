import React from 'react';

export default function Hijo(props) {
  return <div>{<h1 onClick={props.sumarContador}>Sumar</h1>}</div>;
}
