<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5 text-center">
          <!-- <h3>Recette search:</h3>  -->
          <!-- <input type="text" v-model="name" @keypress.enter="fetchmeal(name)" class="form-control"> -->
        </div>
      </div>
      <div class="row mt-3">
        <div v-for="cat in getCategories" :key="cat.idCategory" class="col-md-2 col-sm-6 my-2">
          <Card :categorie="cat"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "./Card.vue"
import Navbar from "./Navbar.vue";
export default {
  name: 'HelloWorld',
  components:{
    Card,Navbar
  },
  data(){
    return({
      name:''
    })
  },
  computed:mapGetters(['getMeal','getCategories']),
  methods:mapActions(['fetchCategories']),
  created(){
    this.fetchCategories()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
