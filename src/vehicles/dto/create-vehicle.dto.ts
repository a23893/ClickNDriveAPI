import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  IsBoolean,
  IsEnum,
} from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsOptional()
  @IsString()
  version: string;

  @IsNumber()
  year: number;

  @IsNumber()
  kilometers: number;

  @IsNumber()
  hp: number;

  @IsNumber()
  cc: number;

  @IsString()
  color: string;

  @IsNumber()
  price: number;

  @IsEnum(['new', 'used'])
  condition: 'new' | 'used';

  @IsString()
  fuelType: string;

  @IsEnum(['manual', 'auto'])
  gearbox: 'manual' | 'auto';

  @IsString()
  vehicleType: string;

  @IsString()
  vehicleSegment: string;

  @IsBoolean()
  raceprep: boolean;

  @IsNumber()
  autonomia: number;

  @IsNumber()
  consumo: number;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsOptional()
  @IsString()
  dealerId?: string;
}
