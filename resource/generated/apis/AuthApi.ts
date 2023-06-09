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


import * as runtime from '../runtime';
import {
    DefaultResponse,
    DefaultResponseFromJSON,
    DefaultResponseToJSON,
    SignInRequest,
    SignInRequestFromJSON,
    SignInRequestToJSON,
    SignInResponse,
    SignInResponseFromJSON,
    SignInResponseToJSON,
    SignUpRequest,
    SignUpRequestFromJSON,
    SignUpRequestToJSON,
} from '../models';

export interface SignInOperationRequest {
    signInRequest: SignInRequest;
}

export interface SignUpOperationRequest {
    signUpRequest: SignUpRequest;
}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI {

    /**
     * Endpoint used to access existing account
     */
    async signInRaw(requestParameters: SignInOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SignInResponse>> {
        if (requestParameters.signInRequest === null || requestParameters.signInRequest === undefined) {
            throw new runtime.RequiredError('signInRequest','Required parameter requestParameters.signInRequest was null or undefined when calling signIn.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/signin`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SignInRequestToJSON(requestParameters.signInRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SignInResponseFromJSON(jsonValue));
    }

    /**
     * Endpoint used to access existing account
     */
    async signIn(requestParameters: SignInOperationRequest, initOverrides?: RequestInit): Promise<SignInResponse> {
        const response = await this.signInRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Endpoint used to create an account
     */
    async signUpRaw(requestParameters: SignUpOperationRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<DefaultResponse>> {
        if (requestParameters.signUpRequest === null || requestParameters.signUpRequest === undefined) {
            throw new runtime.RequiredError('signUpRequest','Required parameter requestParameters.signUpRequest was null or undefined when calling signUp.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/signup`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SignUpRequestToJSON(requestParameters.signUpRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DefaultResponseFromJSON(jsonValue));
    }

    /**
     * Endpoint used to create an account
     */
    async signUp(requestParameters: SignUpOperationRequest, initOverrides?: RequestInit): Promise<DefaultResponse> {
        const response = await this.signUpRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
