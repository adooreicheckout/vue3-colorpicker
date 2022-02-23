declare const _default: import("vue").DefineComponent<{
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    light: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    hue: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    saturation: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
}, {
    bar: import("vue").Ref<HTMLElement | null>;
    barHandle: import("vue").Ref<HTMLElement | null>;
    getComputedLightnessBg: import("vue").ComputedRef<{
        background: string[];
    }>;
    handleLeft: import("vue").Ref<number>;
    handleTop: import("vue").Ref<number>;
    handleClick: (event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    vertical?: unknown;
    size?: unknown;
    light?: unknown;
    hue?: unknown;
    saturation?: unknown;
} & {
    vertical: boolean;
    size: string;
    light: number;
    hue: number;
    saturation: number;
} & {}>, {
    vertical: boolean;
    size: string;
    light: number;
    hue: number;
    saturation: number;
}>;
export default _default;
