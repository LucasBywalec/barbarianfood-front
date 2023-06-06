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
import {
    GetOfferDetailsResponseOfferList,
    GetOfferDetailsResponseOfferListFromJSON,
    GetOfferDetailsResponseOfferListFromJSONTyped,
    GetOfferDetailsResponseOfferListToJSON,
} from './';

/**
 * 
 * @export
 * @interface ListAllOffersResponse
 */
export interface ListAllOffersResponse {
    /**
     * 
     * @type {Array<GetOfferDetailsResponseOfferList>}
     * @memberof ListAllOffersResponse
     */
    usersList?: Array<GetOfferDetailsResponseOfferList>;
}

export function ListAllOffersResponseFromJSON(json: any): ListAllOffersResponse {
    return ListAllOffersResponseFromJSONTyped(json, false);
}

export function ListAllOffersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListAllOffersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'usersList': !exists(json, 'usersList') ? undefined : ((json['usersList'] as Array<any>).map(GetOfferDetailsResponseOfferListFromJSON)),
    };
}

export function ListAllOffersResponseToJSON(value?: ListAllOffersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'usersList': value.usersList === undefined ? undefined : ((value.usersList as Array<any>).map(GetOfferDetailsResponseOfferListToJSON)),
    };
}
