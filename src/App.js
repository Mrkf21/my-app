import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { render } from '@testing-library/react';

function App() {

  const [f, cf] = useState(false);
  const [d, df] = useState(false);

  return (
   <>
   <div className='menu-bar'>
   <h1>
    WalaKoyIdeaUnsaAkongGiBuhat.com
   </h1>
   <button className='btnof'  onClick={() =>  cf(!f)}>{f === true ? "GO TO SIGNUP" : "GO TO LOGIN "}</button>
   
   </div>
   <div className='content'>
   
   </div>
   <div className='form-div'>
   { f ? login(): signup() }
  </div>
   </>
  );}

  function login() {
   return (
   <form>
    <h2>LogIn</h2>
      <p>USERNAME:</p>
      <input type='text' placeholder='ex:Adadad'/>  
      
      <p>PASSWORD:</p>
      <input type='password' placeholder='ex:Adadad'/>
     <div> 
    <button className='btn'>LOGIN</button>
    </div>
      </form>

  )}
function signup() {
return (
  <form >
   <h2>SignUp</h2>
    <p>USERNAME:</p>
    <input type='text' placeholder='ex:Adadad' />  
  
      <p>EMAIL:</p>
      <input type='text' placeholder='ex:Adadad@gmail.com'/>  
      
      <p>PASSWORD:</p>
      <input type='password' placeholder='ex:Adadad'/>
   

    <p>CONFIRM PASSWORD:</p>
    <input type='password' placeholder='ex:Adadad'/>
<div>
    <button className='btn'>SIGNUP</button>
    </div>
    </form>
)
}

export default App;
