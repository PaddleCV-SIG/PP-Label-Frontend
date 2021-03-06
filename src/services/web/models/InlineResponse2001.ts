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
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
  /**
   *
   * @type {number}
   * @memberof InlineResponse2001
   */
  train?: number;
  /**
   *
   * @type {number}
   * @memberof InlineResponse2001
   */
  val?: number;
  /**
   *
   * @type {number}
   * @memberof InlineResponse2001
   */
  test?: number;
}

export function InlineResponse2001FromJSON(json: any): InlineResponse2001 {
  return InlineResponse2001FromJSONTyped(json, false);
}

export function InlineResponse2001FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): InlineResponse2001 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    train: !exists(json, 'train') ? undefined : json['train'],
    val: !exists(json, 'val') ? undefined : json['val'],
    test: !exists(json, 'test') ? undefined : json['test'],
  };
}

export function InlineResponse2001ToJSON(value?: InlineResponse2001 | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    train: value.train,
    val: value.val,
    test: value.test,
  };
}
