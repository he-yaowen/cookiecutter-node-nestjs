import {Options} from "@mikro-orm/core";
import {SqlHighlighter} from "@mikro-orm/sql-highlighter";
import {User} from "./src/modules/user/entities/user.entity";

export default <Options>{
    type: "sqlite",
    dbName: process.env["DB_NAME"],
    entities: [User],
    highlighter: new SqlHighlighter(),
    debug: false
};
