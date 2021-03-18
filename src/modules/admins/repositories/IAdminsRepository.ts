import Admins from "../infra/typeorm/entities/Admin";

export default interface IAdminsRepository {
    findById(adminId: string): Promise<Admins | undefined>;
    findByEmail(adminEmail: string): Promise<Admins | undefined>;
}