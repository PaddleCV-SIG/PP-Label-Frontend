/* tslint:disable */
/* eslint-disable */
/**
 * PP-Label API Spec
 * Back end APIs for PP-Label
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: me@linhan.email
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface Polygon2pointsRequest
 */
export interface Polygon2pointsRequest {
  /**
   *
   * @type {string}
   * @memberof Polygon2pointsRequest
   */
  polygon?: string;
}

/**
 * Check if a given object implements the Polygon2pointsRequest interface.
 */
export function instanceOfPolygon2pointsRequest(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function Polygon2pointsRequestFromJSON(json: any): Polygon2pointsRequest {
  return Polygon2pointsRequestFromJSONTyped(json, false);
}

export function Polygon2pointsRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Polygon2pointsRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    polygon: !exists(json, 'polygon') ? undefined : json['polygon'],
  };
}

export function Polygon2pointsRequestToJSON(value?: Polygon2pointsRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    polygon: value.polygon,
  };
}