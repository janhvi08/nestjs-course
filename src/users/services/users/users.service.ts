import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private fakeUsers = [{username: "Janhvi", email: "janhvi@email.com"},
                         {username: "Anushka", email: "anushka@email.com"},
                         {username: "Vidhika", email: "vidhika@email.com"} 
                        ];
    fetchUsers() {
        return this.fakeUsers;
    }

    createUser(userDetails: CreateUserType) {
        this.fakeUsers.push(userDetails);
        return;
    }

    fetchUserById(id: number) {
        return {id, username: 'Janhvi', email: 'janhvi@email.com'};
    }
}
