import {Module} from "@nestjs/common";
import {MikroOrmModule} from "@mikro-orm/nestjs";
import {User} from "./entities/user.entity";
import {UserController} from "./controllers/user.controller";

@Module({
    imports: [
        MikroOrmModule.forRoot(),
        MikroOrmModule.forFeature({
            entities: [User]
        })
    ],
    controllers: [UserController]
})
export class UserModule
{
}
