import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import {Request, Response} from 'express';
import { CreateUserDto } from '../../dtos/CreateUser.Dto';

@Controller('users')
export class UsersController {

    @Get() 
    getUsers() {
        return [{username: 'Janhvi', email: 'janhvi@email.com'}];
    }

    @Post('create')
    createUser(@Body() userData:CreateUserDto) {
        console.log(userData);
        return {}; 
    }

    @Get(':id')
    getUserById(@Param('id') id: string, @Param('postId') postId: string) {
        console.log(id);
        return {id};
    }
   
}
