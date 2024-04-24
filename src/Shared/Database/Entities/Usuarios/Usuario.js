import {EntitySchema} from "typeorm";

export const Usuario = new EntitySchema({
    name: "Usuario",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        // define other columns here
    }
});