import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm'
import { Point } from 'geojson'

@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100 })
  name: string

  @OneToMany((type) => Pharmacy, (pharmacy) => pharmacy.region)
  pharmacies: Pharmacy[]
}

@Entity()
export class Pharmacy {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 500, nullable: true })
  name: string

  @Column({ length: 10, nullable: true })
  phone: string

  @Column({ length: 100 })
  address: string

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 3857,
  })
  latlng: Point

  @ManyToOne((type) => Region, (region) => region.pharmacies)
  region: Region
}

@Entity()
export class Shift {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  startsAt: Date

  @Column()
  endsAt: Date

  @ManyToMany((type) => Pharmacy)
  @JoinTable()
  pharmacies: Pharmacy[]
}
