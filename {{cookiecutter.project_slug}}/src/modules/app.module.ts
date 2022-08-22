import {Module} from "@nestjs/common";
import {HelloModule} from "./hello/hello.module";
{% if cookiecutter.use_mikro_orm == 'yes' %}import {UserModule} from "./user/user.module";{% endif %}

@Module({
    imports: [HelloModule{% if cookiecutter.use_mikro_orm == 'yes' %}, UserModule{% endif %}]
})
export class ApplicationModule
{
}
