# Rental Deposit Escrow — Midnight dApp

> Zero-Knowledge Rental Deposit Escrow frontend & smart contract built on the Midnight Network using Compact.

## Live Demo
[https://rental-deposit-escrow.vercel.app](https://rental-deposit-escrow.vercel.app)

## Contract Address
| Network  | Address                          |
|----------|----------------------------------|
| Preprod  | `0x020088e21a415a77ddbe1e847c13aa7738b5550a2e5510dd9086adcb0b4cdd5d8c11` |

(Contract address is MANDATORY. Deployed on Midnight Preprod / Preview network.)

## What This Does
The **Rental Deposit Escrow** dApp allows landlords and tenants to execute security deposit releases and dispute resolutions completely on-chain while keeping sensitive authorization PINs and tenant identities 100% private.

## Privacy Model
- **What is PUBLIC:**
  - Landlord & Tenant public key hashes (`Bytes<32>`)
  - Escrow deposit balance (`Uint<64>`)
  - On-chain lifecycle status (`Uint<8>`: 0=Uninitialized, 1=Deposited, 2=Disputed, 3=Settled)
- **What is PRIVATE:**
  - Tenant secret PIN credential (`secretPin`)
  - Landlord private signing key (`landlordSecretKey`)
- **What the user PROVES without revealing:**
  - The user proves knowledge of a valid tenant secret PIN / landlord signature that unlocks the escrow circuit without exposing the raw secret PIN or key on-chain.

## Privacy Claim
- **What an on-chain observer sees:**
  An observer on the Midnight blockchain indexer sees a valid state transition transaction changing the escrow status from `Deposited` (1) to `Settled` (3) with a cryptographically valid Zero-Knowledge proof attached.
- **What an on-chain observer CANNOT see:**
  An observer cannot see the tenant's secret PIN, private witness inputs, or raw secret key credentials used to generate the proof.

## Tech Stack
- Midnight network
- Compact Language (v0.20+)
- `@midnight-ntwrk/dapp-connector-api` & Midnight.js SDK
- React & Vite
- Lace Wallet

## Prerequisites
- **Lace Wallet** extension installed in browser
- **Node.js** v22+ / v24
- **Docker Desktop** (for local proof server on port 6300)

## Run Locally
```bash
# 1. Clone the repository
git clone https://github.com/dev8877708-crypto/Rental-Deposit-Escrow.git
cd Rental-Deposit-Escrow

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start development server
npm run dev

# 4. Build for production
npm run build
```

## Demo Video
[https://youtube.com/watch?v=demo-placeholder](https://youtube.com/watch?v=demo-placeholder)

## Screenshots
![Compile Output & Unit Tests](./compile_screenshot.jpg)
![Contract Address Deployment](./deploy_screenshot.jpg)
