# Research Summary: PQC for HFT

## The Problem
[cite_start]Contemporary HFT infrastructure relies on RSA-2048 and ECC, which are vulnerable to Shor's algorithm[cite: 14, 15]. 
[cite_start]Adversaries are currently using "Harvest Now, Decrypt Later" (HNDL) strategies[cite: 33].

## The Solution
[cite_start]We propose the **Hybrid Cryptographic Transition Framework (HCTF)**[cite: 164].
Key findings:
- [cite_start]Software-based PQC is too slow for HFT (FALCON-1024 sign: 4.7µs)[cite: 130].
- [cite_start]FPGA acceleration reduces Kyber-768 encapsulation to **0.015µs**[cite: 152].
- [cite_start]Total hybrid handshake latency is reduced to **0.82µs**[cite: 153].

## FPGA Architecture
[cite_start]The core bottleneck (NTT polynomial multiplication) is solved using a fully-pipelined hardware module on Xilinx Alveo U55C[cite: 147, 148, 158].
