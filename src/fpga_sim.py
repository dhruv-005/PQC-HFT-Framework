def simulate_fpga_latency(algorithm="Kyber-768"):
    """
    Returns simulated latency based on the hardware acceleration 
    results in Table 5[cite: 152].
    """
    fpga_latencies = {
        "Kyber-768-Encap": 0.015,
        "Falcon-1024-Sign": 0.72,
        "Hybrid-Handshake": 0.82
    }
    return fpga_latencies.get(algorithm, 0.0)

print(f"Simulated FPGA Kyber Encap: {simulate_fpga_latency('Kyber-768-Encap')} µs")
