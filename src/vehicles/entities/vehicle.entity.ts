import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type VehicleDocument = Vehicle & Document;

@Schema()
export class Vehicle {
  @Prop({
    type: String,
    default: () => uuidv4(),
  })
  _id: string; // UUID como id principal

  @Prop({ required: true })
  name: string;

  @Prop()
  brand: string;

  @Prop()
  year: number;

  @Prop()
  price: number;

  @Prop()
  vehicleType: string;

  @Prop([String])
  images: string[];

  @Prop()
  dealerId?: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
