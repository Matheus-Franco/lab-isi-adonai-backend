import {
    Entity,
    UpdateDateColumn,
    CreateDateColumn,
    Column,
    PrimaryGeneratedColumn,
    Generated,
} from 'typeorm';

@Entity('admin_tokens')
class AdminToken {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @Generated('uuid')
    token: string;

    @Column()
    client_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default AdminToken;