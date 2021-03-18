import Admins from "../infra/typeorm/entities/Admin";
import Offer from "../infra/typeorm/entities/Offer";

interface ICreateOfferData {
    title: string;
    description: string;
    price: string;
    year_model: string;
}

export default interface IAdminsRepository {
    findById(adminId: string): Promise<Admins | undefined>;
    findByEmail(adminEmail: string): Promise<Admins | undefined>;
    createOffer(offerData: ICreateOfferData): Promise<Offer>;
}