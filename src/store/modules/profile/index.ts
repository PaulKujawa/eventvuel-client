import {actions} from '@/store/modules/profile/actions';
import {getters} from '@/store/modules/profile/getters';
import {mutations} from '@/store/modules/profile/mutations';
import {ProfileState} from '@/store/modules/profile/types';
import {RootState} from '@/store/types';
import {Module} from 'vuex';

export const profile: Module<ProfileState, RootState> = {
    namespaced: true,
    state: {
        user: undefined,
        error: false,
    },
    actions,
    getters,
    mutations,
};
