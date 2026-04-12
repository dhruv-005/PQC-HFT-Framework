import hashlib

def hctf_derive_session_key(k_classical, k_pqc):
    """
    Derives a session key K = KDF(K_classical || K_PQC) 
    as specified in HCTF Protocol Specification Section 6.3[cite: 176].
    """
    # Concatenate secrets for dual-encapsulation security
    combined_secret = k_classical + k_pqc
    
    # Use SHA3-256 for the KDF to maintain quantum resistance [cite: 148]
    session_key = hashlib.sha3_256(combined_secret).digest()
    
    return session_key

# Example Usage
# k_ecc = b'\x01' * 32 (Simulated ECDH Secret)
# k_kyber = b'\x02' * 32 (Simulated Kyber Secret)
# key = hctf_derive_session_key(k_ecc, k_kyber)
