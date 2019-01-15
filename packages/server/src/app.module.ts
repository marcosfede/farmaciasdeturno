import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PharmaciesModule } from './pharmacies/pharmacies.module'

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, NODE_ENV } = process.env

// TODO: read from env variables
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'test',
      password: 'test',
      database: 'test',
      synchronize: true,
      logging: NODE_ENV !== 'production',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    PharmaciesModule,
  ],
})
export class AppModule {}
