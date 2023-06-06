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
 * @interface GetOfferDetailsResponseOfferList
 */
export interface GetOfferDetailsResponseOfferList {
    /**
     * 
     * @type {string}
     * @memberof GetOfferDetailsResponseOfferList
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOfferDetailsResponseOfferList
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof GetOfferDetailsResponseOfferList
     */
    _for?: GetOfferDetailsResponseOfferListForEnum;
    /**
     * 
     * @type {string}
     * @memberof GetOfferDetailsResponseOfferList
     */
    kcal?: GetOfferDetailsResponseOfferListKcalEnum;
    /**
     * 
     * @type {string}
     * @memberof GetOfferDetailsResponseOfferList
     */
    period?: GetOfferDetailsResponseOfferListPeriodEnum;
    /**
     * 
     * @type {string}
     * @memberof GetOfferDetailsResponseOfferList
     */
    contraindications?: string;
    /**
     * 
     * @type {number}
     * @memberof GetOfferDetailsResponseOfferList
     */
    cost?: number;
}

/**
* @export
* @enum {string}
*/
export enum GetOfferDetailsResponseOfferListForEnum {
    Pregnancy = 'pregnancy',
    Bodybuilders = 'bodybuilders',
    Detox = 'detox'
}/**
* @export
* @enum {string}
*/
export enum GetOfferDetailsResponseOfferListKcalEnum {
    _15002000 = '1500-2000',
    _20002500 = '2000-2500',
    _25003000 = '2500-3000',
    _3000 = '3000+'
}/**
* @export
* @enum {string}
*/
export enum GetOfferDetailsResponseOfferListPeriodEnum {
    ShortTerm = 'short-term',
    LongTerm = 'long-term'
}

export function GetOfferDetailsResponseOfferListFromJSON(json: any): GetOfferDetailsResponseOfferList {
    return GetOfferDetailsResponseOfferListFromJSONTyped(json, false);
}

export function GetOfferDetailsResponseOfferListFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetOfferDetailsResponseOfferList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        '_for': !exists(json, 'for') ? undefined : json['for'],
        'kcal': !exists(json, 'kcal') ? undefined : json['kcal'],
        'period': !exists(json, 'period') ? undefined : json['period'],
        'contraindications': !exists(json, 'contraindications') ? undefined : json['contraindications'],
        'cost': !exists(json, 'cost') ? undefined : json['cost'],
    };
}

export function GetOfferDetailsResponseOfferListToJSON(value?: GetOfferDetailsResponseOfferList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'for': value._for,
        'kcal': value.kcal,
        'period': value.period,
        'contraindications': value.contraindications,
        'cost': value.cost,
    };
}

