import Offer from "../infra/typeorm/entities/Offer";

interface ICreateOfferData {
    title: string;
    description: string;
    price: string;
    year_model: string;
}


export default interface IOffersRepository {
    createOffer(offerData: ICreateOfferData): Promise<Offer>;
    listAllCreatedOffers(): Promise<Offer[]>;
    listCreatetOffersBySearchParams(year_model: any): Promise<Offer[] | undefined>;
}