//import logo from './logo.svg';
import React from 'react';
import FormInput from './components/FormInput';
import List from './components/List';
import Footer from './components/Footer';
import { DataProvider } from './components/DataProvider';

function App() {
  return (
    <DataProvider>

      <div className="App">
        <h1 className='appTitle'><span class="todoText">To-Do </span><span class="AppText" >App</span></h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>

  );
}

export default App;
