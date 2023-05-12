import React from 'react';

import { useWallet } from './context/WalletProvider';


function App() {
  const { isConnected, connectWallet, disconnectWallet, account } = useWallet();
  return (
    <div className='app-container'>

      <button onClick={isConnected ? disconnectWallet : connectWallet} id="wallet-connect">
        {isConnected ? "Disconnect Wallet" : "Connect Wallet"}
      </button>
      <p>{account}</p>
    </div>
  )
}

export default App;
