import { container } from 'tsyringe';

import IClientsRepository from '../../modules/clients/repositories/IClientsRepository';
import ClientsRepository from '../../modules/clients/infra/typeorm/repositories/ClientsRepository';

import IClientTokenRepository from '../../modules/clients/repositories/IClientTokenRepository';
import ClientTokenRepository from '../../modules/clients/infra/typeorm/repositories/ClientTokenRepository';

container.registerSingleton<IClientsRepository>('ClientsRepository', ClientsRepository);
container.registerSingleton<IClientTokenRepository>('ClientTokenRepository', ClientTokenRepository);