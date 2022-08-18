import {NestFactory} from "@nestjs/core";
import {ApplicationModule} from "./modules/app.module";

const DEFAULT_PORT = 3000;

async function bootstrap(): Promise<void>
{
    const app = await NestFactory.create(ApplicationModule);

    await app.listen(process.env["PORT"] || DEFAULT_PORT);
}

bootstrap().catch(err => {
    console.error(err);
    process.exit(1);
});
