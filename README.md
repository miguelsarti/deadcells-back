# Passo a passo de como testar o funcionamento do Back-end do jogo Dead Cells

## Introdução

Neste tutorial, vamos aprender a testar o funcionamento do back-end do jogo Dead Cells, usando o framework de testes de unidade do Node.

### 1. Executar o comando "npm install"

### 2. Criar o arquivo ".env"

### 3. Colocar o seguinte conteúdo no arquivo ".env"

PORT=4000
DATABASE_URL="file:./dev.db"
JWT_SECRET="senhaSecreta"

### 4. Colocar o comando "npx prisma migrate dev" no terminal

### 5. Colocar o comando "npm run dev" no terminal

### 6. Em seguida, será possível acessar a API no endereço http://localhost:4000/