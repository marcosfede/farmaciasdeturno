import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PharmaciesService, ShiftsService } from './pharmacies.service'
import { PharmaciesController, ShiftsController } from './pharmacies.controller'
import { Pharmacy, Region, Shift } from './pharmacies.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Pharmacy, Region, Shift])],
  providers: [PharmaciesService, ShiftsService],
  controllers: [PharmaciesController, ShiftsController],
})
export class PharmaciesModule {}
