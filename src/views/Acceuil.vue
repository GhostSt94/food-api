<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5 text-center">
        </div>
      </div>
      <div class="row mt-3">
        <div v-for="cat in getCategories" :key="cat.idCategory" class="col-md-3 col-sm-4 col-6 col-lg-2  my-2">
          <Card :categorie="cat"/>
        </div>
        <div v-if="getMeals.length===0" class="text-secondary position-absolute top-50 start-50 translate-middle">
                <h3>Catégorie not found</h3> 
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "../components/Card.vue"

export default {
  name: 'HelloWorld',
  components:{
    Card
  },
  data(){
    return({
      name:''
    })
  },
  computed:mapGetters(['getCategories']),
  methods:mapActions(['fetchCategories']),
  created(){
    this.fetchCategories()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>