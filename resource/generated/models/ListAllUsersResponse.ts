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
    UserItem,
    UserItemFromJSON,
    UserItemFromJSONTyped,
    UserItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface ListAllUsersResponse
 */
export interface ListAllUsersResponse {
    /**
     * 
     * @type {Array<UserItem>}
     * @memberof ListAllUsersResponse
     */
    usersList?: Array<UserItem>;
}

export function ListAllUsersResponseFromJSON(json: any): ListAllUsersResponse {
    return ListAllUsersResponseFromJSONTyped(json, false);
}

export function ListAllUsersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListAllUsersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'usersList': !exists(json, 'usersList') ? undefined : ((json['usersList'] as Array<any>).map(UserItemFromJSON)),
    };
}

export function ListAllUsersResponseToJSON(value?: ListAllUsersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'usersList': value.usersList === undefined ? undefined : ((value.usersList as Array<any>).map(UserItemToJSON)),
    };
}
