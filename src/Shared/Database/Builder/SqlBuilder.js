import { fetch } from "../Database.js";

export class SqlBuilder {
    constructor(table) {
        this.sql = '';
        this.table = table;
    }

    async findAll(criteria) {
        const query = `SELECT * FROM ${this.table}` + criteria.sql;
        return await fetch(query);
    }
    
    async findOne(criteria) {
        let key = Object.keys(criteria)[0];
        let value = criteria[key];

        const query = `SELECT * FROM ${this.table} t ` + criteria.sql;
        console.log('Query:', query);
        return await fetch(query);
    }

    async insert(data) {

        let keys = Object.keys(data);
        let values = Object.values(data);

        let campos = keys.join(',');
        let valores = values.map((value) => `'${value}'`).join(',');

        const query = `Insert into ${this.table} (${campos}) values (${valores}) RETURNING *`;
        const response = await fetch(query);
        return response[0];
    }

}