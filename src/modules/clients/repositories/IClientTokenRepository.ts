import ClientToken from "../infra/typeorm/entities/ClientToken";

export default interface IClientTokenRepository {
    generate(client_id: string): Promise<ClientToken>;
    findByToken(token: string): Promise<ClientToken | undefined>;
}