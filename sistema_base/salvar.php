<?php
include 'conexao.php'; 

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];

$sql = "INSERT INTO clientes (nome, email, telefone) VALUES ('$nome', '$email', '$telefone')";

if ($conn->query($sql) === TRUE) {
    echo "<script>
            alert('Sucesso! O dado foi salvo no banco.');
            window.location.href = 'index.php';
          </script>";
} else {
    echo "Erro: " . $conn->error;
}

$conn->close();
?>