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
 * @interface ListAllUsersResponseUsersList
 */
export interface ListAllUsersResponseUsersList {
    /**
     * 
     * @type {string}
     * @memberof ListAllUsersResponseUsersList
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ListAllUsersResponseUsersList
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ListAllUsersResponseUsersList
     */
    surname?: string;
    /**
     * 
     * @type {string}
     * @memberof ListAllUsersResponseUsersList
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof ListAllUsersResponseUsersList
     */
    activeSubscription?: string;
}

export function ListAllUsersResponseUsersListFromJSON(json: any): ListAllUsersResponseUsersList {
    return ListAllUsersResponseUsersListFromJSONTyped(json, false);
}

export function ListAllUsersResponseUsersListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListAllUsersResponseUsersList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'surname': !exists(json, 'surname') ? undefined : json['surname'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'activeSubscription': !exists(json, 'activeSubscription') ? undefined : json['activeSubscription'],
    };
}

export function ListAllUsersResponseUsersListToJSON(value?: ListAllUsersResponseUsersList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'surname': value.surname,
        'email': value.email,
        'activeSubscription': value.activeSubscription,
    };
}
