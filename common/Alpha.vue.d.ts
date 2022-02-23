declare const _default: import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    alpha: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
}, {
    barEle: import("vue").Ref<HTMLElement | null>;
    cursorEle: import("vue").Ref<HTMLElement | null>;
    cursorLeft: import("vue").Ref<number>;
    cursorTop: import("vue").Ref<number>;
    gradientColor: import("vue").ComputedRef<{
        background: string;
    }>;
    onSliderClick: (event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:alpha" | "change")[], "update:alpha" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    color?: unknown;
    vertical?: unknown;
    size?: unknown;
    alpha?: unknown;
} & {
    color: string;
    vertical: boolean;
    size: string;
    alpha: number;
} & {}>, {
    color: string;
    vertical: boolean;
    size: string;
    alpha: number;
}>;
export default _default;
