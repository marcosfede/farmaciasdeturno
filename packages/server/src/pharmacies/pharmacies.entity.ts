import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinTable, Unique } from 'typeorm'
import { Point } from 'geojson'

@Entity()
@Unique(['name'])
export class Region {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 100 })
  name: string

  @OneToMany((type) => Pharmacy, (pharmacy) => pharmacy.region)
  pharmacies: Pharmacy[]
}

@Entity()
@Unique(['name'])
export class Pharmacy {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 500, nullable: true })
  name: string

  @Column({ length: 100, nullable: true })
  phone: string

  @Column({ length: 100 })
  address: string

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 3857,
  })
  latlng: Point

  @ManyToOne((type) => Region, (region) => region.pharmacies, { eager: true })
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

  @ManyToMany((type) => Pharmacy, { eager: true })
  @JoinTable()
  pharmacies: Pharmacy[]
}
