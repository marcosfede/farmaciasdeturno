import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PharmaciesService } from './pharmacies.service'
import { PharmaciesController } from './pharmacies.controller'
import { Pharmacy } from '@fdt/models'

@Module({
  imports: [TypeOrmModule.forFeature([Pharmacy])],
  providers: [PharmaciesService],
  controllers: [PharmaciesController],
})
export class PharmaciesModule {}
