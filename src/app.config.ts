import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

export interface IAppConfig {
    apiEndpoint: string;
}

export const AppConfig: IAppConfig = {    
    apiEndpoint: "http://articlescorewebapi.azurewebsites.net/"
    // apiEndpoint: "http://localhost:50034/"      
};