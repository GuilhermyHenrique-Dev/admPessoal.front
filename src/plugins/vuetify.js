import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import pt from 'vuetify/es5/locale/pt'

import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        locales: { pt },
        current: 'pt',
    },
    theme: {
        icons: {
            iconfont: 'fa',
        },
        themes: {
            light: {
              primary: '#118ACA',
              secondary: '#430F4A',
              accent: '#CFD403',
              error: '#8f2c11',
            }
        }
    }
});
