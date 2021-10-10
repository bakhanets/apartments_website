import Vue from 'vue';
import { mapGetters } from 'vuex';
import VueTippy, { TippyComponent } from 'vue-tippy';
import modals from '~/store/modals/modals';

Vue.use(VueTippy);
Vue.component('tippy', TippyComponent);

Vue.mixin({
    ShowModal(payload) {
        this.$store.dispatch('modals/show', {
            key: modals.default,
            ...payload,
        });
    },
    CloseModal() {
        this.$store.dispatch('modals/hide');
    },
});