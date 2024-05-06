import { SqlBuilder } from "../Database/Builder/SqlBuilder.js";



export class BaseRepository {

    constructor(table){
        this.table = table;
        this.sqlBuilder = new SqlBuilder();
    }
    
    async findAll(criteria){
        try {
            return await this.sqlBuilder.getAll(criteria);
        } catch (error) {
            console.log(error);
        }
    }
}