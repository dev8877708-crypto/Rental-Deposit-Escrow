# Product Proposal — Zero-Knowledge Rental Deposit Escrow

## What is the product, and who uses it?
The **Rental Deposit Escrow** is a zero-knowledge, privacy-preserving smart contract dApp designed for residential property rentals. It acts as a trustless escrow engine between **Tenants** and **Landlords**. 

In traditional renting, tenants deposit security funds with landlords or centralized property management companies. This routinely results in delayed returns, non-transparent damage claims, and high administrative friction. With this dApp, escrow deposit funds are locked on the Midnight blockchain. Tenants can authorize deposit releases or trigger dispute protocols using private secret authorization PINs without exposing raw credentials or personal identification on-chain.

## Why Midnight specifically?
A traditional public blockchain (such as Ethereum) exposes all account balances, transaction histories, state parameters, and contract inputs directly on a public ledger. Using a fully transparent blockchain for rental escrows would publicly expose:
1. Exact rental deposit amounts and wallet identities of individual tenants and landlords.
2. Private authorization passcodes and access credentials on-chain whenever a function is called.

Midnight is essential because its **Compact zero-knowledge smart contract language** allows executing complex ledger state transitions off-chain in private circuits. The tenant proves knowledge of a secret authorization PIN and valid state conditions via zk-SNARKs. Only the proof and public ledger status update (`Deposited` → `Settled`) are published on-chain, preserving financial privacy and identity confidentiality.

## Data Model

| Data Point | Type | Disclosed To |
|------------|------|--------------|
| **Landlord Public Key** | Public Ledger (`Bytes<32>`) | Everyone (Public) |
| **Tenant Public Key** | Public Ledger (`Bytes<32>`) | Everyone (Public) |
| **Deposit Amount** | Public Ledger (`Uint<64>`) | Everyone (Public) |
| **Escrow State** (Uninitialized, Deposited, Disputed, Settled) | Public Ledger (`Uint<8>`) | Everyone (Public) |
| **Tenant Secret Authorization PIN** | Private Witness (`secretPin`) | No one (Processed in local ZK circuit only) |
| **Landlord Private Signing Key** | Private Witness (`landlordSecretKey`) | No one (Processed in local ZK circuit only) |

## Mainnet Feasibility
Yes, this application is highly feasible for production release on Midnight Mainnet by Level 6. The architecture relies on standard Compact ledger state management and witness proving. By integrating browser-side proof generation via the Midnight Lace Wallet connector and connecting to stable mainnet proof servers, the application can scale seamlessly to support real-world residential and commercial lease agreements.
