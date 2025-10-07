# 📋 API de Gerenciamento de Tarefas

Uma API RESTful robusta para gerenciamento de usuários e tarefas, desenvolvida com Node.js, Express.js e PostgreSQL.

## 🚀 Funcionalidades

### 👥 Gestão de Usuários
- ✅ Listar todos os usuários
- ✅ Buscar usuário por ID
- ✅ Criar novo usuário
- ✅ Atualizar informações do usuário
- ✅ Deletar usuário

### 📝 Gestão de Tarefas
- ✅ Listar todas as tarefas
- ✅ Buscar tarefa por ID
- ✅ Criar nova tarefa
- ✅ Atualizar tarefa existente
- ✅ Deletar tarefa
- ✅ Associar tarefas aos usuários
- ✅ Controle de status (Pendente, Em andamento, Concluído)
- ✅ Níveis de prioridade (Alta, Média, Baixa)

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **PostgreSQL** - Banco de dados relacional
- **pg** - Driver PostgreSQL para Node.js
- **CORS** - Middleware para controle de acesso
- **dotenv** - Gerenciamento de variáveis de ambiente
- **Nodemon** - Desenvolvimento com hot reload

## 📁 Estrutura do Projeto

```
Back-End-final/
├── src/
│   ├── config/
│   │   └── database.js           # Configuração do banco de dados
│   ├── controllers/
│   │   ├── userControllers.js    # Controladores dos usuários
│   │   └── taskControllers.js    # Controladores das tarefas
│   ├── database/
│   │   └── schema.sql            # Schema e dados iniciais
│   ├── models/
│   │   ├── UserModel.js          # Model dos usuários
│   │   └── TaskModel.js          # Model das tarefas
│   └── routes/
│       ├── usersRoutes.js        # Rotas dos usuários
│       └── taskRoutes.js         # Rotas das tarefas
├── server.js                     # Arquivo principal do servidor
├── package.json                  # Dependências e scripts
└── README.md                     # Documentação do projeto
```

## ⚙️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 14 ou superior)
- PostgreSQL (versão 12 ou superior)
- npm ou yarn

### 1. Clone o repositório
Abra o terminal cmd
git clone https://github.com/LuizGabrielLopes/Back-End-final.git
cd Back-End-final
```

### 2. Instale as dependências
abra o terminal cmd
npm install
```

### 3. Configure o banco de dados
1. Crie um banco PostgreSQL
2. Execute o script SQL localizado em `src/database/schema.sql`
3. Configure as variáveis de ambiente

### 4. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=sua porta
DB_NAME=mytasks
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
```

### 5. Execute o projeto

#### Desenvolvimento (com hot reload)
Abra o terminal cmd
npm run dev
```

O servidor estará disponível em `http://localhost:3000`

## 📚 Exemplos de Uso da API

### 👥 Endpoints de Usuários

#### Listar todos os usuários
```http
GET /api/users
```

**Resposta:**
```json
[
  {
    "id": 1,
    "name": "Thiago Ferreira",
    "email": "thiagoferreira@gmail.com"
  }
]
```

#### Buscar usuário por ID
```http
GET /api/users/1
```

#### Criar novo usuário
```http
POST /api/users
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao.silva@email.com"
}
```

#### Atualizar usuário
```http
PUT /api/users/1
Content-Type: application/json

{
  "name": "João Silva Santos",
  "email": "joao.santos@email.com"
}
```

#### Deletar usuário
```http
DELETE /api/users/1
```

### 📝 Endpoints de Tarefas

#### Listar todas as tarefas
```http
GET /api/task
```

**Resposta:**
```json
[
  {
    "id": 1,
    "title": "Finalizar relatório",
    "description": "Concluir o relatório mensal de vendas",
    "status": "Em andamento",
    "priority": "Alta",
    "user_id": 1
  }
]
```

#### Buscar tarefa por ID
```http
GET /api/task/1
```

#### Criar nova tarefa
```http
POST /api/task
Content-Type: application/json

{
  "title": "Nova tarefa",
  "description": "Descrição da nova tarefa",
  "status": "Pendente",
  "priority": "Média",
  "user_id": 1
}
```

#### Atualizar tarefa
```http
PUT /api/task/1
Content-Type: application/json

{
  "title": "Tarefa atualizada",
  "description": "Nova descrição",
  "status": "Concluído",
  "priority": "Baixa",
  "user_id": 1
}
```

#### Deletar tarefa
```http
DELETE /api/task/1
```

## 📊 Status das Tarefas

- **Pendente** - Tarefa criada mas não iniciada
- **Em andamento** - Tarefa sendo executada
- **Concluído** - Tarefa finalizada

## 🎯 Níveis de Prioridade

- **Alta** - Prioridade máxima
- **Média** - Prioridade moderada
- **Baixa** - Prioridade mínima

## 🗃️ Banco de Dados

### Tabela Users
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | SERIAL PRIMARY KEY | Identificador único |
| name | VARCHAR(100) | Nome do usuário |
| email | VARCHAR(100) UNIQUE | Email do usuário |

### Tabela Tarefas
| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | SERIAL PRIMARY KEY | Identificador único |
| title | VARCHAR(255) | Título da tarefa |
| description | TEXT | Descrição detalhada |
| status | VARCHAR(50) | Status atual |
| priority | VARCHAR(50) | Nível de prioridade |
| user_id | INT | Referência ao usuário |

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Luiz Gabriel Lopes**
- GitHub: [@LuizGabrielLopes](https://github.com/LuizGabrielLopes)

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!