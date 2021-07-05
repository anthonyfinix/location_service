import City, { CityInterface } from '../models/city';
import { SaveOptions } from 'mongoose';
import { ServiceResponseInterface } from '../../../models/serviceResponse.interface';
export default async (newCity: CityInterface, options?: SaveOptions): Promise<ServiceResponseInterface> => {
    if (!options) options = {};
    try {
        let city = await City.findOneAndUpdate(
            { name: <string><unknown>newCity }, {},
            { upsert: true, new: true }
        );
        return { result: city, message: "success" }
    } catch (e) {
        return { error: e }
    }
}