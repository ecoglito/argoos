import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header.js";
import Tabbar from "./components/tabbar/tabbar.js";
import Transfer from "./components/transfer/transfer.js";
import Vault from "./components/vault/vault.js";






function App() {

  let width = 200;
  let height = 200;

  
 

  const [isTransferOpen, setIsTransferOpen] = React.useState(true);

  return (
    <div>
      <Header />
      
      <Transfer />
      <Vault />
      <Tabbar/>
    </div>
  );
}

export default App;
