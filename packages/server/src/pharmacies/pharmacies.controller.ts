import { Get, Controller, Res, HttpStatus } from '@nestjs/common'
import { PharmaciesService, ShiftsService } from './pharmacies.service'
import { Response } from 'express'

@Controller('pharmacies')
export class PharmaciesController {
  constructor(private readonly pharmaciesService: PharmaciesService) {}

  @Get()
  async pharmacies() {
    return this.pharmaciesService.findAll()
  }
}

@Controller('onduty')
export class ShiftsController {
  constructor(private readonly shiftsService: ShiftsService) {}

  @Get()
  async shifts(@Res() res: Response) {
    const shift = await this.shiftsService.findOne()
    if (!shift) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send()
    } else {
      return shift
    }
  }
}
