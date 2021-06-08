<template>
<div>
  <navbar></navbar>
  <div class="contente">
    <contenue></contenue>
  </div>
</div>
</template>

<script>
import navbar from './components/navbar'
import contenue from './components/contenue'

export default {
  name: 'App',
  components: {
    navbar,
    contenue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content{
  display: flex;
}
</style>
