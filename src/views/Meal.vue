<template>
    <div class="container pt-3">
        <!-- <h3 class="text-center">{{getSelectedMeal.strMeal}}</h3>
        <div class="row mt-4 mb-2">
            <div class="col-lg-4 col-md-6 p-3 text-center">
                <img :src="getSelectedMeal.strMealThumb" alt="" height="300" width="300" class="rounded">
            </div>
            <div class="col-lg-4 col-md-6 p-4">
                <h6>Catégorie: <a :href="`/categories/${getSelectedMeal.strCategory}`" class="ms-2 text-secondary">{{getSelectedMeal.strCategory}}</a></h6>
                <h6>Tags: <span class="ms-2 text-secondary">{{getSelectedMeal.strTags}}</span></h6>
                <h6>Aréa: <span class="ms-2 text-secondary">{{getSelectedMeal.strArea}}</span></h6>
                <h6>Ingrédients: </h6>
                <ul class="mt-4">
                    <Ingredient :ingred="getSelectedMeal.strIngredient1" :measure="getSelectedMeal.strMeasure1" />
                    <Ingredient :ingred="getSelectedMeal.strIngredient2" :measure="getSelectedMeal.strMeasure2" />
                    <Ingredient :ingred="getSelectedMeal.strIngredient3" :measure="getSelectedMeal.strMeasure3" />
                    <Ingredient :ingred="getSelectedMeal.strIngredient4" :measure="getSelectedMeal.strMeasure4" />
                    <Ingredient :ingred="getSelectedMeal.strIngredient5" :measure="getSelectedMeal.strMeasure5" />
                    <Ingredient :ingred="getSelectedMeal.strIngredient6" :measure="getSelectedMeal.strMeasure6" />
                    <Ingredient :ingred="getSelectedMeal.strIngredient7" :measure="getSelectedMeal.strMeasure7" />
                    <Ingredient :ingred="getSelectedMeal.strIngredient8" :measure="getSelectedMeal.strMeasure8" />
                    <Ingredient :ingred="getSelectedMeal.strIngredient9" :measure="getSelectedMeal.strMeasure9" />
                    <Ingredient :ingred="getSelectedMeal.strIngredient10" :measure="getSelectedMeal.strMeasure10" />
                </ul>
            </div>
            <div class="col-lg-4 text-center">
                <h6>Instructions: </h6>
                <p class="mt-4">{{getSelectedMeal.strInstructions}}</p>
                <a class="text-secondary pb-4" target="blank" :href="getSelectedMeal.strYoutube"><i class="fab fa-youtube fa-2x"></i></a>
            </div>
        </div> -->
        <MealView :getSelectedMeal="getSelectedMeal"/>
    </div> 
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MealView from "../components/MealView.vue";

export default {
    name:'Meal',
    components:{
        MealView
    },
    data(){
        return({
            id:this.$route.params.id
        })
    },
    computed:mapGetters(['getSelectedMeal']),
    methods:mapActions(['fetchSelectedMeal']),
    created(){
        this.fetchSelectedMeal(this.$route.params.id)
    }
}
</script>

<style>
    /* ul{list-style-type: none;}
    b{font-style: italic;} */
</style>