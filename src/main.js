import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate'
import VueTypedJs from 'vue-typed-js'
import VueAgile from 'vue-agile'
import VueScrollTo from 'vue-scrollto'
import Meta from 'vue-meta'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Inview from 'vueinview'
import vueMoment from 'vue-moment'


Inview.offset (350);
Inview.threshold (0);

Vue.use (Meta);
Vue.use (VueScrollTo);
Vue.use (VueAgile);
Vue.use (VeeValidate);
Vue.use (VueTypedJs);
Vue.use (VueAxios, axios);
Vue.use (Inview);
Vue.use(vueMoment);
Vue.config.productionTip = false;

// Object.defineProperty (Vue.prototype, '$typed', {value: Typed});

new Vue ({
   router,
   render: h => h (App)
}).$mount ('#app');
