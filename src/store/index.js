import {createStore} from 'vuex'

export default createStore({
    state:{
        counter : 0
    },
    getters: {
        getCounter(state){
            return state.counter
        }
    },
    mutations:{
        updateCount(state){
            state.counter++;
        }
    },
    actions:{
        count(context){
            context.commit('updateCount')
        }
    },

});