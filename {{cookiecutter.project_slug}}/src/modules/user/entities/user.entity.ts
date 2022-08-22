import {Entity, PrimaryKey, Property} from "@mikro-orm/core";

@Entity({tableName: "users"})
export class User
{
    @PrimaryKey()
    public id!: string;

    @Property()
    public name!: string;
}
