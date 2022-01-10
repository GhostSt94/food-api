<template>
  <li v-if="ingred!==''"><b>{{ingred}}</b> ({{measure}})</li>
</template>

<script>
export default {
    name:"Ingredient",
    props:{
        ingred:{
            type:String,
            required:true
        },
        measure:{
            type:String,
            required:true
        }
    }
}
</script>