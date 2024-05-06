

export class Criteria {
    constructor() {
        this.sql = '';
    }


    where(columna, value) {
        this.sql += ` WHERE ${columna} = '${value}'`;
        return this;
    }

}