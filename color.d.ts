import { Instance } from "tinycolor2";
export interface Alpha {
    a: number;
}
export interface PRGB {
    r: string;
    g: string;
    b: string;
}
export interface PRGBA extends PRGB, Alpha {
}
export interface RGB {
    r: number;
    g: number;
    b: number;
}
export interface RGBA extends RGB, Alpha {
}
export interface HSL {
    h: number;
    s: number;
    l: number;
}
export interface HSLA extends HSL, Alpha {
}
export interface HSV {
    h: number;
    s: number;
    v: number;
}
export interface HSVA extends HSV {
    a: number;
}
export interface ColorInstance {
    hex?: string;
    hex8?: string;
    hsl?: HSLA;
    hsv?: HSVA;
    rgb?: RGBA;
    alpha?: number;
    source?: string;
    oldHue?: number;
}
export interface ColorAttrs {
    hex: string;
    hex8: string;
    hsl: HSLA;
    hsv: HSVA;
    rgb: RGBA;
    alpha: number;
    source: string;
    oldHue: number;
}
declare type ColorInputWithoutInstance = string | PRGB | PRGBA | RGB | RGBA | HSL | HSLA | HSV | HSVA;
export declare type ColorInput = ColorInstance | ColorInputWithoutInstance;
export declare type ColorFormat = "rgb" | "prgb" | "hex" | "hex6" | "hex3" | "hex4" | "hex8" | "name" | "hsl" | "hsv";
export declare class Color {
    protected instance: Instance;
    parseColor(data: any, oldHue?: number): ColorAttrs;
    format(format: ColorFormat): string;
}
export declare const debounceFn: import("lodash").DebouncedFunc<(fn: Function) => void>;
export declare const MAX_STORAGE_LENGTH = 8;
export declare const STORAGE_COLOR_KEY = "colorList";
export {};
