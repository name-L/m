// import http from '@/util/http'
const module = {
    namespaced: true,
    state: {
        cityName: '北京',
        cityId: '110100'
    },
    mutations: {
        setcityName (state, data) {
            state.cityName = data;
        },
        setcityId (state, id) {
            state.cityId = id;
        }
    },
    actions: {

    }
};
export default module;
