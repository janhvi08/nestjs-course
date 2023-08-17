import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import {Request, Response} from 'express';
import { CreateUserDto } from '../../dtos/CreateUser.Dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {

    }

    @Get() 
    getUsers() {
        return this.userService.fetchUsers();
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData:CreateUserDto) {
        console.log(userData);
        return this.userService.createUser(userData);
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        console.log(id);
        return {id};
    }
   
}
