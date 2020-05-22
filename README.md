# Introdução
Projeto avaliativo desenvolvido para a disciplina de desenvolvimento de Software

# Objetivo do Projeto
O objetivo do projeto é consultar a temperatura local e devolver ela no formato JSON utilizando o framework express.

# Instalação

O projeto deverá ser clonado, após isso deverá ser seguido os seguintes passos:

1 - npm install  -> para instalar as dependências necessárias;
2 - na pasta config, abra o arquivo index.js após isso informe o Token recebido do registro do site https://openweathermap.org/api;

# Execução
Após realizado os passos acima execute:

1 - npm start

# Mudança de porta de exeução.

Para alterar a porta de execução basta porcurar a pasta bin dentro vai ter o arquivo www e procure o trecho:
var port = normalizePort(process.env.PORT || '5000');
Onde o 5000 é a porta em execução.


# Testando

O servidor estará rodando na porta 5000, e para testar basta enviar a cidade desejada por parâmetro em uma chamada GET

http://localhost:5000/consultar/temperatura/{cidade}

