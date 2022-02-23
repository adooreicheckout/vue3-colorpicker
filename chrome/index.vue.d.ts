import { PropType } from "vue";
import { ColorAttrs, ColorFormat, ColorInput } from "../color";
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<ColorInput>;
        default: string;
    };
    format: {
        type: PropType<ColorFormat>;
    };
    disableAlpha: BooleanConstructor;
    disableLight: BooleanConstructor;
    disableHue: BooleanConstructor;
    disableHistory: BooleanConstructor;
    disableClipboard: BooleanConstructor;
    historyRound: BooleanConstructor;
}, {
    storageColorList: import("vue").Ref<string[]>;
    currentColor: import("vue").Ref<{
        hex: string;
        hex8: string;
        hsl: {
            h: number;
            s: number;
            l: number;
            a: number;
        };
        hsv: {
            a: number;
            h: number;
            s: number;
            v: number;
        };
        rgb: {
            r: number;
            g: number;
            b: number;
            a: number;
        };
        alpha: number;
        source: string;
        oldHue: number;
    }>;
    onAlphaChange: (alpha: number) => void;
    onHueChange: (hue: number) => void;
    onSaturationChange: (saturation: number, bright: number) => void;
    onInputChange: (val: ColorAttrs) => void;
    onCompactChange: (color: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:color" | "change")[], "update:color" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    color?: unknown;
    format?: unknown;
    disableAlpha?: unknown;
    disableLight?: unknown;
    disableHue?: unknown;
    disableHistory?: unknown;
    disableClipboard?: unknown;
    historyRound?: unknown;
} & {
    color: ColorInput;
    disableAlpha: boolean;
    disableLight: boolean;
    disableHue: boolean;
    disableHistory: boolean;
    disableClipboard: boolean;
    historyRound: boolean;
} & {
    format?: "rgb" | "prgb" | "hex" | "hex6" | "hex3" | "hex4" | "hex8" | "name" | "hsl" | "hsv" | undefined;
}>, {
    color: ColorInput;
    disableAlpha: boolean;
    disableLight: boolean;
    disableHue: boolean;
    disableHistory: boolean;
    disableClipboard: boolean;
    historyRound: boolean;
}>;
export default _default;
