declare const _default: import("vue").DefineComponent<{
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    hue: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
}, {
    bar: import("vue").Ref<HTMLElement | null>;
    barHandle: import("vue").Ref<HTMLElement | null>;
    linearGradient: import("vue").ComputedRef<{
        background: string;
    }>;
    handleLeft: import("vue").Ref<number>;
    handleTop: import("vue").Ref<number>;
    handleClick: (event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:hue" | "change")[], "update:hue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    vertical?: unknown;
    size?: unknown;
    hue?: unknown;
} & {
    vertical: boolean;
    size: string;
    hue: number;
} & {}>, {
    vertical: boolean;
    size: string;
    hue: number;
}>;
export default _default;
