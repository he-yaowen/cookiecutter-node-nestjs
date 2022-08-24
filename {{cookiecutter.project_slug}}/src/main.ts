import {NestFactory} from "@nestjs/core";
{% if cookiecutter.use_swagger == 'yes' %}import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";{% endif %}
import {ApplicationModule} from "./modules/app.module";
{% if cookiecutter.use_mikro_orm == 'yes' %}import {MikroORM} from "@mikro-orm/core";{% endif %}

const DEFAULT_PORT = 3000;

async function bootstrap(): Promise<void>
{
    const app = await NestFactory.create(ApplicationModule);
    {% if cookiecutter.use_swagger == 'yes' %}
    const options = new DocumentBuilder()
        .setTitle("API Template NestJS")
        .setDescription("The NestJS API description")
        .setVersion("1.0")
        .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup("api", app, document);
    {% endif %}
    {% if cookiecutter.use_mikro_orm == 'yes' %}
    await app.get(MikroORM).getSchemaGenerator().ensureDatabase();
    await app.get(MikroORM).getSchemaGenerator().updateSchema();
    {% endif %}
    await app.listen(process.env["PORT"] || DEFAULT_PORT);
}

bootstrap().catch(err => {
    console.error(err);
    process.exit(1);
});
