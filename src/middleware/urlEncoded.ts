import express from 'express';
import configuration from '../config';
export interface urlEncodedParamInterface {
    extended?: boolean
}
export default (options?: urlEncodedParamInterface) => {
    if (!options) {
        options = {}
    } else {
        if (!options.extended) options.extended = configuration.express.default_url_encoding_extended;
    }
    return express.urlencoded(options)
}