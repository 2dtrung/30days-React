import React from 'react';
import ReactDOM from 'react-dom';

const Intro = () => (
  <div>
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email to receive news and updates</p>
  </div>
)

const InputArea = ({data: {firstInput, secondInput, thirdInput}}) => {
  return (
    <div className='input-area'>
      <Input inValue={firstInput}/>
      <Input inValue={secondInput}/>
      <Input inValue={thirdInput}/>
    </div>
  );

}

const Input = ({inValue}) => (
  <input type='text' placeholder={inValue}/>
)

const Subcribe = ({value}) => {
  return (
    <button class='button' type='submit'>{value}</button>
  );

}


const Main = ({titleText,}) => {
  const data = {
    firstInput: 'First name',
    secondInput: 'Last name',
    thirdInput: 'Email'
  }
  const btn = 'Subscribe'
  return (
    <div>
      <Intro />
      <InputArea data={data} />
      <Subcribe value={btn} />
    </div>
  );
}

const App = () => (
  <div className="container"> 
    <Main />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)