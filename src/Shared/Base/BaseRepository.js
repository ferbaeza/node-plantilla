import { SqlBuilder } from "../Database/Builder/SqlBuilder.js";



export class BaseRepository {

    constructor(table){
        this.table = table;
        this.sqlBuilder = new SqlBuilder(this.table);
    }
    
    async getBaseEntity(criteria){
        try {
            return await this.sqlBuilder.findOne(criteria);
        } catch (error) {
            console.log(error);
        }
    }

    async getBaseCollection(criteria) {
        try {
            return await this.sqlBuilder.findAll(criteria);
        } catch (error) {
            console.log(error);
        }
    }

    async insert(data) {
        try {
            return await this.sqlBuilder.insert(data);
        } catch (error) {
            console.log(error);
        }
    }
}