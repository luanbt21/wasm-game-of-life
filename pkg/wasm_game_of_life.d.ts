/* tslint:disable */
/* eslint-disable */
/**
*/
export enum Cell {
  Dead = 0,
  Alive = 1,
}
/**
*/
export class Universal {
  free(): void;
/**
* @param {number} width
* @param {number} height
* @returns {Universal}
*/
  static new(width: number, height: number): Universal;
/**
* @returns {number}
*/
  width(): number;
/**
* @returns {number}
*/
  height(): number;
/**
* @returns {number}
*/
  cells(): number;
/**
* @returns {string}
*/
  render(): string;
/**
*/
  tick(): void;
}
