CREATE DATABASE mytasks;

\c mytasks;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE tarefas (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'Pendente',
    user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

-- Inserindo usuários
INSERT INTO users (name, email) VALUES 
    ('Thiago Ferreira', 'thiagoferreira@gmail.com'),
    ('Marcelo Carboni', 'marcelocarboni@gmail.com'),
    ('Eduardo Correia', 'eduardocorreia@gmail.com'),
    ('Jonas Almeida', 'jonas.almeida@gmail.com'),
    ('Leonardo Silva', 'leonardo.silva@gmail.com'),
    ('Pedro Henrique', 'pedro.henrique@gmail.com'),
    ('Andre Luiz', 'andre.luiz@gmail.com'),
    ('Enzo Gabriel', 'enzo.gabriel@gmail.com'),
    ('Henrique Santos', 'henrique.santos@gmail.com'),
    ('Miguel Oliveira', 'miguel.oliveira@gmail.com'),
    ('Davi Costa', 'davi.costa@gmail.com'),
    ('Gustavo Lima', 'gustavo.lima@gmail.com'),
    ('Arthur Monteiro', 'arthur.monteiro@gmail.com'),
    ('Luiz Fernando', 'luiz.fernando@gmail.com'),
    ('Lucas Martins', 'lucas.martins@gmail.com'),
    ('Ravi Nascimento', 'ravi.nascimento@gmail.com'),
    ('José Carlos', 'jose.carlos@gmail.com'),
    ('Ana Clara', 'ana.clara@gmail.com'),
    ('Beatriz Silva', 'beatriz.silva@gmail.com'),
    ('Camila Oliveira', 'camila.oliveira@gmail.com'),
    ('Daniel Souza', 'daniel.souza@gmail.com'),
    ('Eduarda Lima', 'eduarda.lima@gmail.com'),
    ('Fernanda Costa', 'fernanda.costa@gmail.com'),
    ('Gabriel Almeida', 'gabriel.almeida@gmail.com'),
    ('Helena Martins', 'helena.martins@gmail.com'),
    ('Isabela Rocha', 'isabela.rocha@gmail.com'),
    ('João Pedro', 'joao.pedro@gmail.com'),
    ('Kauã Mendes', 'kaua.mendes@gmail.com'),
    ('Larissa Duarte', 'larissa.duarte@gmail.com'),
    ('Matheus Ribeiro', 'matheus.ribeiro@gmail.com'),
    ('Nathalia Farias', 'nathalia.farias@gmail.com'),
    ('Otávio Nunes', 'otavio.nunes@gmail.com'),
    ('Patrícia Cardoso', 'patricia.cardoso@gmail.com'),
    ('Rafael Teixeira', 'rafael.teixeira@gmail.com'),
    ('Sofia Monteiro', 'sofia.monteiro@gmail.com'),
    ('Thiago Azevedo', 'thiago.azevedo@gmail.com'),
    ('Vinícius Barros', 'vinicius.barros@gmail.com'),
    ('Yasmin Freitas', 'yasmin.freitas@gmail.com'),
    ('Zoe Santana', 'zoe.santana@gmail.com'),
    ('Arthur Campos', 'arthur.campos@gmail.com'),
    ('Bruna Ferreira', 'bruna.ferreira@gmail.com'),
    ('Carlos Eduardo', 'carlos.eduardo@gmail.com'),
    ('Débora Moraes', 'debora.moraes@gmail.com'),
    ('Elisa Vieira', 'elisa.vieira@gmail.com'),
    ('Fábio Cunha', 'fabio.cunha@gmail.com'),
    ('Giovanna Lopes', 'giovanna.lopes@gmail.com'),
    ('Hugo Batista', 'hugo.batista@gmail.com'),
    ('Bernardo Almeida', 'bernardo.almeida@gmail.com'),
    ('Vitor Mendes', 'vitor.mendes@gmail.com'),
    ('Carlos Augusto', 'carlos.augusto@gmail.com'),
    ('Felipe Santos', 'felipe.santos@gmail.com');

-- Inserindo tarefas
INSERT INTO tarefas (title, description, status, user_id) VALUES
    ('Finalizar relatório', 'Concluir o relatório mensal de vendas', 'Em andamento', 1),
    ('Reunião com cliente', 'Agendar e participar da reunião com o cliente X', 'Pendente', 2),
    ('Atualizar sistema', 'Realizar a atualização do sistema para a versão mais recente', 'Concluído', 3),
    ('Planejar campanha', 'Criar o planejamento da nova campanha publicitária', 'Pendente', 4),
    ('Treinamento da equipe', 'Organizar o treinamento para novos colaboradores', 'Em andamento', 5);