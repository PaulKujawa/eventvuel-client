import {ProfileState} from '@/store/modules/profile/types';
import {RootState} from '@/store/types';
import axios from 'axios';
import {ActionTree} from 'vuex';

export const actions: ActionTree<ProfileState, RootState> = {
    fetchData({commit}): void {
        axios({
            url: 'https://jsonplaceholder.typicode.com/users/1',
        }).then((response) => {
            commit('profileLoaded', response.data);
        }, (error) => {
            window.console.log(error);
            commit('profileError');
        });
    },
};
