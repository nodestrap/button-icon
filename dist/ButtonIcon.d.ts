/// <reference types="react" />
import { StyleCollection } from '@cssfn/cssfn';
import { OrientationName, OrientationRuleOptions, OrientationVariant } from '@nodestrap/basic';
import { defaultOrientationRuleOptions, ButtonStyle, ButtonVariant, ButtonType, ButtonProps } from '@nodestrap/button';
import { IconProps as IconIconProps } from '@nodestrap/icon';
export { defaultOrientationRuleOptions };
export declare type SizeName = 'xs' | 'sm' | 'lg' | 'xl' | (string & {});
export declare const isSize: (sizeName: SizeName, styles: StyleCollection) => import("@cssfn/cssfn").RuleEntry;
/**
 * Uses basic sizes.
 * For example: `sm`, `lg`.
 * @param factory Customize the callback to create sizing definitions for each size in `options`.
 * @param options Customize the size options.
 * @returns A `[Factory<StyleCollection>, ReadonlyRefs, ReadonlyDecls]` represents sizing definitions for each size in `options`.
 */
export declare const usesSizeVariant: (factory?: (sizeName: SizeName) => StyleCollection, options?: SizeName[]) => readonly [() => StyleCollection, import("@cssfn/css-var").ReadonlyRefs<import("@nodestrap/basic").SizeVars>, import("@cssfn/css-var").ReadonlyDecls<import("@nodestrap/basic").SizeVars>];
/**
 * Creates sizing definitions for the given `sizeName`.
 * @param sizeName The given size name written in camel case.
 * @returns A `StyleCollection` represents sizing definitions for the given `sizeName`.
 */
export declare const sizeOf: (sizeName: SizeName) => StyleCollection;
/**
 * Gets the all available size options.
 * @returns A `SizeName[]` represents the all available size options.
 */
