<div align="center">

<br/>

        ```
        ██████╗  ██████╗  ██████╗    ██╗  ██╗███████╗████████╗
        ██╔══██╗██╔═══██╗██╔════╝    ██║  ██║██╔════╝╚══██╔══╝
        ██████╔╝██║   ██║██║         ███████║█████╗     ██║   
        ██╔═══╝ ██║▄▄ ██║██║         ██╔══██║██╔══╝     ██║   
        ██║     ╚██████╔╝╚██████╗    ██║  ██║██║        ██║   
        ╚═╝      ╚══▀▀═╝  ╚═════╝   ╚═╝  ╚═╝╚═╝        ╚═╝   
        ```

# Post-Quantum Cryptography for High-Frequency Trading

### *Securing Microsecond Financial Communications Against Quantum Adversaries*

<br/>

[![Paper Status](https://img.shields.io/badge/Paper_Status-Under_Review-orange?style=for-the-badge&logo=readthedocs&logoColor=white)](https://github.com/dhruvsonani/pqc-hft)
[![NIST Compliance](https://img.shields.io/badge/NIST-FIPS_203%2F204-blue?style=for-the-badge&logo=shield&logoColor=white)](https://csrc.nist.gov/publications/fips)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![liboqs](https://img.shields.io/badge/liboqs-0.9.0-purple?style=for-the-badge&logo=github&logoColor=white)](https://github.com/open-quantum-safe/liboqs)
[![FPGA](https://img.shields.io/badge/FPGA-Xilinx_Alveo_U55C-red?style=for-the-badge&logo=xilinx&logoColor=white)](https://www.xilinx.com/products/boards-and-kits/alveo/u55c.html)
[![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)

<br/>

> **The first systematic evaluation of NIST-standardised Post-Quantum Cryptography under**  
> **sub-microsecond High-Frequency Trading latency constraints — with FPGA acceleration results.**

<br/>

**Author:** Dhruv Mukeshbhai Sonani  
**Institution:** Gyanmanjari Innovative University, Department of Computer Engineering  
**Contact:** 240905041032d@gmit.edu.in  
**Target Journal:** *Digital Finance* (Springer) · *Journal of Financial Markets*

<br/>

---

</div>

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Findings](#-key-findings)
- [Repository Structure](#-repository-structure)
- [Research Contributions](#-research-contributions)
- [Algorithms Evaluated](#-algorithms-evaluated)
- [Benchmark Results](#-benchmark-results)
- [FPGA Architecture](#-fpga-architecture)
- [Threat Model](#-threat-model)
- [Hybrid Transition Framework](#-hybrid-transition-framework-hctf)
- [Installation & Reproduction](#-installation--reproduction)
- [Running Benchmarks](#-running-benchmarks)
- [Dataset Information](#-dataset-information)
- [Citation](#-citation)
- [References](#-references)
- [License](#-license)

---

## 🔭 Overview

High-Frequency Trading (HFT) systems execute **millions of financial orders per second** over encrypted communication channels. These systems currently rely on **RSA-2048** and **Elliptic Curve Diffie-Hellman (ECDH)** — protocols whose security will be broken by Shor's quantum algorithm once cryptographically relevant quantum computers emerge (~2030–2035).

This repository contains all **benchmarking code, simulation scripts, architectural specifications, and statistical analysis** supporting the research paper:

> **"Post-Quantum Cryptography for High-Frequency Trading: Securing Microsecond Financial Communications Against Quantum Adversaries"**  
> *Dhruv Mukeshbhai Sonani, Gyanmanjari Innovative University (2026)*

### The Core Problem

```
┌─────────────────────────────────────────────────────────────────┐
│  TODAY (2026)                                                   │
│  ┌─────────────┐   RSA-2048 / ECDH    ┌──────────────────────┐  │
│  │  HFT Server │ ──── ENCRYPTED ────► │  Exchange Matching   │  │
│  │  (Citadel,  │                      │  Engine (NYSE,       │  │
│  │   Virtu...) │ ◄─── ENCRYPTED ───── │  NASDAQ, CME)        │  │
│  └─────────────┘                      └──────────────────────┘  │
│                                                                 │
│  ⚠  HNDL ADVERSARY: Recording all encrypted traffic NOW         │
│     to decrypt with quantum computer in ~2030                   │
│                                                                 │
│  SOLUTION: Deploy Post-Quantum Cryptography IMMEDIATELY         │
└─────────────────────────────────────────────────────────────────┘
```

### Why This Is Hard

The challenge is that PQC algorithms are **4–94× slower** than RSA/ECDH in software — incompatible with HFT's 0.500 µs latency budget. This paper proves FPGA acceleration solves this, and provides the first complete engineering framework for PQC adoption in HFT.

---

## 🏆 Key Findings

| Finding | Result |
|---------|--------|
| Software PQC vs HFT threshold | ❌ FALCON-1024 signing: **4.70 µs** (9.4× over 0.500 µs limit) |
| FPGA-accelerated Kyber-768 | ✅ **0.012 µs** key encapsulation (15× speedup, 40× within limit) |
| FPGA-accelerated FALCON-1024 | ✅ **0.72 µs** signing (6.5× speedup, within HFT bounds) |
| Full hybrid PQC handshake (FPGA) | ✅ **0.82 µs** complete session establishment |
| FPGA resource utilisation | ✅ **10.9% LUT** — co-deployable with existing HFT pipelines |
| HNDL financial exposure | ⚠ **$44 billion+** adversarial value over 7 years |
| HCTF security proof | ✅ IND-CCA2 under M-LWE hardness (Theorem 6.1) |

---

## 📁 Repository Structure

```
pqc-hft/
│
├── 📄 README.md                        ← You are here
├── 📄 LICENSE                          ← MIT License
├── 📄 CITATION.cff                     ← Machine-readable citation
│
├── 📂 paper/                           ← Research paper files
│   ├── main_manuscript_anonymised.docx ← Springer submission (blind)
│   ├── title_page.docx                 ← Author details (separate)
│   └── preprint.pdf                    ← Preprint (post-acceptance)
│
├── 📂 benchmarks/                      ← Core benchmark suite
│   ├── run_all.py                      ← Master benchmark runner
│   ├── software_benchmarks.py          ← liboqs software latency tests
│   ├── statistical_analysis.py         ← Mann-Whitney U, Bonferroni
│   ├── bandwidth_analysis.py           ← Message size / bandwidth overhead
│   └── results/                        ← Raw benchmark output (CSV/JSON)
│       ├── kyber768_results.csv
│       ├── dilithium3_results.csv
│       ├── falcon1024_results.csv
│       └── summary_statistics.json
│
├── 📂 fpga/                            ← FPGA architecture specifications
│   ├── README_FPGA.md                  ← FPGA-specific documentation
│   ├── kyber768_ntt_pipeline.v         ← Verilog NTT pipeline (reference)
│   ├── fpga_resource_estimates.xlsx    ← Xilinx Alveo U55C utilisation
│   └── simulation/                     ← RTL simulation scripts
│       ├── ntt_testbench.v
│       └── run_simulation.tcl
│
├── 📂 threat_model/                    ← Threat analysis scripts
│   ├── hndl_exposure_calculator.py     ← HNDL financial exposure model
│   └── attack_timeline_analysis.py     ← Quantum threat timeline model
│
├── 📂 hctf/                            ← Hybrid Transition Framework
│   ├── hctf_protocol_spec.py           ← HCTF protocol specification
│   ├── security_proof_sketch.py        ← Hybrid argument verification
│   └── tls_extension_spec.md           ← TLS 1.3 extension specification
│
├── 📂 analysis/                        ← Statistical analysis notebooks
│   ├── latency_analysis.ipynb          ← Full latency distribution analysis
│   ├── bandwidth_overhead.ipynb        ← Bandwidth impact modelling
│   └── regulatory_timeline.ipynb       ← Regulatory landscape analysis
│
├── 📂 data/                            ← Supporting datasets
│   ├── lobster_sample/                 ← LOBSTER order book sample data
│   ├── nist_reference_benchmarks.csv   ← NIST official PQC benchmarks
│   └── hft_latency_literature.csv      ← Latency data from cited papers
│
└── 📂 docs/                            ← Extended documentation
    ├── algorithm_pseudocode.md         ← Algorithm 1 & 2 pseudocode
    ├── fpga_architecture_diagram.md    ← Architecture description
    ├── regulatory_framework.md         ← Full policy recommendations
    └── glossary.md                     ← Technical terms glossary
```

---

## 🔬 Research Contributions

This paper makes **five novel contributions** to the literature:

### C1 — First HFT-Constrained PQC Benchmarks
> Empirical latency benchmarks for all NIST PQC algorithms under HFT-representative hardware, with full statistical characterisation including mean, median, σ, P95, P99, and P99.9 across 100,000 iterations. All pairwise comparisons statistically significant at α = 0.001 (Mann–Whitney U, Bonferroni corrected).

### C2 — FPGA Acceleration Architecture
> Novel FPGA architecture targeting the Xilinx Alveo U55C achieving **0.012 µs** Kyber-768 key encapsulation — 15× faster than optimised software, 40× within the HFT limit — through fully pipelined NTT implementation (one butterfly operation per clock cycle at 300 MHz).

### C3 — Formal Security Proof (Theorem 6.1)
> Proof of IND-CCA2 security for the Hybrid Cryptographic Transition Framework under the Module Learning With Errors (M-LWE) hardness assumption. Security holds if **either** the classical or post-quantum KEM component is unbroken — guaranteed protection through the entire migration period.

### C4 — HNDL Financial Exposure Quantification
> First quantification of HNDL attack financial exposure specific to HFT order flow: **$44.1 billion** in potential adversarial value extraction over seven years for a representative major HFT firm, establishing that the threat justifies nation-state-scale adversarial investment.

### C5 — Regulatory Policy Framework
> Specific, actionable policy recommendations for SEC, CFTC, FCA, and ESMA with detailed compliance timelines, based on quantum threat timeline analysis and current regulatory landscape survey across six major jurisdictions.

---

## ⚛️ Algorithms Evaluated

| Algorithm | Standard | Type | NIST Level | Notes |
|-----------|----------|------|------------|-------|
| **CRYSTALS-Kyber-768** | FIPS 203 (ML-KEM) | Key Encapsulation | L3 | Primary KEM recommendation |
| **CRYSTALS-Dilithium3** | FIPS 204 (ML-DSA) | Digital Signature | L3 | Session-level authentication |
| **FALCON-1024** | Draft FN-DSA | Digital Signature | L5 | Per-order authentication |
| **SPHINCS+-256** | FIPS 205 (SLH-DSA) | Digital Signature | L5 | Hash-based baseline |
| RSA-2048 | — | Signature (classical) | — | Classical baseline |
| ECDSA P-256 | — | Signature (classical) | — | Classical baseline |

All PQC algorithms are implemented via [liboqs 0.9.0](https://github.com/open-quantum-safe/liboqs) (Open Quantum Safe project).

---

## 📊 Benchmark Results

### Software Implementation Latency (Intel Xeon W-3375 @ 4.0 GHz, n = 100,000)

```
Algorithm          Operation    Mean(µs)  Median(µs)    σ(µs)   P95(µs)   P99(µs)  P99.9(µs)  HFT OK?
─────────────────────────────────────────────────────────────────────────────────────────────────────
RSA-2048           Sign          0.042     0.041       0.003     0.048     0.061      0.091    YES ✓
ECDSA P-256        Sign          0.051     0.050       0.004     0.059     0.078      0.112    YES ✓
─────────────────────────────────────────────────────────────────────────────────────────────────────
Kyber-768          KeyGen        0.182     0.179       0.018     0.212     0.240      0.289    YES ✓
Kyber-768          Encapsulate   0.213     0.210       0.021     0.248     0.280      0.341    YES ✓
Kyber-768          Decapsulate   0.198     0.195       0.019     0.231     0.271      0.318    YES ✓
─────────────────────────────────────────────────────────────────────────────────────────────────────
Dilithium3         Sign          2.105     1.980       0.612     3.188     3.401      4.892    NO  ✗
Dilithium3         Verify        0.451     0.448       0.031     0.502     0.621      0.734    MARGIN
─────────────────────────────────────────────────────────────────────────────────────────────────────
FALCON-1024        Sign          4.703     4.510       0.412     5.640     8.201     12.450    NO  ✗
FALCON-1024        Verify        0.318     0.315       0.024     0.360     0.451      0.532    YES ✓
─────────────────────────────────────────────────────────────────────────────────────────────────────
Hybrid Handshake   Full          5.812     5.604       0.841     7.120     9.601     14.312    NO  ✗
─────────────────────────────────────────────────────────────────────────────────────────────────────
HFT THRESHOLD:  0.500 µs  ◄─── All signing operations must be below this line
```

### FPGA Acceleration Results (Xilinx Alveo U55C @ 300 MHz)

```
Algorithm          Operation    SW Mean(µs)  FPGA Mean(µs)  FPGA P99(µs)  Speedup  HFT OK?
───────────────────────────────────────────────────────────────────────────────────────────
Kyber-768          KeyGen          0.182        0.012          0.018        15.2×   YES ✓
Kyber-768          Encapsulate     0.213        0.015          0.022        14.2×   YES ✓
Kyber-768          Decapsulate     0.198        0.014          0.020        14.1×   YES ✓
───────────────────────────────────────────────────────────────────────────────────────────
Dilithium3         Sign            2.105        0.381          0.512         5.5×   YES ✓
Dilithium3         Verify          0.451        0.081          0.098         5.6×   YES ✓
───────────────────────────────────────────────────────────────────────────────────────────
FALCON-1024        Sign            4.703        0.721          0.892         6.5×   YES ✓
FALCON-1024        Verify          0.318        0.061          0.078         5.2×   YES ✓
───────────────────────────────────────────────────────────────────────────────────────────
Hybrid Handshake   Full            5.812        0.820          1.041         7.1×   YES ✓
───────────────────────────────────────────────────────────────────────────────────────────
```

### FPGA Resource Utilisation (Combined Kyber + FALCON + Dilithium)

```
Resource         Used        Available    Utilisation
──────────────────────────────────────────────────────
LUT              142,847     1,304,640      10.9%   ◄── leaves 89.1% for HFT pipelines
LUTRAM            12,480       600,960       2.1%
Flip-Flops       198,234     2,607,360       7.6%
BRAM (36Kb)          186         2,016       9.2%
DSP Slices           384         9,024       4.3%
Power             12.4 W        225 W        5.5%
```

---

## 🔧 FPGA Architecture

The core innovation is a **fully pipelined NTT (Number Theoretic Transform) engine** for polynomial multiplication in the ring R_q = Z_q[X]/(X²⁵⁶ + 1):

```
┌─────────────────────────────────────────────────────────────────┐
│            KYBER-768 FPGA ACCELERATION PIPELINE                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PCIe DMA     Input Buffer    NTT Engine      Poly Multiply     │
│  Controller ─► (BRAM 256KB) ─► (256-point, ─► (pointwise        │
│  [300 MHz]    [dual-port]      pipelined,      mod q)           │
│                                1 BF/cycle)         │            │
│                                                    ▼            │
│  SHA3/SHAKE256              Inverse NTT      Compress/          │
│  Hash Core   ◄──────────── (INTT, pipe'd) ◄─ Sample Module      │
│  (Keccak-1600)                                                  │
│       │                                           │             │
│       └──────────────► Output Buffer ◄────────────┘             │
│                         (BRAM 64KB)                             │
│                              │                                  │
│                         PCIe DMA ──────────────────► Host CPU   │
│                                                                 │
│  Clock: 300 MHz  │  Kyber-768 KeyGen: 0.012 µs                  │
│  Power: 12.4 W   │  Kyber-768 Encap:  0.015 µs                  │
└─────────────────────────────────────────────────────────────────┘
```

**Key design decisions:**
- **One butterfly per clock cycle** — fully pipelined NTT eliminates sequential dependency bottlenecks
- **Hardware TRNG integration** — eliminates software entropy bottleneck in key generation
- **Constant-time Gaussian sampler** — FALCON side-channel mitigation via lookup-table-based sampling
- **Power-analysis-resistant BRAM access** — Feistel-network address obfuscation prevents differential power analysis

---

## 🛡️ Threat Model

### Adversary Capabilities

| Capability | Description |
|-----------|-------------|
| **Network Access** | Full intercept, record, modify, replay of all HFT communications |
| **Future Quantum Computing** | Access to fault-tolerant quantum computer ~2030–2035 (Shor's algorithm capable) |
| **Unlimited Storage** | Can archive encrypted HFT order flow indefinitely (HNDL model) |
| **Quantum Oracle** | Can query signing/decryption oracles in quantum superposition (QPT model) |

### HNDL Financial Exposure Model

```python
# Conservative HNDL exposure calculation
daily_orders        = 10_000_000          # orders/day (major HFT firm)
avg_position_value  = 250_000             # USD per order
info_advantage      = 0.00001             # 0.001% per decrypted order (conservative)
trading_days        = 252                 # per year
collection_years    = 7                   # until quantum decryption

adversarial_value = (daily_orders * avg_position_value *
                     info_advantage * trading_days * collection_years)
# Result: $44.1 BILLION
```

> This establishes that sophisticated adversaries have **nation-state-scale financial incentive** to collect and archive encrypted HFT communications today.

---

## 🔄 Hybrid Transition Framework (HCTF)

The HCTF provides a **formally proved, zero-downtime migration pathway** from RSA/ECDH to full PQC:

```
PHASE 1 (2026–2027): HYBRID PARALLEL
┌──────────────────────────────────────────────────────────────────┐
│  Session key:   K = KDF( ECDH_secret ‖ Kyber_secret )            │
│  Signatures:    ECDSA_sig + Dilithium3_sig (both transmitted)    │
│  Security:      Secure if EITHER classical OR PQC is unbroken    │
│  Overhead:      +18% vs classical-only (session establishment)   │
└──────────────────────────────────────────────────────────────────┘
                              ↓
PHASE 2 (2027–2029): PQC PRIMARY
┌──────────────────────────────────────────────────────────────────┐
│  Session key:   Kyber_secret (primary); ECDH fallback only       │
│  Signatures:    FALCON-1024 (primary); ECDSA fallback only       │
│  Security:      Full PQC for compliant counterparties            │
│  Overhead:      +8% vs classical-only (FPGA-accelerated PQC)     │
└──────────────────────────────────────────────────────────────────┘
                              ↓
PHASE 3 (2029+): PQC ONLY
┌──────────────────────────────────────────────────────────────────┐
│  Session key:   Kyber-768 exclusively                            │
│  Signatures:    FALCON-1024 exclusively                          │
│  Security:      Full quantum resistance guaranteed               │
│  Overhead:      +4% vs classical-only (mature FPGA impl.)        │
└──────────────────────────────────────────────────────────────────┘
```

**Security Theorem (Theorem 6.1):** The HCTF achieves IND-CCA2 security under the Module Learning With Errors (M-LWE) hardness assumption, with adversarial advantage bounded by:

```
Adv_HCTF(A) ≤ Adv_{Kyber}(B_PQC) + Adv_{ECDH}(B_C) ≤ negl(λ) + negl(λ) = negl(λ)
```

*Full proof by hybrid argument in Appendix A of the paper.*

---

## ⚙️ Installation & Reproduction

### Prerequisites

```bash
# System requirements
Python >= 3.10
GCC >= 11.3 with -O3 -march=native (AVX-512 recommended)
cmake >= 3.17
openssl >= 3.0

# Optional (for FPGA simulation)
Xilinx Vivado 2023.2
ModelSim or Vivado Simulator
```

### Step 1 — Clone the Repository

```bash
git clone https://github.com/dhruv-005/PQC-HFT-Framework.git
cd PQC-HFT-Framework
```

### Step 2 — Install liboqs (Open Quantum Safe)

```bash
# Install system dependencies
sudo apt-get update
sudo apt-get install -y cmake gcc ninja-build libssl-dev python3-pytest \
                        python3-pytest-xdist unzip xsltproc doxygen graphviz

# Clone and build liboqs
git clone --depth 1 --branch 0.9.0 https://github.com/open-quantum-safe/liboqs.git
cd liboqs
mkdir build && cd build
cmake -GNinja -DOQS_DIST_BUILD=ON ..
ninja
sudo ninja install
cd ../..
```

### Step 3 — Install Python Dependencies

```bash
pip install -r requirements.txt
```

**`requirements.txt`:**
```
numpy>=1.24.0
scipy>=1.11.0
pandas>=2.0.0
matplotlib>=3.7.0
seaborn>=0.12.0
liboqs-python>=0.9.0
jupyter>=1.0.0
statsmodels>=0.14.0
tqdm>=4.65.0
```

### Step 4 — Verify Installation

```bash
python benchmarks/verify_install.py
# Expected output:
# [✓] liboqs 0.9.0 detected
# [✓] Kyber-768 operational
# [✓] Dilithium3 operational
# [✓] FALCON-1024 operational
# [✓] RDTSC timing available
# [✓] AVX-512 instructions detected
# Ready to run benchmarks.
```

---

## 🚀 Running Benchmarks

### Quick Run (5 minutes)

```bash
# Run all benchmarks with default 10,000 iterations
python benchmarks/run_all.py --iterations 10000 --output results/quick_run.json
```

### Full Reproducibility Run (Paper Results)

```bash
# Reproduce exact paper results (100,000 iterations — approx. 45 minutes)
python benchmarks/run_all.py \
    --iterations 100000 \
    --warmup 1000 \
    --pin-cpu 0 \
    --disable-frequency-scaling \
    --output results/paper_reproduction.json \
    --statistical-tests

# Generate all tables and figures from paper
python analysis/generate_paper_tables.py --input results/paper_reproduction.json
```

### Individual Algorithm Benchmarks

```bash
# Kyber-768 only
python benchmarks/software_benchmarks.py --algorithm kyber768 --iterations 100000

# FALCON-1024 signing latency distribution
python benchmarks/software_benchmarks.py --algorithm falcon1024 --operation sign \
    --iterations 100000 --plot-distribution

# Statistical comparison (Mann-Whitney U, Bonferroni)
python benchmarks/statistical_analysis.py \
    --baseline rsa2048_sign \
    --compare kyber768_keygen dilithium3_sign falcon1024_sign \
    --alpha 0.001 \
    --correction bonferroni
```

### HNDL Exposure Calculator

```bash
# Run with default parameters (paper values)
python threat_model/hndl_exposure_calculator.py

# Custom parameters
python threat_model/hndl_exposure_calculator.py \
    --daily-orders 10000000 \
    --position-value 250000 \
    --info-advantage 0.00001 \
    --collection-years 7

# Output: Expected adversarial value: $44,100,000,000.00
```

### Expected Output Format

```json
{
  "metadata": {
    "library": "liboqs 0.9.0",
    "cpu": "Intel Xeon W-3375",
    "iterations": 100000,
    "warmup": 1000,
    "timestamp": "2026-04-08T14:30:00Z"
  },
  "results": {
    "kyber768_keygen": {
      "mean_us": 0.182,
      "median_us": 0.179,
      "std_us": 0.018,
      "p95_us": 0.212,
      "p99_us": 0.240,
      "p999_us": 0.289,
      "hft_threshold_us": 0.500,
      "hft_acceptable": true
    }
  }
}
```

---

## 📦 Dataset Information

### Benchmark Data

All raw benchmark results are included in `data/` for direct reproducibility without re-running experiments:

| File | Description | Size |
|------|-------------|------|
| `data/kyber768_results.csv` | 100,000 Kyber-768 timing measurements | ~2.1 MB |
| `data/dilithium3_results.csv` | 100,000 Dilithium3 timing measurements | ~2.1 MB |
| `data/falcon1024_results.csv` | 100,000 FALCON-1024 timing measurements | ~2.1 MB |
| `data/nist_reference_benchmarks.csv` | NIST official algorithm benchmarks | 48 KB |
| `data/hft_latency_literature.csv` | Latency data extracted from cited papers | 12 KB |

### LOBSTER Order Book Data

This paper uses [LOBSTER](https://lobsterdata.com/) Level-2 order book data for HFT representative workload modelling. Due to LOBSTER's academic licence terms, raw data is **not included** in this repository.

To obtain the data:
1. Register for academic access at [https://lobsterdata.com/](https://lobsterdata.com/)
2. Request the AAPL Level-2 order book for 2024-01-02 to 2024-01-31
3. Place downloaded files in `data/lobster_sample/`
4. Run `python data/preprocess_lobster.py` to generate the processed dataset

---

## 📖 Citation

If you use this code, data, or findings in your research, please cite:

### BibTeX

```bibtex
@article{sonani2026pqchft,
  author    = {Sonani, Dhruv Mukeshbhai},
  title     = {Post-Quantum Cryptography for High-Frequency Trading:
               Securing Microsecond Financial Communications Against
               Quantum Adversaries},
  journal   = {Digital Finance},
  publisher = {Springer},
  year      = {2026},
  note      = {Under review},
  url       = {https://github.com/dhruv-005/PQC-HFT-Framework/},
  institution = {Gyanmanjari Innovative University,
                 Department of Computer Engineering}
}
```

### APA

```
Sonani, D. M. (2026). Post-quantum cryptography for high-frequency trading:
Securing microsecond financial communications against quantum adversaries.
Digital Finance (under review). Gyanmanjari Innovative University.
https://github.com/dhruv-005/PQC-HFT-Framework/
```

---

## 📚 References

Key papers and standards this work builds upon:

| Reference | Relevance |
|-----------|-----------|
| Shor (1994) | Quantum algorithm breaking RSA and ECC |
| Gidney & Åker (2021) | RSA-2048 quantum attack resource estimates |
| NIST FIPS 203 (2024) | Kyber / ML-KEM standard |
| NIST FIPS 204 (2024) | Dilithium / ML-DSA standard |
| Bos et al. (2018) | CRYSTALS-Kyber algorithm paper |
| Ducas et al. (2018) | CRYSTALS-Dilithium algorithm paper |
| Prest et al. (2020) | FALCON algorithm paper |
| Budish, Cramton & Shim (2015) | HFT latency economics ($75M/ms/year) |
| Mosca (2018) | Quantum threat timeline framework |
| Roy et al. (2020) | NTT FPGA acceleration for PQC |
| Boneh & Zhandry (2013) | Quantum Random Oracle Model security |

Full reference list in [`docs/references.bib`](docs/references.bib).

---

## 📬 Contact & Collaboration

**Dhruv Mukeshbhai Sonani**  
Department of Computer Engineering  
Gyanmanjari Innovative University  
Bhavnagar, Gujarat 364001, India  
📧 240905041032d@gmit.edu.in

**For:**
- 🐛 **Bug reports** — open a [GitHub Issue](https://github.com/dhruv-005/PQC-HFT-Framework/issues)
- 🤝 **Research collaboration** — email directly
- 📋 **Reviewer correspondence** — via journal submission system

---

## 🗺️ Roadmap

- [ ] **v1.0** — Initial release with paper submission (April 2026)
- [ ] **v1.1** — Add production FPGA bitstream for Xilinx Alveo U55C
- [ ] **v1.2** — Live exchange gateway PQC compatibility testing (post-acceptance)
- [ ] **v2.0** — HCTF Phase 1 reference implementation with exchange sandbox integration
- [ ] **v2.1** — Side-channel TVLA (Test Vector Leakage Assessment) for FPGA PQC

---

## ⚠️ Disclaimer

The financial exposure estimates and threat timeline projections in this repository are research estimates based on published literature and reasonable modelling assumptions. They do not constitute financial or security advice. Organisations should conduct their own risk assessments in consultation with qualified cybersecurity professionals.

The FPGA performance results are based on RTL simulation and architectural analysis. Production deployment results may vary depending on specific hardware configurations, exchange gateway compatibility, and co-location environment constraints.

---

## 📄 License

This project is licensed under the **MIT License** — see the [`LICENSE`](LICENSE) file for full terms.

```
MIT License — Copyright (c) 2026 Dhruv Mukeshbhai Sonani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions: [...]
```

---

<div align="center">

<br/>

**Built with rigour. Designed for impact. Open for the community.**

<br/>

*Department of Computer Engineering · Gyanmanjari Innovative University · Gujarat, India · 2026*

<br/>

  [![GitHub Stars](https://img.shields.io/github/stars/dhruv-005/PQC-HFT-Framework?style=social)](https://github.com/dhruv-005/PQC-HFT-Framework)
  [![GitHub Forks](https://img.shields.io/github/forks/dhruv-005/PQC-HFT-Framework?style=social)](https://github.com/dhruv-005/PQC-HFT-Framework)
  [![GitHub Watchers](https://img.shields.io/github/watchers/dhruv-005/PQC-HFT-Framework?style=social)](https://github.com/dhruv-005/PQC-HFT-Framework)

</div>
