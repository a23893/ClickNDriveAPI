import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type VehicleDocument = Vehicle & Document;

@Schema()
export class Vehicle {
  @Prop({ type: String, default: () => uuidv4() })
  _id: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  model: string;

  @Prop()
  version: string;

  @Prop()
  year: number;

  @Prop()
  kilometers: number;

  @Prop()
  hp: number;

  @Prop()
  cc: number;

  @Prop()
  color: string;

  @Prop()
  price: number;

  @Prop({ enum: ['new', 'used'] })
  condition: 'new' | 'used';

  @Prop()
  fuelType: string; // ou enum: ['gasoline', 'diesel', 'electric', etc.]

  @Prop({ enum: ['manual', 'auto'] })
  gearbox: 'manual' | 'auto';

  @Prop()
  vehicleType: string; // car, moto, truck

  @Prop()
  vehicleSegment: string; // ligeiro, pesado

  @Prop()
  raceprep: boolean;

  @Prop()
  autonomia: number;

  @Prop()
  consumo: number;

  @Prop([String])
  images: string[];

  @Prop()
  dealerId?: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
