import React from 'react';
import { useMetaMask } from 'metamask-react';
import { Button } from '@components/FormComponents';
import MetamaskContainer from './MetamaskContainer';

function Metamask() {
  const { status, connect, account } = useMetaMask();
  if (status === 'initializing')
    return <div>Synchronisation with MetaMask ongoing...</div>;

  if (status === 'unavailable')
    return (
      <MetamaskContainer>
        <span>MetaMask not available 😞</span>
      </MetamaskContainer>
    );

  if (status === 'notConnected')
    return (
      <MetamaskContainer>
        <Button handleClick={connect}>Connect to MetaMask</Button>
      </MetamaskContainer>
    );

  if (status === 'connecting')
    return (
      <MetamaskContainer>
        <div>Connecting...</div>
      </MetamaskContainer>
    );

  if (status === 'connected')
    return (
      <MetamaskContainer>
        <div className="truncate text-center">{account}</div>
      </MetamaskContainer>
    );

  return null;
}

export default Metamask;
