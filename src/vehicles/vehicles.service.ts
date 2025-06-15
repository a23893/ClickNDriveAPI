import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle, VehicleDocument } from './entities/vehicle.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>,
  ) {}

  create(createVehicleDto: CreateVehicleDto) {
    const created = new this.vehicleModel(createVehicleDto);
    return created.save();
  }

  findAll() {
    return this.vehicleModel.find().exec();
  }

  findOne(id: string) {
    return this.vehicleModel.findById(id).exec();
  }

  update(id: string, updateVehicleDto: UpdateVehicleDto) {
    return this.vehicleModel.findByIdAndUpdate(id, updateVehicleDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.vehicleModel.findByIdAndDelete(id).exec();
  }
}
