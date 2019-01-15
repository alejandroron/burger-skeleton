<template>
  <div class="">
    <img id="completed" src="@/assets/Completed.png" class="image">
    <a class="buttons" :href='this.staringPage'>
      <button v-on:click="reload">START NEW ORDER</button>
    </a>
  </div>
</template>

<script>
var staringPage = "./#/";
    export default {
        name: 'OrderCompletedPage',
        data () {
          return {
            staringPage:staringPage
          }
        },
        methods:{
          reload:function(){
            window.location.reload();
          }
        }
    }
</script>

<style>
    .image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding-top: 30px;
        width: 40%;
    }
    .buttons {
      display: flex;
      flex-direction: row;
      margin-top: 40px;
      align-self: center;
      align-items: center;
      justify-content: center;
      height: 350px;
    }
</style>
