import {NestFactory} from "@nestjs/core";
{% if cookiecutter.use_swaggger == 'yes' %}import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";{% endif %}
import {ApplicationModule} from "./modules/app.module";

const DEFAULT_PORT = 3000;

async function bootstrap(): Promise<void>
{
    const app = await NestFactory.create(ApplicationModule);
    {% if cookiecutter.use_swaggger == 'yes' %}
    const options = new DocumentBuilder()
        .setTitle("API Template NestJS")
        .setDescription("The NestJS API description")
        .setVersion("1.0")
        .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup("api", app, document);
    {% endif %}
    await app.listen(process.env["PORT"] || DEFAULT_PORT);
}

bootstrap().catch(err => {
    console.error(err);
    process.exit(1);
});
