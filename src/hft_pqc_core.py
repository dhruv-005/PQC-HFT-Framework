import time
import numpy as np
from oqs import KeyEncapsulation, Signature

class PQCHFTBenchmark:
    """
    Implements benchmarking for PQC algorithms in HFT environments
    as defined in 'Securing Microsecond Financial Communications'.
    """
    def __init__(self):
        self.threshold_us = 0.5  # HFT Critical Threshold [cite: 133, 135]
        self.results = {}

    def run_kem_bench(self, alg="Kyber768"):
        with KeyEncapsulation(alg) as kem:
            public_key = kem.generate_keypair()
            
            start = time.perf_counter()
            ciphertext, shared_secret = kem.encap_secret(public_key)
            end = time.perf_counter()
            
            latency = (end - start) * 1_000_000
            return latency

    def run_sig_bench(self, alg="Falcon-1024"):
        with Signature(alg) as sig:
            public_key = sig.generate_keypair()
            message = b"HFT_ORDER_AUTH_VALIDATION_2026"
            
            start = time.perf_counter()
            signature = sig.sign(message)
            end = time.perf_counter()
            
            latency = (end - start) * 1_000_000
            return latency

    def execute(self, iterations=1000):
        print(f"Starting PQC-HFT Benchmarks ({iterations} iterations)...")
        kyber_latencies = [self.run_kem_bench() for _ in range(iterations)]
        falcon_latencies = [self.run_sig_bench() for _ in range(iterations)]
        
        self.results['Kyber-768 Encap'] = np.median(kyber_latencies)
        self.results['Falcon-1024 Sign'] = np.median(falcon_latencies)
        
        for op, lat in self.results.items():
            status = "PASS" if lat < self.threshold_us else "FAIL (Requires FPGA)"
            print(f"{op}: {lat:.3f} µs | Target: <0.5 µs | Status: {status}")

if __name__ == "__main__":
    bench = PQCHFTBenchmark()
    bench.execute()
