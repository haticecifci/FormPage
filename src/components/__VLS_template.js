import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './DynamicInput.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label; __VLS_intrinsicElements.label;
__VLS_intrinsicElements.input; __VLS_intrinsicElements.input;
__VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("flex flex-col"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("flex flex-col"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.userExp)!)) {
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("flex gap-8"), key: ((item.company)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("flex gap-8"), key: ((item.company)), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["div"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("mb-4 flex flex-col w-full"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("mb-4 flex flex-col w-full"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = __VLS_intrinsicElements["label"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, for: ("nameInput"), class: ("text-gray-500 text-xs mb-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, for: ("nameInput"), class: ("text-gray-500 text-xs mb-2"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
(__VLS_18.slots!).default;
}
{
const __VLS_20 = __VLS_intrinsicElements["input"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, id: ("nameInput"), class: ("block w-full font-normal text-base text-gray-700 bg-white rounded border border-solid border-gray-400 transition ease-in outline-none px-3 py-1 m-0 focus:text-gray-900 focus:border-blue-600 placeholder-gray-400 placeholder:text-xs"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, id: ("nameInput"), class: ("block w-full font-normal text-base text-gray-700 bg-white rounded border border-solid border-gray-400 transition ease-in outline-none px-3 py-1 m-0 focus:text-gray-900 focus:border-blue-600 placeholder-gray-400 placeholder:text-xs"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
(item.company);
}
(__VLS_13.slots!).default;
}
{
const __VLS_25 = __VLS_intrinsicElements["div"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, class: ("mb-4 flex flex-col w-full"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("mb-4 flex flex-col w-full"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
{
const __VLS_30 = __VLS_intrinsicElements["label"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{}, for: ("expInput"), class: ("text-gray-500 text-xs mb-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, for: ("expInput"), class: ("text-gray-500 text-xs mb-2"), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
(__VLS_33.slots!).default;
}
{
const __VLS_35 = __VLS_intrinsicElements["input"];
const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
const __VLS_37 = __VLS_36({ ...{}, id: ("expInput"), class: ("block w-full font-normal text-base text-gray-700 bg-white rounded border border-solid border-gray-400 transition ease-in outline-none px-3 py-1 m-0 focus:text-gray-900 focus:border-blue-600 placeholder-gray-400 placeholder:text-xs"), placeholder: ("3+"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, id: ("expInput"), class: ("block w-full font-normal text-base text-gray-700 bg-white rounded border border-solid border-gray-400 transition ease-in outline-none px-3 py-1 m-0 focus:text-gray-900 focus:border-blue-600 placeholder-gray-400 placeholder:text-xs"), placeholder: ("3+"), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
(item.exp);
}
(__VLS_28.slots!).default;
}
(__VLS_8.slots!).default;
}
// @ts-ignore
[userExp,];
}
(__VLS_3.slots!).default;
}
{
const __VLS_40 = __VLS_intrinsicElements["h1"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
const __VLS_42 = __VLS_41({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
(__VLS_ctx.getTotalYears);
(__VLS_43.slots!).default;
}
{
const __VLS_45 = __VLS_intrinsicElements["button"];
const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
const __VLS_47 = __VLS_46({ ...{ onClick: {} as any, }, type: ("button"), class: ("px-4 py-2 text-gray-700 font-bold rounded outline-none border border-gray-400 leading-3 shadow-md w-max duration-150 ease-in-out focus:shadow-lg"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, type: ("button"), class: ("px-4 py-2 text-gray-700 font-bold rounded outline-none border border-gray-400 leading-3 shadow-md w-max duration-150 ease-in-out focus:shadow-lg"), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
let __VLS_50 = { 'click': __VLS_pickEvent(__VLS_49['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_47>).onClick) };
__VLS_50 = {
click: $event => {
__VLS_ctx.addNewExp();
// @ts-ignore
[getTotalYears, addNewExp,];
}
};
(__VLS_48.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["flex-col"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["gap-8"];
__VLS_styleScopedClasses["mb-4"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["flex-col"];
__VLS_styleScopedClasses["w-full"];
__VLS_styleScopedClasses["text-gray-500"];
__VLS_styleScopedClasses["text-xs"];
__VLS_styleScopedClasses["mb-2"];
__VLS_styleScopedClasses["block"];
__VLS_styleScopedClasses["w-full"];
__VLS_styleScopedClasses["font-normal"];
__VLS_styleScopedClasses["text-base"];
__VLS_styleScopedClasses["text-gray-700"];
__VLS_styleScopedClasses["bg-white"];
__VLS_styleScopedClasses["rounded"];
__VLS_styleScopedClasses["border"];
__VLS_styleScopedClasses["border-solid"];
__VLS_styleScopedClasses["border-gray-400"];
__VLS_styleScopedClasses["transition"];
__VLS_styleScopedClasses["ease-in"];
__VLS_styleScopedClasses["outline-none"];
__VLS_styleScopedClasses["px-3"];
__VLS_styleScopedClasses["py-1"];
__VLS_styleScopedClasses["m-0"];
__VLS_styleScopedClasses["focus:text-gray-900"];
__VLS_styleScopedClasses["focus:border-blue-600"];
__VLS_styleScopedClasses["placeholder-gray-400"];
__VLS_styleScopedClasses["placeholder:text-xs"];
__VLS_styleScopedClasses["mb-4"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["flex-col"];
__VLS_styleScopedClasses["w-full"];
__VLS_styleScopedClasses["text-gray-500"];
__VLS_styleScopedClasses["text-xs"];
__VLS_styleScopedClasses["mb-2"];
__VLS_styleScopedClasses["block"];
__VLS_styleScopedClasses["w-full"];
__VLS_styleScopedClasses["font-normal"];
__VLS_styleScopedClasses["text-base"];
__VLS_styleScopedClasses["text-gray-700"];
__VLS_styleScopedClasses["bg-white"];
__VLS_styleScopedClasses["rounded"];
__VLS_styleScopedClasses["border"];
__VLS_styleScopedClasses["border-solid"];
__VLS_styleScopedClasses["border-gray-400"];
__VLS_styleScopedClasses["transition"];
__VLS_styleScopedClasses["ease-in"];
__VLS_styleScopedClasses["outline-none"];
__VLS_styleScopedClasses["px-3"];
__VLS_styleScopedClasses["py-1"];
__VLS_styleScopedClasses["m-0"];
__VLS_styleScopedClasses["focus:text-gray-900"];
__VLS_styleScopedClasses["focus:border-blue-600"];
__VLS_styleScopedClasses["placeholder-gray-400"];
__VLS_styleScopedClasses["placeholder:text-xs"];
__VLS_styleScopedClasses["px-4"];
__VLS_styleScopedClasses["py-2"];
__VLS_styleScopedClasses["text-gray-700"];
__VLS_styleScopedClasses["font-bold"];
__VLS_styleScopedClasses["rounded"];
__VLS_styleScopedClasses["outline-none"];
__VLS_styleScopedClasses["border"];
__VLS_styleScopedClasses["border-gray-400"];
__VLS_styleScopedClasses["leading-3"];
__VLS_styleScopedClasses["shadow-md"];
__VLS_styleScopedClasses["w-max"];
__VLS_styleScopedClasses["duration-150"];
__VLS_styleScopedClasses["ease-in-out"];
__VLS_styleScopedClasses["focus:shadow-lg"];
}
var __VLS_slots!: {};
return __VLS_slots;
}
