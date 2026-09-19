import React from 'react';
import { Shield, Wallet, LogOut, AlertCircle, CheckCircle } from 'lucide-react';

interface WalletConnectProps {
  isConnected: boolean;
  walletAddress: string | null;
  error: string | null;
  onConnect: () => void;
  onDisconnect: () => void;
}

export const WalletConnect: React.FC<WalletConnectProps> = ({
  isConnected,
  walletAddress,
  error,
  onConnect,
  onDisconnect,
}) => {
  return (
    <div style={{
      padding: '24px',
      borderRadius: '16px',
      backgroundColor: '#1e293b',
      border: '1px solid #334155',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      maxWidth: '600px',
      margin: '0 auto 24px auto'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Shield style={{ color: '#38bdf8', width: '28px', height: '28px' }} />
          <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 600, color: '#f8fafc' }}>
            Lace Wallet Connection
          </h2>
        </div>
        <span style={{
          padding: '4px 12px',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: 600,
          backgroundColor: isConnected ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
          color: isConnected ? '#4ade80' : '#f87171',
          border: `1px solid ${isConnected ? '#22c55e' : '#ef4444'}`
        }}>
          {isConnected ? 'Connected' : 'Disconnected'}
        </span>
      </div>

      {error && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 16px',
          borderRadius: '8px',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid #ef4444',
          color: '#fca5a5',
          marginBottom: '16px',
          fontSize: '14px'
        }}>
          <AlertCircle style={{ width: '18px', height: '18px', flexShrink: 0 }} />
          <span>{error}</span>
        </div>
      )}

      {!isConnected ? (
        <div>
          <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '20px', lineHeight: 1.5 }}>
            Connect your Midnight Lace Wallet to interact with the Preprod Rental Deposit Escrow contract and generate zero-knowledge proofs.
          </p>
          <button
            onClick={onConnect}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '10px',
              backgroundColor: '#0284c7',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '15px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 10px rgba(2, 132, 199, 0.3)'
            }}
          >
            <Wallet style={{ width: '18px', height: '18px' }} />
            Connect Lace Wallet
          </button>
        </div>
      ) : (
        <div>
          <div style={{
            padding: '16px',
            borderRadius: '10px',
            backgroundColor: '#0f172a',
            border: '1px solid #1e293b',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <CheckCircle style={{ color: '#4ade80', width: '16px', height: '16px' }} />
              <span style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                Active Address
              </span>
            </div>
            <code style={{ fontSize: '14px', color: '#38bdf8', wordBreak: 'break-all', fontFamily: 'monospace' }}>
              {walletAddress}
            </code>
          </div>
          <button
            onClick={onDisconnect}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '8px',
              backgroundColor: '#334155',
              color: '#f8fafc',
              fontWeight: 500,
              fontSize: '14px',
              border: '1px solid #475569',
              cursor: 'pointer'
            }}
          >
            <LogOut style={{ width: '16px', height: '16px' }} />
            Disconnect Wallet
          </button>
        </div>
      )}
    </div>
  );
};
