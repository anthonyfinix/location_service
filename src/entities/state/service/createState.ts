import State, { StateInterface } from '../models/state';
import { SaveOptions } from 'mongoose';
import { ServiceResponseInterface } from '../../../models/serviceResponse.interface';
export default async (newState: StateInterface, options?: SaveOptions): Promise<ServiceResponseInterface> => {
    if (!options) options = {};
    try {
        let state = await State.findOneAndUpdate(
            { name: <string><unknown>newState }, {},
            { upsert: true, new: true }
        );
        return { result: state, message: "success" }
    } catch (e) {
        return { error: e }
    }
}