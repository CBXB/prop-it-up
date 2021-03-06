import React from 'react';
import './App.css';
// this will import the PersonCard from compnents
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = {"Carlos"} lastName = {"Sanchez"} age = {35} hairColor = {"Black"} />
      <PersonCard firstName = {"John"} lastName = {"Smith"} age = {88} hairColor = {"Brown"} />
      <PersonCard firstName = {"Millard"} lastName = {"Fillmore"} age = {50} hairColor = {"Brown"} />
      <PersonCard firstName = {"Maria"} lastName = {"Smith"} age = {62} hairColor = {"Brown"} />
    </div>
  );
}

export default App;
