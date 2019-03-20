import _ from 'lodash';

import Card from './package/card/index';

let components = [Card];

let Widget = {};

function install (Vue, opt = {}) {
    let i18n = opt.i18n || 'zh_CN';
    Widget.lang = i18n;

    _.forEach(components, c => {
        if (typeof c.install === 'function') {
            c.install(Vue);
        } else {
            Vue.use(c);
        }
    });
}

Widget.install = install;

export default Widget;