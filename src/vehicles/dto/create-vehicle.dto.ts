import { IsString, IsOptional, IsNumber, IsArray } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  price: number;

  @IsString()
  vehicleType: string;

  @IsOptional()
  @IsArray()
  images?: string[];

  @IsOptional()
  @IsString()
  dealerId?: string;
}
