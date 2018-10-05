import {ProfileState} from '@/store/modules/profile/types';
import {RootState} from '@/store/types';
import { GetterTree } from 'vuex';

export const getters: GetterTree<ProfileState, RootState> = {
    surname({user}): string {
        if (!user) {
            return '';
        }

        return user.name.substr(user.name.indexOf(' ') + 1);
    },
};
