# PQC-HFT-Framework

Implementation and simulation of **Post-Quantum Cryptography** for **High-Frequency Trading** environments. [cite_start]Based on the paper: *"Securing Microsecond Financial Communications Against Quantum Adversaries"*[cite: 2, 3].


## 🚀 Performance Results (FPGA Accelerated)
| Algorithm | Operation | Software Latency | FPGA Latency | Speedup |
| :--- | :--- | :--- | :--- | :--- |
| **Kyber-768** | Encapsulate | 0.21 µs | **0.015 µs** | 14.0x |
| **Falcon-1024** | Sign | 4.70 µs | **0.720 µs** | 6.5x |
| **Hybrid** | Full Handshake | 5.80 µs | **0.820 µs** | 7.1x |

[cite_start]*Note: All FPGA results meet the <0.5µs HFT critical threshold[cite: 153].*

## 🛠 Project Structure
- `/src`: Python implementation and FPGA simulation logic.
- `/data`: CSV exports of benchmark iterations.
- `/docs`: Research paper summary and mathematical foundations.

## ⚖️ License
This project is licensed under the MIT License - see the `LICENSE` file for details.

## 🎓 Citation
If you use this framework in your research, please cite:
> Dhruv Sonani, "Post-Quantum Cryptography for High-Frequency Trading", 2026.
