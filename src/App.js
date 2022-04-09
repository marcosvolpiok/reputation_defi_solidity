import logo from './logo.svg';
import './App.css';
import {useEffect, useState, useCallback} from 'react'
import Califications from './abis/Califications.json'

var Web3 = require('web3');
var contract;
var currentAccount;
const contractAddress = '0x9b1f7F645351AF3631a656421eD2e40f2802E6c0';


function App() {
  const [califications, setCalifications] = useState([]);


  const fetchCalifications = useCallback(async () => {    
    window.web3 = await new Web3('ws://127.0.0.1:8545');
    await window.ethereum.enable();

    const acc = window.web3.eth.getAccounts(console.log);
    currentAccount = await window.ethereum.selectedAddress;
    console.log('currentAccount', currentAccount);

    contract = new window.web3.eth.Contract(Califications.abi, contractAddress);

    //getCalifications();
  }, [])

  useEffect(() => {
    fetchCalifications()
  }, [fetchCalifications]) 
  
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
