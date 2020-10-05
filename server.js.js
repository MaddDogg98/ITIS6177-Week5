const express = require('express');
const app = express();
const port = 3000;
const pool = require('./db');

app.get('/agents', async (req, res) => {
	let conn;
	try {
		conn = await pool.getConnection();
		
		var query = "SELECT * from agents";
		var rows = await conn.query(query);
		res.setHeader('Content-Type', 'application/json');
		res.json(rows);
	} catch (err) {
		throw err;
	} finally {
		if (conn) return conn.release();
	}
});

app.get('/student', async (req, res) => {
	let conn;
	try {
		conn = await pool.getConnection();
		
		var query = "SELECT * from student";
		var rows = await conn.query(query);
		
		res.setHeader('Content-Type', 'application/json');
		res.json(rows);
	} catch (err) {
		throw err;
	} finally {
		if (conn) return conn.release();
	}
});

app.get('/customer', async (req, res) => {
	let conn;
	try {
		conn = await pool.getConnection();
		
		var query = "SELECT * from customer";
		var rows = await conn.query(query);
		
		res.setHeader('Content-Type', 'application/json');
		res.json(rows);
	} catch (err) {
		throw err;
	} finally {
		if (conn) return conn.release();
	}
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});