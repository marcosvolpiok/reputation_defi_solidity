import logo from './logo.svg';
import './App.css';
import {useEffect, useState, useCallback} from 'react'
import Califications from './abis/Califications.json'

var Web3 = require('web3');
var contract;
var currentAccount;
const contractAddress = '0x254dffcd3277C0b1660F6d42EFbB754edaBAbC2B';


function App() {
  const [califications, setCalifications] = useState([]);


  const fetchCalifications = useCallback(async () => {    
    window.web3 = await new Web3('ws://127.0.0.1:8545');
    await window.ethereum.enable();

    const acc = window.web3.eth.getAccounts(console.log);
    currentAccount = await window.ethereum.selectedAddress;
    console.log('currentAccount', currentAccount);

    contract = new window.web3.eth.Contract(Califications.abi, contractAddress);

    getCalifications();
  }, [])

  useEffect(() => {
    fetchCalifications()
  }, [fetchCalifications]) 
  
  async function getCalifications(){
    const result = await contract.methods.getCalifications().call();
    console.log(result);
    setCalifications(result);
  }  

  return (
    <div className="App">
      {califications.map((calification, i) => (
        <div key={i}>
          <p>
            ID: {i} - {calification.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
