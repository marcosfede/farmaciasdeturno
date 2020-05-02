import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PharmaciesModule } from './pharmacies/pharmacies.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [__dirname + '/**/**.entity{.ts,.js}'],
      synchronize: true,
      logging: process.env.NODE_ENV !== 'production',
      keepConnectionAlive: true,
    }),
    PharmaciesModule,
  ],
})
export class AppModule {}
