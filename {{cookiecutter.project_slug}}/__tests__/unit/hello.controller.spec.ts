import {Test, TestingModule} from '@nestjs/testing';
import {HelloController} from "../../src/modules/hello/controllers/hello.controller";
import {HelloService} from "../../src/modules/hello/services/hello.service";

describe("HelloController", () => {
    let helloController: HelloController;
    let helloService: HelloService;

    beforeEach(async () => {

        const module: TestingModule = await Test.createTestingModule({
            controllers: [HelloController],
            providers: [HelloService]
        }).compile();

        helloController = module.get<HelloController>(HelloController);
        helloService = module.get<HelloService>(HelloService);
    });

    it("/hello/:name (GET)", async () => {
        const name = "TEST_NAME";

        jest.spyOn(helloService, "say").mockImplementation(() => name);

        expect(helloController.sayHello(name)).toBe(name);
    });
});
