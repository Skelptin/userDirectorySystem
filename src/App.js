import React from 'react';
import './App.css'
import UserList from './components/UserList';
import Header from './components/Header'


function App() {
  return (
    <div>
      <Header />
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <UserList />
        
        </div>
      </div>
    </div>
  );
}

export default App;
