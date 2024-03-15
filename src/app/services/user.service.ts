import { UserType } from "../type/user.type";

export class UserService {
    users: UserType[] = [
        {
            id: 0,
            name: 'John',
            status: true
        },
        {
            id: 1,
            name: 'Jane',
            status: false
        },
        {
            id: 2,
            name: 'Jim',
            status: true
        },
        {
            id: 3,
            name: 'Jill',
            status: false
        }
    ];

    onChangeStatus(id: number): void {
        this.users[id].status = !this.users[id].status;
    }
}