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
 * @interface AddNewOfferRequest
 */
export interface AddNewOfferRequest {
    /**
     * 
     * @type {string}
     * @memberof AddNewOfferRequest
     */
    title?: string;
    /**
     * 
     * @type {number}
     * @memberof AddNewOfferRequest
     */
    kcalRangeBottom?: number;
    /**
     * 
     * @type {number}
     * @memberof AddNewOfferRequest
     */
    kcalRangeTop?: number;
    /**
     * 
     * @type {string}
     * @memberof AddNewOfferRequest
     */
    period?: AddNewOfferRequestPeriodEnum;
    /**
     * 
     * @type {string}
     * @memberof AddNewOfferRequest
     */
    contraindications?: string;
    /**
     * 
     * @type {number}
     * @memberof AddNewOfferRequest
     */
    cost?: number;
}

/**
* @export
* @enum {string}
*/
export enum AddNewOfferRequestPeriodEnum {
    ShortTerm = 'short-term',
    LongTerm = 'long-term'
}

export function AddNewOfferRequestFromJSON(json: any): AddNewOfferRequest {
    return AddNewOfferRequestFromJSONTyped(json, false);
}

export function AddNewOfferRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddNewOfferRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'kcalRangeBottom': !exists(json, 'kcalRangeBottom') ? undefined : json['kcalRangeBottom'],
        'kcalRangeTop': !exists(json, 'kcalRangeTop') ? undefined : json['kcalRangeTop'],
        'period': !exists(json, 'period') ? undefined : json['period'],
        'contraindications': !exists(json, 'contraindications') ? undefined : json['contraindications'],
        'cost': !exists(json, 'cost') ? undefined : json['cost'],
    };
}

export function AddNewOfferRequestToJSON(value?: AddNewOfferRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'kcalRangeBottom': value.kcalRangeBottom,
        'kcalRangeTop': value.kcalRangeTop,
        'period': value.period,
        'contraindications': value.contraindications,
        'cost': value.cost,
    };
}

