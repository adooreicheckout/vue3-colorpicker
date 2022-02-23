import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    colorList: {
        type: PropType<string[]>;
        default: () => never[];
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    onClickRecord: (color: string) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    colorList?: unknown;
    round?: unknown;
} & {
    colorList: string[];
    round: boolean;
} & {}>, {
    colorList: string[];
    round: boolean;
}>;
export default _default;
