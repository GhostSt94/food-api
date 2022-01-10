<template>
<a :href="`/meal/${meal.idMeal}`">
    <div class="card shadow pt-1">
        <img :src='meal.strMealThumb' class="card-img-top" :alt="meal.strMealThumb">
        <div class="card-body">
            <div class="card-title mt-1">
                <h5><i>{{meal.strMeal}}</i></h5>
            </div>
        </div>
    </div>
</a>
</template>

<script>
export default {
    name:'MealCard',
    props:{
        meal:{
            type:Object,
            require:true
        }
    }
}
</script>

<style scoped>
    .card-body{min-height: 100px;}
    a{text-decoration: none;color: black;}
    a:hover{color: rgba(218,165,32,1);}
</style>