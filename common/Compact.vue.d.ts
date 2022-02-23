import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    palette: {
        type: PropType<string[]>;
        default: () => string[][];
    };
}, {
    computedBgStyle: (color: string) => "transparent" | {
        background?: undefined;
    } | {
        background: string;
    };
    rows: import("vue").ComputedRef<number>;
    getRowColors: (row: number) => string[];
    changeColor: (color: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    palette?: unknown;
} & {
    palette: string[];
} & {}>, {
    palette: string[];
}>;
export default _default;
