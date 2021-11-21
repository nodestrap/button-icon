# &lt;ButtonIcon&gt;&lt;/ButtonIcon&gt;
A button with a nice icon for initiating an action.

## Preview

```jsx
<ButtonIcon tag='a' icon='instagram' theme='primary' size='lg' gradient={true} outlined={true} press={true} onClick={() => alert('hello world')} >
    click me
</ButtonIcon>
```
Rendered to:
```html
<a class="c1 thPrimary szLg gradient outlined pressed" style="--v59:url("/icons/instagram.svg");">
    click me
</a>
```

## Features
* Includes all features in [`<Button />`](https://www.npmjs.com/package/@nodestrap/button).
* Includes all features in [`<Icon />`](https://www.npmjs.com/package/@nodestrap/icon).
* Customizable via [`@cssfn/css-config`](https://www.npmjs.com/package/@cssfn/css-config).

## Installation

Using npm:
```
npm i @nodestrap/button-icon
```

## Support Us

If you feel our lib is useful for your projects,  
please make a donation to avoid our project from extinction.

We always maintain our projects as long as we're still alive.

[[Make a donation](https://ko-fi.com/heymarco)]
