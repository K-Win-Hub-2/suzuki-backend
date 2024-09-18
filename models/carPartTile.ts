import mongoose, { Document, Schema, Model } from 'mongoose'
import { Carmodels } from './carModel';

interface CarPartTitleModel extends Document {
    isDeleted: boolean,
    name: string,
    date: Date,
    car_model: mongoose.Schema.Types.ObjectId
}

const CarPartTitleSchema: Schema<CarPartTitleModel> = new Schema({
    isDeleted: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
        required: true,
    },
   date: {
        type: Date,
        default: Date.now
   },
   car_model: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Carmodels
   }
});



const CarPartTitleModels: Model<CarPartTitleModel> = mongoose.model<CarPartTitleModel>('carparttitles', CarPartTitleSchema);

export { CarPartTitleModels, CarPartTitleModel } ;