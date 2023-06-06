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
 * @interface GetOfferDetailsResponse
 */
export interface GetOfferDetailsResponse {
    /**
     * 
     * @type {string}
     * @memberof GetOfferDetailsResponse
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOfferDetailsResponse
     */
    title?: string;
    /**
     * 
     * @type {number}
     * @memberof GetOfferDetailsResponse
     */
    kcalRangeBottom?: number;
    /**
     * 
     * @type {number}
     * @memberof GetOfferDetailsResponse
     */
    kcalRangeTop?: number;
    /**
     * 
     * @type {string}
     * @memberof GetOfferDetailsResponse
     */
    period?: GetOfferDetailsResponsePeriodEnum;
    /**
     * 
     * @type {string}
     * @memberof GetOfferDetailsResponse
     */
    contraindications?: string;
    /**
     * 
     * @type {number}
     * @memberof GetOfferDetailsResponse
     */
    cost?: number;
}

/**
* @export
* @enum {string}
*/
export enum GetOfferDetailsResponsePeriodEnum {
    ShortTerm = 'short-term',
    LongTerm = 'long-term'
}

export function GetOfferDetailsResponseFromJSON(json: any): GetOfferDetailsResponse {
    return GetOfferDetailsResponseFromJSONTyped(json, false);
}

export function GetOfferDetailsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetOfferDetailsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'kcalRangeBottom': !exists(json, 'kcalRangeBottom') ? undefined : json['kcalRangeBottom'],
        'kcalRangeTop': !exists(json, 'kcalRangeTop') ? undefined : json['kcalRangeTop'],
        'period': !exists(json, 'period') ? undefined : json['period'],
        'contraindications': !exists(json, 'contraindications') ? undefined : json['contraindications'],
        'cost': !exists(json, 'cost') ? undefined : json['cost'],
    };
}

export function GetOfferDetailsResponseToJSON(value?: GetOfferDetailsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'kcalRangeBottom': value.kcalRangeBottom,
        'kcalRangeTop': value.kcalRangeTop,
        'period': value.period,
        'contraindications': value.contraindications,
        'cost': value.cost,
    };
}
