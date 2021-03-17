import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAdmins1615940776554 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'admins',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ]
            })
        )

        await queryRunner.manager
            .createQueryBuilder()
            .insert()
            .into('admins')
            .values([
                {
                    name: 'Manager',
                    email: 'manager@adonai.com',
                    password: '123456'
                }
            ])
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager
            .createQueryBuilder()
            .delete()
            .from('admins')
            .where([
                {
                    name: 'Manager',
                    email: 'manager@adonai.com',
                    password: '123456'
                }
            ])
            .execute();

        await queryRunner.dropTable('admins')
    }

}
