import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PharmaciesModule } from './pharmacies/pharmacies.module'
import ormconfig from './ormconfig'
// TODO: read from env variables
@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormconfig,
      type: 'postgres',
    }),
    PharmaciesModule,
  ],
})
export class AppModule {}
