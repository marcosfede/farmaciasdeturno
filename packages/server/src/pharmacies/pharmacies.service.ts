import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Pharmacy, Shift } from './pharmacies.entity'

@Injectable()
export class PharmaciesService {
  constructor(
    @InjectRepository(Pharmacy)
    private readonly pharmacyRepository: Repository<Pharmacy>,
  ) {}

  async findAll(): Promise<Pharmacy[]> {
    return await this.pharmacyRepository.find()
  }
}

@Injectable()
export class ShiftsService {
  constructor(
    @InjectRepository(Shift)
    private readonly shiftRepository: Repository<Shift>,
  ) {}

  async findAll(): Promise<Shift[]> {
    return await this.shiftRepository.find()
  }
}
