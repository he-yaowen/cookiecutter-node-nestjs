import {Injectable} from "@nestjs/common";

@Injectable()
export class HelloService
{
    public say(name: string): string
    {
        return `Hello ${name}!`;
    }
}
