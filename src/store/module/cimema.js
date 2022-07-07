import http from '@/util/http';
const module = {
    namespaced: true,
    state: {
        datalist: []
    },
    mutations: {
        setlist (state, data) {
            console.log(data);
            state.datalist = data;
        }
    },
    actions: {
        getaction (store, id) {
            http
                .request({
                    url: `/gateway?cityId=${id}&ticketFlag=1&k=7912347`,
                    headers: {
                        'X-Host': 'mall.film-ticket.cinema.list'
                    }
                })
                .then(res => {
                    console.log(res.data);
                    store.commit('setlist', res.data.data.cinemas);
                });
        }
    },
    getters: {
        topDatolist (state) {
            return state.datalist.slice(0, 5);
        }
    }
};
export default module;
