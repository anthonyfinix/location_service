import Country, { CountryInterface } from '../models/country';
import { SaveOptions } from 'mongoose';
import { ServiceResponseInterface } from '../../../models/serviceResponse.interface';
export default async (newCountry: CountryInterface, options?: SaveOptions): Promise<ServiceResponseInterface> => {
    if (!options) options = {};
    try {
        let country = await Country.findOneAndUpdate(
            { name: <string><unknown>newCountry }, {},
            { upsert: true, new: true }
        );
        return { result: country, message: "success" }
    } catch (e) {
        return { error: e }
    }
}