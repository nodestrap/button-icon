// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// cssfn:
import { 
// compositions:
composition, mainComposition, imports, 
// layouts:
layout, vars, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import typos from '@nodestrap/typos'; // configurable typography (texting) defs
// nodestrap components:
import { 
// hooks:
isSize as basicIsSize, usesSizeVariant as basicUsesSizeVariant, useSizeVariant as basicUseSizeVariant, normalizeOrientationRule, expandBorderRadius, expandPadding, 
// configs:
cssProps as bcssProps, cssDecls as bcssDecls, } from '@nodestrap/basic';
import { 
// hooks:
defaultOrientationRuleOptions, 
// styles:
usesButtonLayout, usesButtonVariants, usesButtonStates, 
// configs:
cssProps as btcssProps, Button, } from '@nodestrap/button';
import { 
// configs:
cssProps as icssProps, cssDecls as icssDecls, Icon, } from '@nodestrap/icon';
// hooks:
// layouts:
export { defaultOrientationRuleOptions };
export const isSize = (sizeName, styles) => basicIsSize(sizeName, styles);
/**
 * Uses basic sizes.
 * For example: `sm`, `lg`.
 * @param factory Customize the callback to create sizing definitions for each size in `options`.
 * @param options Customize the size options.
 * @returns A `[Factory<StyleCollection>, ReadonlyRefs, ReadonlyDecls]` represents sizing definitions for each size in `options`.
 */
export const usesSizeVariant = (factory = sizeOf, options = sizeOptions()) => basicUsesSizeVariant(factory, options);
/**
 * Creates sizing definitions for the given `sizeName`.
 * @param sizeName The given size name written in camel case.
 * @returns A `StyleCollection` represents sizing definitions for the given `sizeName`.
 */
export const sizeOf = (sizeName) => composition([
    layout({
        // overwrites propName = propName{SizeName}:
        ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
    }),
]);
/**
 * Gets the all available size options.
 * @returns A `SizeName[]` represents the all available size options.
 */
export const sizeOptions = () => ['xs', 'sm', 'lg', 'xl'];
export const useSizeVariant = (props) => basicUseSizeVariant(props);
//#endregion sizes
// styles:
export const usesButtonIconLayout = (options) => {
    // options:
    options = normalizeOrientationRule(options, defaultOrientationRuleOptions);
    return composition([
        imports([
            // layouts:
            usesButtonLayout(options),
        ]),
        layout({
            // customize:
            ...usesGeneralProps(cssProps),
            // borders:
            ...expandBorderRadius(cssProps),
            // spacings:
            ...expandPadding(cssProps), // expand padding css vars
        }),
        vars({
            //#region Icon
            // fills the entire parent text's height:
            [icssDecls.size]: `calc(1em * var(${bcssDecls.lineHeight},${typos.lineHeight}))`,
            // set icon's color as parent's font color:
            [icssDecls.foreg]: 'currentColor',
            // modify icon's transition:
            [icssDecls.transition]: [
                icssProps.transition,
                ['color', 0],
                ['background', 0], // no background transition, follow Button's transition
            ],
            //#endregion Icon
        }),
    ]);
};
export const usesButtonIconVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant();
    return composition([
        imports([
            // variants:
            usesButtonVariants(),
            // layouts:
            sizes(),
        ]),
    ]);
};
export const usesButtonIconStates = () => {
    return composition([
        imports([
            // states:
            usesButtonStates(),
        ]),
    ]);
};
export const useButtonIconSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // layouts:
            usesButtonIconLayout(),
            // variants:
            usesButtonIconVariants(),
            // states:
            usesButtonIconStates(),
        ]),
    ]),
], /*sheetId :*/ 'x6fgydkqor'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        //#region typos
        fontSize: typos.fontSizeNm,
        fontSizeXs: typos.fontSizeSm,
        fontSizeSm: [['calc((', typos.fontSizeSm, '+', typos.fontSizeNm, ')/2)']],
        fontSizeLg: typos.fontSizeMd,
        fontSizeXl: typos.fontSizeLg,
        //#endregion typos
        //#region foreg, backg, borders
        borderRadius: bcssProps.borderRadius,
        borderRadiusXs: bcssProps.borderRadiusSm,
        borderRadiusSm: bcssProps.borderRadiusSm,
        borderRadiusLg: bcssProps.borderRadiusLg,
        borderRadiusXl: bcssProps.borderRadiusLg,
        //#endregion foreg, backg, borders
        //#region spacings
        paddingInline: bcssProps.paddingInline,
        paddingBlock: bcssProps.paddingBlock,
        paddingInlineXs: bcssProps.paddingInlineSm,
        paddingBlockXs: bcssProps.paddingBlockSm,
        paddingInlineSm: bcssProps.paddingInlineSm,
        paddingBlockSm: bcssProps.paddingBlockSm,
        paddingInlineLg: bcssProps.paddingInlineLg,
        paddingBlockLg: bcssProps.paddingBlockLg,
        paddingInlineXl: bcssProps.paddingInlineLg,
        paddingBlockXl: bcssProps.paddingBlockLg,
        gapInline: btcssProps.gapInline,
        gapBlock: btcssProps.gapBlock,
        gapInlineXs: btcssProps.gapInlineSm,
        gapBlockXs: btcssProps.gapBlockSm,
        gapInlineSm: btcssProps.gapInlineSm,
        gapBlockSm: btcssProps.gapBlockSm,
        gapInlineLg: btcssProps.gapInlineLg,
        gapBlockLg: btcssProps.gapBlockLg,
        gapInlineXl: btcssProps.gapInlineLg,
        gapBlockXl: btcssProps.gapBlockLg,
        //#endregion spacings
    };
}, { prefix: 'btni' });
export function ButtonIcon(props) {
    // styles:
    const sheet = useButtonIconSheet();
    // rest props:
    const { 
    // appearances:
    icon, // from IconProps
    iconPosition = 'start', // from IconProps
    // children:
    children, ...restProps } = props;
    // jsx:
    return (React.createElement(Button
    // other props:
    , { ...restProps, 
        // classes:
        mainClass: props.mainClass ?? sheet.main },
        icon && (iconPosition === 'start') && React.createElement(Icon, { icon: icon }),
        children,
        icon && (iconPosition === 'end') && React.createElement(Icon, { icon: icon })));
}
ButtonIcon.prototype = Button.prototype; // mark as Button compatible
export { ButtonIcon as default };
