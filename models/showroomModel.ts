import mongoose, { Document, Schema, Model } from 'mongoose'
import bcryptHelpers from '../helpers/bcryptHelper';

interface Showroom extends Document {
    isDeleted: boolean,
    name: string,
    email: string,
    url: string,
    phone: string,
    address: string,
    date: Date,
    region: string,
    townShip: string,
    openDays: string,
    openHours: string,
    latitude: string,
    longitude: string,
}

const ShowroomSchema: Schema<Showroom> = new Schema({
    isDeleted: {
        type: Boolean,
        default: false,
    },
    url: {
        type: String
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    region: {
        type: String,
    },
    townShip: {
        type: String,
    },
    openDays: {
        type: String,
    },
    openHours: {
        type: String,
    },
    latitude: {
        type: String,
    },
    longitude: {
        type: String
    }
});



const Showrooms: Model<Showroom> = mongoose.model<Showroom>('showrooms', ShowroomSchema);

export { Showrooms, Showroom} ;