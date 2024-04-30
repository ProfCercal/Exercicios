# echo-server.py

import socket

HOST = "127.0.0.1"  # Endereço padrão de interface loobpack (localhost)
PORT = 65432        # Porta que será escutada

# AF_INET -> IPv4
# SOCK_STREM -> TCP
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen()
    conn, addr = s.accept()

    with conn:
        print(f"Conectado por {addr}")

        while True:
            data = conn.recv(1024)

            if not data:
                break

            conn.sendall(data)