// BalanceStatementPage.js
import React from 'react';
import BalanceStatement from '../components/BalanceStatement';

function BalanceStatementPage (){
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <BalanceStatement />
    </div>
  );
}

export default BalanceStatementPage;
