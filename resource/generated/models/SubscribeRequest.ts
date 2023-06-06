/* tslint:disable */
/* eslint-disable */
/**
 * BarbarianFoodAPI
 * example
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SubscribeRequest
 */
export interface SubscribeRequest {
    /**
     * 
     * @type {string}
     * @memberof SubscribeRequest
     */
    token?: string;
    /**
     * 
     * @type {Date}
     * @memberof SubscribeRequest
     */
    periodStart?: Date;
    /**
     * 
     * @type {Date}
     * @memberof SubscribeRequest
     */
    periodEnd?: Date;
}

export function SubscribeRequestFromJSON(json: any): SubscribeRequest {
    return SubscribeRequestFromJSONTyped(json, false);
}

export function SubscribeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscribeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : json['token'],
        'periodStart': !exists(json, 'periodStart') ? undefined : (new Date(json['periodStart'])),
        'periodEnd': !exists(json, 'periodEnd') ? undefined : (new Date(json['periodEnd'])),
    };
}

export function SubscribeRequestToJSON(value?: SubscribeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
        'periodStart': value.periodStart === undefined ? undefined : (value.periodStart.toISOString().substr(0,10)),
        'periodEnd': value.periodEnd === undefined ? undefined : (value.periodEnd.toISOString().substr(0,10)),
    };
}

