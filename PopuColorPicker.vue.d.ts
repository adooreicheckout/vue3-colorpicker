import { PropType } from "vue";
import { ColorInput } from "./color";
export declare type PickerMode = "fk" | "chrome" | "ele";
declare const _default: import("vue").DefineComponent<{
    color: {
        type: PropType<ColorInput>;
        default: string;
    };
    round: {
        type: BooleanConstructor;
    };
    mode: {
        type: PropType<PickerMode>;
        default: string;
    };
    pickerProps: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    currentColor: import("vue").Ref<string | {
        hex?: string | undefined;
        hex8?: string | undefined;
        hsl?: {
            h: number;
            s: number;
            l: number;
            a: number;
        } | undefined;
        hsv?: {
            a: number;
            h: number;
            s: number;
            v: number;
        } | undefined;
        rgb?: {
            r: number;
            g: number;
            b: number;
            a: number;
        } | undefined;
        alpha?: number | undefined;
        source?: string | undefined;
        oldHue?: number | undefined;
    } | {
        r: string;
        g: string;
        b: string;
    } | {
        r: string;
        g: string;
        b: string;
        a: number;
    } | {
        r: number;
        g: number;
        b: number;
    } | {
        r: number;
        g: number;
        b: number;
        a: number;
    } | {
        h: number;
        s: number;
        l: number;
    } | {
        h: number;
        s: number;
        l: number;
        a: number;
    } | {
        h: number;
        s: number;
        v: number;
    } | {
        a: number;
        h: number;
        s: number;
        v: number;
    }>;
    pickerRef: import("vue").Ref<HTMLElement | null>;
    colorRef: import("vue").Ref<HTMLElement | null>;
    showPicker: import("vue").Ref<boolean>;
    getBgColor: import("vue").ComputedRef<{
        background: string;
    }>;
    onColorChange: () => void;
    onShowPicker: () => void;
    onHidePicker: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    color?: unknown;
    round?: unknown;
    mode?: unknown;
    pickerProps?: unknown;
} & {
    color: ColorInput;
    round: boolean;
    mode: PickerMode;
    pickerProps: Record<string, any>;
} & {}>, {
    color: ColorInput;
    round: boolean;
    mode: PickerMode;
    pickerProps: Record<string, any>;
}>;
export default _default;
