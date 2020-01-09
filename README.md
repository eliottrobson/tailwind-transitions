# Tailwind Transitions
Tailwind plugin to generate utility first transition classes

# Installation

## Install the plugin
```
npm install @eliottrobson/tailwind-transitions -g --registry "https://npm.pkg.github.com"
```

## Configure in tailwind.config.js
```JSON
{
    theme: {
        transitionProperty: { // defaults
            'none': 'none',
            'all': 'all',
            'text': 'color',
            'bg': 'background-color',
            'border': 'border-color',
            'opacity': 'opacity',
            'transform': 'transform'
        },
        transitionDuration: { // defaults
            '0': '0ms',
            '100': '100ms',
            '300': '300ms',
            '500': '500ms',
            '1000': '1000ms'
        },
        transitionTiming: { // defaults
            'ease': 'ease',
            'ease-in': 'ease-in',
            'ease-out': 'ease-out',
            'ease-in-out': 'ease-in-out'
        },
        transitionDelay: { // defaults
            '0': '0ms',
            '100': '100ms',
            '300': '300ms',
            '500': '500ms',
            '1000': '1000ms'
        }
    },
    variants: { // all properties default to ['responsive']
        transitionProperty: ['responsive'],
        transitionDuration: ['responsive'],
        transitionTiming: ['responsive'],
        transitionDelay: ['responsive'],
    },
    plugins: [
        require('@eliottrobson/tailwind-transitions')(),
    ],
}
```

# Usage
The default settings generates the following (and variants)

```CSS
.transition-none {
    transition-property: none;
}

.transition-all {
    transition-property: all;
}

.transition-text {
    transition-property: color;
}

.transition-bg {
    transition-property: background-color;
}

.transition-border {
    transition-property: border-color;
}

.transition-opacity {
    transition-property: opacity;
}

.transition-transform {
    transition-property: transform;
}

.transition-duration-0 {
    transition-duration: 0ms;
}

.transition-duration-100 {
    transition-duration: 100ms;
}

.transition-duration-300 {
    transition-duration: 300ms;
}

.transition-duration-500 {
    transition-duration: 500ms;
}

.transition-duration-1000 {
    transition-duration: 1000ms;
}

.transition-timing-ease {
    transition-timing-function: ease;
}

.transition-timing-ease-in {
    transition-timing-function: ease-in;
}

.transition-timing-ease-out {
    transition-timing-function: ease-out;
}

.transition-timing-ease-in-out {
    transition-timing-function: ease-in-out;
}

.transition-delay-0 {
    transition-delay: 0ms;
}

.transition-delay-100 {
    transition-delay: 100ms;
}

.transition-delay-300 {
    transition-delay: 300ms;
}

.transition-delay-500 {
    transition-delay: 500ms;
}

.transition-delay-1000 {
    transition-delay: 1000ms;
}
```