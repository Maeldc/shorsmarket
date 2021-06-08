<template>
<div>
    <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
        <img src='../assets/logo.png' class="logoSize">
        <form class="d-flex">
            <router-link to="/">
               <button class="btn btn-info btn-lg" type="submit">Home</button>
            </router-link>
            <router-link to="/panier">
                <button class="btn btn-success btn-lg" type="submit">Panier {{getCounter}}</button>
            </router-link>
        </form>
    </div>
    </nav>
</div>
</template>

<script>

export default {
    computed:{
        getCounter: function(){
            return this.$store.getters.getCounter
        }
    },
}
</script>

<style>
.logoSize{
    width: 50px;
    height: 50px;
}
</style>
