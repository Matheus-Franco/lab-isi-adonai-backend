import { container } from 'tsyringe';

import IClientsRepository from '../../modules/clients/repositories/IClientsRepository';
import ClientsRepository from '../../modules/clients/infra/typeorm/repositories/ClientsRepository';

import IClientTokenRepository from '../../modules/clients/repositories/IClientTokenRepository';
import ClientTokenRepository from '../../modules/clients/infra/typeorm/repositories/ClientTokenRepository';

import IAdminsRepository from '../../modules/admins/repositories/IAdminsRepository';
import AdminsRepository from '../../modules/admins/infra/typeorm/repositories/AdminsRepository';

import IAdminTokenRepository from '../../modules/admins/repositories/IAdminTokenRepository';
import AdminTokenRepository from '../../modules/admins/infra/typeorm/repositories/AdminTokenRepository';

import IOffersRepository from '../../modules/offers/repositories/IOffersRepository';
import OffersRepository from '../../modules/offers/infra/typeorm/repositories/OffersRepository';

container.registerSingleton<IClientsRepository>('ClientsRepository', ClientsRepository);
container.registerSingleton<IClientTokenRepository>('ClientTokenRepository', ClientTokenRepository);

container.registerSingleton<IAdminsRepository>('AdminsRepository', AdminsRepository);
container.registerSingleton<IAdminTokenRepository>('AdminTokenRepository', AdminTokenRepository);

container.registerSingleton<IOffersRepository>('OffersRepository', OffersRepository);