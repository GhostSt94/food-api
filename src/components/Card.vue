<template>
<a :href="`/categories/${categorie.strCategory}`">
  <div class="card  pt-1">
          <img :src='categorie.strCategoryThumb' class="card-img-top" :alt="categorie.strCategory">
          <div class="card-body">
            <div class="card-title mt-1">
                <h5><i>{{categorie.strCategory}}</i></h5>
            </div>
            <div class="row justify-content-center text-secondary">
                <div class="col"><small>{{categorie.strCategoryDescription.slice(0,80)}}... </small></div>
                <!-- <div class="col"><small>{{movie.Year}}</small></div> -->
            </div>
          </div>
  </div></a>
</template>

<script>
export default {
    name:"Card",
    props:{
        categorie:{
            type:Object,
            required:true
        }
    }
}
</script>

<style scoped>
    .card-body{
        min-height: 200px;
    }
    a{text-decoration: none;color: black;}
    a:hover{color: rgba(218,165,32,1);}
    .card{box-shadow: 1px 3px 6px rgba(42,77,79,1);}
</style>