export declare const sizeOptions: () => SizeName[];
export interface SizeVariant {
    size?: SizeName;
}
export declare const useSizeVariant: (props: SizeVariant) => {
    class: string | null;
};
export declare const usesButtonIconLayout: (options?: OrientationRuleOptions | undefined) => StyleCollection;
export declare const usesButtonIconVariants: () => StyleCollection;
export declare const usesButtonIconStates: () => StyleCollection;
export declare const useButtonIconSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    fontSize: import("@cssfn/css-types").Cust.Ref;
    fontSizeXs: import("@cssfn/css-types").Cust.Ref;
    fontSizeSm: string[][];
    fontSizeLg: import("@cssfn/css-types").Cust.Ref;
    fontSizeXl: import("@cssfn/css-types").Cust.Ref;
    borderRadius: import("@cssfn/css-types").Cust.Ref;
    borderRadiusXs: import("@cssfn/css-types").Cust.Ref;
    borderRadiusSm: import("@cssfn/css-types").Cust.Ref;
    borderRadiusLg: import("@cssfn/css-types").Cust.Ref;
    borderRadiusXl: import("@cssfn/css-types").Cust.Ref;
    paddingInline: import("@cssfn/css-types").Cust.Ref;
    paddingBlock: import("@cssfn/css-types").Cust.Ref;
    paddingInlineXs: import("@cssfn/css-types").Cust.Ref;
    paddingBlockXs: import("@cssfn/css-types").Cust.Ref;
    paddingInlineSm: import("@cssfn/css-types").Cust.Ref;
    paddingBlockSm: import("@cssfn/css-types").Cust.Ref;
    paddingInlineLg: import("@cssfn/css-types").Cust.Ref;
    paddingBlockLg: import("@cssfn/css-types").Cust.Ref;
    paddingInlineXl: import("@cssfn/css-types").Cust.Ref;
    paddingBlockXl: import("@cssfn/css-types").Cust.Ref;
    gapInline: import("@cssfn/css-types").Cust.Ref;
    gapBlock: import("@cssfn/css-types").Cust.Ref;
    gapInlineXs: import("@cssfn/css-types").Cust.Ref;
    gapBlockXs: import("@cssfn/css-types").Cust.Ref;
    gapInlineSm: import("@cssfn/css-types").Cust.Ref;
    gapBlockSm: import("@cssfn/css-types").Cust.Ref;
    gapInlineLg: import("@cssfn/css-types").Cust.Ref;
    gapBlockLg: import("@cssfn/css-types").Cust.Ref;
    gapInlineXl: import("@cssfn/css-types").Cust.Ref;
    gapBlockXl: import("@cssfn/css-types").Cust.Ref;
}>, cssDecls: import("@cssfn/css-config").Decls<{
    fontSize: import("@cssfn/css-types").Cust.Ref;
    fontSizeXs: import("@cssfn/css-types").Cust.Ref;
    fontSizeSm: string[][];
    fontSizeLg: import("@cssfn/css-types").Cust.Ref;
    fontSizeXl: import("@cssfn/css-types").Cust.Ref;
    borderRadius: import("@cssfn/css-types").Cust.Ref;
    borderRadiusXs: import("@cssfn/css-types").Cust.Ref;
    borderRadiusSm: import("@cssfn/css-types").Cust.Ref;
    borderRadiusLg: import("@cssfn/css-types").Cust.Ref;
    borderRadiusXl: import("@cssfn/css-types").Cust.Ref;
    paddingInline: import("@cssfn/css-types").Cust.Ref;
    paddingBlock: import("@cssfn/css-types").Cust.Ref;
    paddingInlineXs: import("@cssfn/css-types").Cust.Ref;
    paddingBlockXs: import("@cssfn/css-types").Cust.Ref;
    paddingInlineSm: import("@cssfn/css-types").Cust.Ref;
    paddingBlockSm: import("@cssfn/css-types").Cust.Ref;
    paddingInlineLg: import("@cssfn/css-types").Cust.Ref;
    paddingBlockLg: import("@cssfn/css-types").Cust.Ref;
    paddingInlineXl: import("@cssfn/css-types").Cust.Ref;
    paddingBlockXl: import("@cssfn/css-types").Cust.Ref;
    gapInline: import("@cssfn/css-types").Cust.Ref;
    gapBlock: import("@cssfn/css-types").Cust.Ref;
    gapInlineXs: import("@cssfn/css-types").Cust.Ref;
    gapBlockXs: import("@cssfn/css-types").Cust.Ref;
    gapInlineSm: import("@cssfn/css-types").Cust.Ref;
    gapBlockSm: import("@cssfn/css-types").Cust.Ref;
    gapInlineLg: import("@cssfn/css-types").Cust.Ref;
    gapBlockLg: import("@cssfn/css-types").Cust.Ref;
    gapInlineXl: import("@cssfn/css-types").Cust.Ref;
    gapBlockXl: import("@cssfn/css-types").Cust.Ref;
}>, cssVals: import("@cssfn/css-config").Vals<{
    fontSize: import("@cssfn/css-types").Cust.Ref;
    fontSizeXs: import("@cssfn/css-types").Cust.Ref;
    fontSizeSm: string[][];
    fontSizeLg: import("@cssfn/css-types").Cust.Ref;
    fontSizeXl: import("@cssfn/css-types").Cust.Ref;
    borderRadius: import("@cssfn/css-types").Cust.Ref;
    borderRadiusXs: import("@cssfn/css-types").Cust.Ref;
    borderRadiusSm: import("@cssfn/css-types").Cust.Ref;
    borderRadiusLg: import("@cssfn/css-types").Cust.Ref;
    borderRadiusXl: import("@cssfn/css-types").Cust.Ref;
    paddingInline: import("@cssfn/css-types").Cust.Ref;
    paddingBlock: import("@cssfn/css-types").Cust.Ref;
    paddingInlineXs: import("@cssfn/css-types").Cust.Ref;
    paddingBlockXs: import("@cssfn/css-types").Cust.Ref;
    paddingInlineSm: import("@cssfn/css-types").Cust.Ref;
    paddingBlockSm: import("@cssfn/css-types").Cust.Ref;
    paddingInlineLg: import("@cssfn/css-types").Cust.Ref;
    paddingBlockLg: import("@cssfn/css-types").Cust.Ref;
    paddingInlineXl: import("@cssfn/css-types").Cust.Ref;
    paddingBlockXl: import("@cssfn/css-types").Cust.Ref;
    gapInline: import("@cssfn/css-types").Cust.Ref;
    gapBlock: import("@cssfn/css-types").Cust.Ref;
    gapInlineXs: import("@cssfn/css-types").Cust.Ref;
    gapBlockXs: import("@cssfn/css-types").Cust.Ref;
    gapInlineSm: import("@cssfn/css-types").Cust.Ref;
    gapBlockSm: import("@cssfn/css-types").Cust.Ref;
    gapInlineLg: import("@cssfn/css-types").Cust.Ref;
    gapBlockLg: import("@cssfn/css-types").Cust.Ref;
    gapInlineXl: import("@cssfn/css-types").Cust.Ref;
    gapBlockXl: import("@cssfn/css-types").Cust.Ref;
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export declare type IconPosition = 'start' | 'end';
export interface IconProps extends Partial<Pick<IconIconProps, 'icon'>> {
    iconPosition?: IconPosition;
}
export interface ButtonIconProps extends Omit<ButtonProps, 'size'>, IconProps, SizeVariant {
}
export declare function ButtonIcon(props: ButtonIconProps): JSX.Element;
export declare namespace ButtonIcon {
    var prototype: any;
}
export { ButtonIcon as default };
export type { OrientationName, OrientationVariant };
export type { ButtonStyle, ButtonVariant, ButtonType };
