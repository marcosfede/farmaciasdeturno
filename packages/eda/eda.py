import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from geoalchemy2 import Geometry

db = create_engine("postgres://test:test@localhost:5432/test")
base = declarative_base()
Session = sessionmaker(db)
session = Session()


class Pharmacy(base):
    __tablename__ = 'pharmacy'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    address = Column(String)
    latlng = Column(Geometry('POINT'))
    regionId = Column(Integer, ForeignKey('region.id'))
    region = relationship("Region")
    phone = Column(String)


class Region(base):
    __tablename__ = 'region'

    id = Column(Integer, primary_key=True)
    name = Column(String)


df_csv = pd.read_csv('./farmacias.csv')
print(df_csv.head())

df_db = pd.read_sql_table('pharmacy', db)
print(df_db.head())

joined = df_csv.merge(df_db, how='inner', on='address')
print(joined)
print(len(joined))
