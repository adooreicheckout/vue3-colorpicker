declare const _default: import("vue").DefineComponent<{
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
    value: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    round: BooleanConstructor;
    hidden: BooleanConstructor;
}, {
    cursorTop: import("vue").Ref<number>;
    cursorLeft: import("vue").Ref<number>;
    background: import("vue").Ref<string>;
    handleDrag: (event: MouseEvent) => void;
    updatePosition: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:saturation" | "update:value" | "change")[], "update:saturation" | "update:value" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    hue?: unknown;
    saturation?: unknown;
    value?: unknown;
    round?: unknown;
    hidden?: unknown;
} & {
    hue: number;
    saturation: number;
    value: number;
    round: boolean;
    hidden: boolean;
} & {}>, {
    hue: number;
    saturation: number;
    value: number;
    round: boolean;
    hidden: boolean;
}>;
export default _default;
