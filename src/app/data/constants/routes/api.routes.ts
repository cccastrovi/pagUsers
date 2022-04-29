import { enviroment as ENV } from "environments/enviroment.dev";

export const API_ROUTES = {
    AUTH: {
        LOGIN: `${ENV.uri}auth/login`
    }
}
