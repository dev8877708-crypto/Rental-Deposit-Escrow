import React from 'react';
import { useMidnight } from './hooks/useMidnight';
import { WalletConnect } from './components/WalletConnect';
import { CircuitCall } from './components/CircuitCall';
import { Shield, Lock, Layers, Network } from 'lucide-react';

const PREPROD_CONTRACT_ADDRESS = '0x020088e21a415a77ddbe1e847c13aa7738b5550a2e5510dd9086adcb0b4cdd5d8c11';

export const App: React.FC = () => {
  const { isConnected, walletAddress, error, connectWallet, disconnectWallet } = useMidnight();

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      padding: '40px 20px',
      boxSizing: 'border-box'
    }}>
      {/* Header Banner */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <Shield style={{ width: '40px', height: '40px', color: '#38bdf8' }} />
          <h1 style={{ margin: 0, fontSize: '32px', fontWeight: 700, color: '#f8fafc' }}>
            Rental Deposit Escrow
          </h1>
        </div>
        <p style={{ margin: 0, fontSize: '16px', color: '#94a3b8', maxWidth: '600px', marginInline: 'auto' }}>
          Zero-Knowledge Privacy-Preserving Escrow Smart Contract built on Midnight Network (Compact Language)
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '9999px',
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            fontSize: '13px',
            color: '#38bdf8'
          }}>
            <Network style={{ width: '14px', height: '14px' }} />
            Network: Midnight Preprod / Preview
          </span>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '9999px',
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            fontSize: '13px',
            color: '#a855f7'
          }}>
            <Lock style={{ width: '14px', height: '14px' }} />
            ZK Prover Active
          </span>
        </div>
      </header>

      {/* Main Content Components */}
      <main>
        <WalletConnect
          isConnected={isConnected}
          walletAddress={walletAddress}
          error={error}
          onConnect={connectWallet}
          onDisconnect={disconnectWallet}
        />

        <CircuitCall
          isConnected={isConnected}
          contractAddress={PREPROD_CONTRACT_ADDRESS}
        />
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '60px', color: '#64748b', fontSize: '14px' }}>
        <p>Built with Compact Language • Midnight.js SDK • React & Vite</p>
      </footer>
    </div>
  );
};

export default App;
