import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PharmaciesService } from './pharmacies.service'
import { PharmaciesController } from './pharmacies.controller'
import { Pharmacy } from '@farmacias/models'

@Module({
  imports: [TypeOrmModule.forFeature([Pharmacy])],
  providers: [PharmaciesService],
  controllers: [PharmaciesController],
})
export class PharmaciesModule {}
