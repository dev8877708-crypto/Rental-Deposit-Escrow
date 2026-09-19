# Rental Deposit Escrow

> Zero-Knowledge Rental Deposit Escrow contract built on the Midnight Network using Compact.

## Contract Address
| Network  | Address                          |
|----------|----------------------------------|
| Preview  | `0x020088e21a415a77ddbe1e847c13aa7738b5550a2e5510dd9086adcb0b4cdd5d8c11` |
| Preprod  | `[PASTE ADDRESS AFTER DEPLOY]`   |

(This section is MANDATORY. Deployed on Midnight Preview network.)

## What This Does
The **Rental Deposit Escrow** smart contract allows tenants and landlords to manage rental security deposits trustlessly on-chain. Deposits are securely held in escrow and released or disputed without relying on centralized intermediaries.

## Privacy Model
- **What is PUBLIC (on-chain, visible to anyone):**
  - Landlord public key (`Bytes<32>`)
  - Tenant public key (`Bytes<32>`)
  - Deposit amount (`Uint<64>`)
  - Escrow status (`Uint<8>`: 0=Uninitialized, 1=Deposited, 2=Disputed, 3=Settled)
- **What is PRIVATE (private witness, never on-chain):**
  - Tenant secret PIN and private authorization keys (`landlordSecretKey`, `secretPin`)
- **What the user PROVES without revealing:**
  - Proves ownership of the tenant secret PIN / landlord key to release funds without revealing raw credentials on-chain.

## Tech Stack
- Midnight network
- Compact language (v0.20+)
- Node.js v22+ / v24
- Docker (Proof Server)
- TypeScript / Vitest

## Prerequisites
- Node.js v22 or higher
- Docker Desktop (running Proof Server container on port 6300)
- `@midnight-ntwrk/compact-compiler` or `create-mn-app` toolchain

## Setup
```bash
# Clone the project and install dependencies
cd "Rental Deposit Escrow"
npm install

# Start Midnight proof server
docker run -p 6300:6300 midnightnetwork/proof-server
```

## Run Tests
```bash
npm test
```

## Initial Idea
[LEAVE PLACEHOLDER — I will fill this in manually]

## Screenshots
[LEAVE PLACEHOLDER — I will add compile output and contract address screenshots]
