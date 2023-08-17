import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import {Request, Response} from 'express';
import { CreateUserDto } from '../../dtos/CreateUser.Dto';

@Controller('users')
export class UsersController {

    @Get() 
    getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
        return [{username: 'Janhvi', email: 'janhvi@email.com'}];
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData:CreateUserDto) {
        console.log(userData);
        return {}; 
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        console.log(id);
        return {id};
    }
   
}
