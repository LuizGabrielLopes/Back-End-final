const pool = require("../config/database");

const getTasks = async (title) => {
    if (!title) {
        const result = await pool.query(`
            SELECT tarefas.*, users.name AS user_name
            FROM tarefas
            LEFT JOIN users ON tarefas.user_id = users.id
        `);
        return result.rows;
    } else {
        const result = await pool.query(`
            SELECT tarefas.*, users.name AS user_name
            FROM tarefas
            LEFT JOIN users ON tarefas.user_id = users.id
            WHERE tarefas.title ILIKE $1
        `, [`%${title}%`]);
        return result.rows;
    }
};

const getTaskById = async (id) => {
    const result = await pool.query(`
        SELECT tarefas.*, users.name AS user_name
        FROM tarefas
        LEFT JOIN users ON tarefas.user_id = users.id
        WHERE tarefas.id = $1
    `, [id]);
    return result.rows[0];
};

const createTask = async (title, description, status, priority, user_id) => {
    const result = await pool.query(`
        INSERT INTO tarefas (title, description, status, priority, user_id)
        VALUES ($1, $2, $3, $4, $5) RETURNING *
    `, [title, description, status, priority, user_id]);
    return result.rows[0];
};

const updateTask = async (id, title, description, status, priority) => {
    const result = await pool.query(`
        UPDATE tarefas
        SET title = $1, description = $2, status = $3, priority = $4
        WHERE id = $5 RETURNING *
    `, [title, description, status, priority, id]);
    return result.rows[0];
};

const deleteTask = async (id) => {
    const result = await pool.query(`
        DELETE FROM tarefas WHERE id = $1 RETURNING *
    `, [id]);
    if (result.rowCount === 0) {
        return { error: "Tarefa não encontrada." };
    }
    return { message: "Tarefa deletada com sucesso." };
};

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask };