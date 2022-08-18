import {Controller, Get, Param} from "@nestjs/common";
import {HelloService} from "../services/hello.service";

@Controller("hello")
export class HelloController
{
    public constructor(private readonly helloService: HelloService)
    {
    }

    @Get(":name")
    public sayHello(@Param("name") name: string): string
    {
        return this.helloService.say(name);
    }
}
