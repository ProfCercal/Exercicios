# echo-client.py

import socket

HOST = "127.0.0.1"  # Endereço padrão de interface loobpack (localhost)
PORT = 65432        # Porta que o servidor está escutando

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))
    s.sendall(b"Ola, Mundo!")
    data = s.recv(1024)

print(f"Recebido {data!r}")