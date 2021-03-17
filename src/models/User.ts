import { uuid } from 'uuidv4'

class Users {
    id: string;

    name: string;

    email: string;

    password: string;

    created_at: Date;

    updated_at: Date;

    constructor({ name, email, password, created_at, updated_at }: Omit<Users, 'id'>) {
        this.id = uuid();
        this.name = name;
        this.email = email;
        this.password = password;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

export default Users;