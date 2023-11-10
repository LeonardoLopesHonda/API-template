CREATE TABLE usuarios (
    nome VARCHAR(20),
    senha VARCHAR(6)
);

INSERT INTO usuarios(nome, senha) VALUES ("Matheus", "987654"), ("Rodrigo", "123456"), ("Leonardo", "654321");

-- DELETE FROM usuarios WHERE nome = "Leonardo";

-- UPDATE usuarios SET nome = "Honda" WHERE nome = "Leonardo";