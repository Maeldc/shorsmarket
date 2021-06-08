<template>
  <div>
    <div class="FlexBoxCard">
        <div class="card" v-for="product in getProducts" v-bind:key="product" style="width: 14rem;margin: 15px;">
            <img v-bind:src="product.imgUrl" class="imgSize" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.price }} €</p>
                <a href="#" v-on:click="count(product)" class="btn btn-info">Ajouter au panier</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    methods:{
        count:function(shoe){
            this.$store.commit('updatePanier', shoe);
        },
        addToCard:function(){
            this.$store.dispatch('updatePanier');
        }
    },
    computed:{
        getProducts: function(){
            return this.$store.getters.getProducts
        }
    },
}
</script>

<style>
.imgSize{
    width: 268px !important;
    height: 188px !important;
}
.FlexBoxCard{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.card{
    width: 270px !important;
}
</style>