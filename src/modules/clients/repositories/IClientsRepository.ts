import Client from '../infra/typeorm/entities/Client';

interface ICreateClientData {
    name: string
    email: string
    password: string
}

export default interface IClientsRepository {
    findById(clientId: string): Promise<Client | undefined>;
    findByEmail(userEmail: string): Promise<Client | undefined>;
    createClient(userData: ICreateClientData): Promise<Client>;
}