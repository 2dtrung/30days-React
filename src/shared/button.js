import React from 'react';

// A button component
const Button = ({ text, onClick, style }) => (
    <button style={style} onClick={onClick}>
      {text}
    </button>
)

export const Login = () => (
    <div>
      <h3>Please Login</h3>
    </div>
  )
export const Welcome = (props) => (
    <div>
      <h1>Welcome to 30 Days Of React</h1>
    </div>
  )

export default Button
