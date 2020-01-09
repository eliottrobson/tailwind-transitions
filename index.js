module.exports = function() {    
    return ({ theme, variants, e, addUtilities }) => {

        const applyUtilities = (className, property, utilities) => {
            return Object.keys(utilities).reduce((obj, key) => {
                obj[`.${e(`${className}-${key}`)}`] = {
                    [property]: utilities[key]
                };
                return obj;
            }, {});
        };
        
        const propertyValues = theme('transitionProperty', {
            'none': 'none',
            'all': 'all',
            'text': 'color',
            'bg': 'background-color',
            'border': 'border-color',
            'opacity': 'opacity',
            'transform': 'transform'
        });
        
        const propertyVariants = variants('transitionProperty', ['responsive']);
        
        const durationValues = theme('transitionDuration', {
            '0': '0ms',
            '100': '100ms',
            '300': '300ms',
            '500': '500ms',
            '1000': '1000ms'
        });
        
        const durationVariants = variants('transitionDuration', ['responsive']);
        
        const timingFunctionValues = theme('timingFunction', {
            'ease': 'ease',
            'ease-in': 'ease-in',
            'ease-out': 'ease-out',
            'ease-in-out': 'ease-in-out'
        });

        const timingFunctionVariants = variants('timingFunction', ['responsive']);

        const delayValues = theme('transitionDelay', {
            '0': '0ms',
            '100': '100ms',
            '300': '300ms',
            '500': '500ms',
            '1000': '1000ms'
        });

        const delayVariants = variants('transitionDelay', ['responsive']);
        
        addUtilities(applyUtilities('transition', 'transition-property', propertyValues), { variants: propertyVariants });
        addUtilities(applyUtilities('transition', 'transition-duration', durationValues), { variants: durationVariants });
        addUtilities(applyUtilities('transition-timing', 'transition-timing-function', timingFunctionValues), { variants: timingFunctionVariants });
        addUtilities(applyUtilities('transition-delay', 'transition-delay', delayValues), { variants: delayVariants });
    
    };
};