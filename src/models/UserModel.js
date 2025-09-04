const pool = require("../config/database");

const getUsers = async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
};

const getUserById = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
};

const deleteUser = async (id) => {
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Usuário não encontrado." };
    }
    return { message: "Usuário deletado com sucesso." };
};
const updateUser = async (id, data) => {
    const { name, email, password } = data;
    const result = await pool.query("UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING *", [name, email, password, id]);
    return result.rows[0];
};

const createUser = async (name, email, password, photo) => {
    const result = await pool.query("INSERT INTO users (name, email, password, photo) VALUES ($1, $2, $3, $4) RETURNING *", [name, email, password, photo]);
    return result.rows[0];
};


module.exports = { getUsers, getUserById, deleteUser, updateUser, createUser };

