export interface IConfig {
    env: string
    port: number,
    default_user_verification_state: boolean,
    default_user_role: string,
    mongoURI: string,
    mongooseOptions: {
        useNewUrlParser: boolean,
        useUnifiedTopology: boolean,
        useFindAndModify:boolean
    },
    express: {
        default_url_encoding_extended: boolean
    },
    passwordHashRound: number,
    amqplibURL:string

}
class Configuration implements IConfig {
    env: string = "development";
    port: number = 3000;
    default_user_verification_state: boolean = false;
    default_user_role: string = "admin";
    mongoURI: string = "http://localhost:27017";
    mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
    }
    express = {
        default_url_encoding_extended: true
    }
    passwordHashRound: number = 5
    amqplibURL: string = "amqps://localhost"
    setConfiguration(options: IConfig) {
        if (options.amqplibURL) this.amqplibURL = options.amqplibURL;
        if (options.mongoURI) this.mongoURI = options.mongoURI;
        if (options.port) this.port = options.port;
        if (options.env) this.env = options.env;
    }

}

let configuration = new Configuration();
export default configuration;