import { PropType } from "vue";
import { ColorInput } from "../color";
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<ColorInput>;
        default: string;
    };
}, {
    currentFormat: import("vue").Ref<string>;
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
    onChangeFormat: () => void;
    onInputChange: (source: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:color" | "change")[], "update:color" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    color?: unknown;
} & {
    color: ColorInput;
} & {}>, {
    color: ColorInput;
}>;
export default _default;
