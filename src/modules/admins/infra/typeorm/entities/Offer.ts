import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn,
    UpdateDateColumn 
} from 'typeorm';

@Entity('offers')
class Offer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    price: string;

    @Column()
    year_model: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Offer;