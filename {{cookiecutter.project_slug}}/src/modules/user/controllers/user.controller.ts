import {Controller, HttpStatus, HttpException, Param, Body, Get, Post, Put, Delete} from "@nestjs/common";
import {InjectRepository} from "@mikro-orm/nestjs";
import {User} from "../entities/user.entity";
import {EntityRepository, wrap} from "@mikro-orm/core";

@Controller("users")
export class UserController
{
    public constructor(@InjectRepository(User) private readonly userRepository: EntityRepository<User>)
    {
    }

    @Get()
    public async findAll(): Promise<User[]>
    {
        return await this.userRepository.findAll();
    }

    @Get(":id")
    public async findOne(@Param() id: string): Promise<User>
    {
        return await this.userRepository.findOneOrFail(id);
    }

    @Post()
    public async create(@Body() body: any): Promise<User>
    {
        if (!body.id || !body.name) {
            throw new HttpException("Invalid user to create.", HttpStatus.BAD_REQUEST);
        }

        const user = this.userRepository.create(body);
        await this.userRepository.persist(user).flush();

        return user;
    }

    @Put(":id")
    async update(@Param() id: string, @Body() body: any): Promise<User>
    {
        const user = await this.userRepository.findOne(id);

        if (!user) {
            throw new HttpException("User not found.", HttpStatus.NOT_FOUND);
        }

        wrap(user).assign(body);
        await this.userRepository.persist(user).flush();

        return user;
    }

    @Delete(":id")
    public async delete(@Param() id: string): Promise<void>
    {
        const user = await this.userRepository.findOne(id);

        if (!user) {
            throw new HttpException("User not found.", HttpStatus.NOT_FOUND);
        }

        await this.userRepository.remove(user).flush();
    }
}
