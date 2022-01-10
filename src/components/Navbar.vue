<template>
    <nav class="navbar navbar-expand-lg navbar-dark shadow-sm mb-3">
        <div class="container-fluid">
            <a class="navbar-brand mx-5" href="/"><h3>Foody</h3> </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/meal/random">Random</a>
                </li>
            </ul>
            <form v-if="display" class="d-flex">
                <input @input="sortDataSearch(searchTxt)" v-model="searchTxt" class="form-control me-2" type="search" placeholder="filter by name" aria-label="Search">
            </form>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name:"Navbar",
    data(){
        return({
            searchTxt:'',
            display:true,
            routes:['meal','random',"error"],
            object:{}
        })
    },
    created(){
        this.routes.includes(this.$route.name)?this.display=false:null
    },
    methods:{
        ...mapActions(['sortData',"fetchCategories",'fetchMealsByCategorie']),
        async sortDataSearch(txt){
                if(this.$route.name==='home'){
                    this.object={
                        type:'cat',
                        txt:txt
                    }
                    await this.fetchCategories()
                    this.sortData(this.object)
                }else{
                    await this.fetchMealsByCategorie(this.$route.params.name)
                    this.object={
                        type:'meal',
                        txt:txt
                    }
                    this.sortData(this.object)
                }
            
        }
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap'); 
    .navbar-brand{font-family: 'Pacifico', cursive;}
    nav{background: linear-gradient(rgba(21, 32, 34, 0.938) 0%, rgba(42,77,79,1) 100%);}
    a:hover{color: rgba(218,165,32,1)!important;}
    input:focus{box-shadow: 0 0 3px 2px rgba(218,165,32,1)!important;}
</style>