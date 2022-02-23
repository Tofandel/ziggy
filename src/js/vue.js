import route from './index.js';

let installedRoute = null;

export const ZiggyVue = {
    install: (v, options, property = 'route') => {
        installedRoute = (name, params, absolute, config = options) => route(name, params, absolute, config);
        if (property) {
            v.config && (v.config.globalProperties[property] = installedRoute);
            v.mixin && v.mixin({
                methods: {
                    [property]: installedRoute,
                },
            });
        }
    },
};


export const useRoute = () => installedRoute;
