import {createStore} from 'vuex'

export default createStore({
    state:{
        counter : 0,
        shoes : [
            {
            "id": 1,
            "imgUrl": "https://image.shutterstock.com/z/stock-photo-pair-of-white-sneakers-isolated-on-white-background-sport-shoes-712448377.jpg",
            "name": "Sport Shoes",
            "price": "110"
            },
            {
            "id": 2,
            "imgUrl": "https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg",
            "name": "Red SNEAKER",
            "price": "91"
            },
            {
            "id": 3,
            "imgUrl": "https://image.shutterstock.com/z/stock-photo-children-s-autumn-or-winter-fashion-boots-isolated-on-white-background-708900334.jpg",
            "name": "Winter boots children",
            "price": "143"
            },
            {
            "id": 4,
            "imgUrl": "https://image.shutterstock.com/z/stock-photo-bangkok-thailand-january-onitsuka-tiger-asics-gel-lyte-iii-on-january-in-bangkok-292088969.jpg",
            "name": "Sports shoes Red-White",
            "price": "150"
            },
            {
            "id": 5,
            "imgUrl": "https://image.shutterstock.com/z/stock-photo-leather-shoes-isolated-on-white-background-including-clipping-path-216565609.jpg",
            "name": "Black leather shoes",
            "price": "250"
            },
            {
            "id": 6,
            "imgUrl": "https://image.shutterstock.com/z/stock-photo-casual-shoes-on-white-background-included-clipping-path-667459072.jpg",
            "name": "Shoes Canvas",
            "price": "50"
            },
            {
            "id": 7,
            "imgUrl": "https://image.shutterstock.com/z/stock-photo-white-sneakers-on-white-background-including-clipping-path-1100736923.jpg",
            "name": "Shoes White",
            "price": "85"
            },
            {
            "id": 8,
            "imgUrl": "https://image.shutterstock.com/z/stock-photo-yellow-sneakers-15066415.jpg",
            "name": "Sneakers Yellow",
            "price": "125"
            }
        ],
        listePanier: [],
    },
    getters: {
        getCounter(state){
            return state.counter;
        },
        getProducts(state){
            return state.shoes;
        },
        getPanier(state){
            return state.listePanier;
        }
    },
    actions:{
        count(context){
            context.commit('updatePanier');
        }
    },
    mutations:{
        updatePanier(state, unProduit){
            state.listePanier.push(unProduit);
        }
    },
});