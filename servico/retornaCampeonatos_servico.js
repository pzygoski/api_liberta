import pool from "./conexao.js";

export async function retornaCampeonatos() {
    const conexao = await pool.getConnection();
    const campeonatos_tb = await conexao.query('select id, campeao, vice, ano FROM campeonatos');
    const campeonatos = campeonatos_tb[0];
    conexao.release();
    return campeonatos;
}

export async function retornaCampeonatosID(id) {
    const conexao = await pool.getConnection();
    const campeonatos_tb = await conexao.query(
    'select id, campeao, vice, ano from campeonatos where id = '+id);
    const campeonatos = campeonatos_tb[0];
    conexao.release();
    return campeonatos;
}

export async function retornaCampeonatosAno(ano) {
    const conexao = await pool.getConnection();
    const campeonatos_tb = await conexao.query(
    'select id, campeao, vice, ano from campeonatos where ano = '+ano)
    const campeonatos = campeonatos_tb[0];
    conexao.release();
    return campeonatos;
}

export async function retornaCampeonatosTime(time) {
    const conexao = await pool.getConnection();
    const campeonatos_tb = await conexao.query(
        'select id, campeao, vice, ano from campeonatos where campeao ="' + time + '"');
    const campeonatos = campeonatos_tb[0];
    conexao.release();
    return campeonatos;
} 