import { Get, Controller } from '@nestjs/common'
import { PharmaciesService, ShiftsService } from './pharmacies.service'
import { Pharmacy, Shift } from './pharmacies.entity'

@Controller('pharmacies')
export class PharmaciesController {
  constructor(private readonly pharmaciesService: PharmaciesService) {}

  @Get()
  async pharmacies(): Promise<Pharmacy[]> {
    return this.pharmaciesService.findAll()
  }
}

@Controller('shifts')
export class ShiftsController {
  constructor(private readonly shiftsService: ShiftsService) {}

  @Get()
  async shifts(): Promise<Shift[]> {
    return this.shiftsService.findAll()
  }
}
