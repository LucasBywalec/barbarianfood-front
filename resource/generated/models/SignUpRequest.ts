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
 * @interface SignUpRequest
 */
export interface SignUpRequest {
    /**
     * 
     * @type {string}
     * @memberof SignUpRequest
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof SignUpRequest
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof SignUpRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SignUpRequest
     */
    surname?: string;
}

export function SignUpRequestFromJSON(json: any): SignUpRequest {
    return SignUpRequestFromJSONTyped(json, false);
}

export function SignUpRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignUpRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'surname': !exists(json, 'surname') ? undefined : json['surname'],
    };
}

export function SignUpRequestToJSON(value?: SignUpRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'password': value.password,
        'name': value.name,
        'surname': value.surname,
    };
}
