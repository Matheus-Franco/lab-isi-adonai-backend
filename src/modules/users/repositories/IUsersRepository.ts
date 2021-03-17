import User from '../infra/typeorm/entities/User';

interface ICreateUserData {
    name: string
    email: string
    password: string
}

export default interface IUsersRepository {
    findById(user_id: string): Promise<User | undefined>;
    findByEmail(user_email: string): Promise<User | undefined>;
    createUser(userData: ICreateUserData): Promise<User>;
}