import {Test, TestingModule} from "@nestjs/testing";
import {INestApplication} from "@nestjs/common";
import supertest from "supertest";
import {Chance} from "chance";
import {ApplicationModule} from "../../src/modules/app.module";

const chance = new Chance();

describe("ApplicationModule (e2e)", () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [ApplicationModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it("/hello/:name (GET)", () => {
        const name = chance.name();

        return supertest(app.getHttpServer())
            .get(`/hello/${name}`)
            .expect(200)
            .expect(`Hello ${name}!`);
    });
});
