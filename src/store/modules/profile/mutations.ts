import {ProfileState, User} from '@/store/modules/profile/types';
import {MutationTree} from 'vuex';

export const mutations: MutationTree<ProfileState> = {
    profileLoaded(state, payload: User): void {
        state.error = false;
        state.user = payload;
    },
    profileError(state): void {
        state.error = true;
        state.user = undefined;
    },
};
