<template>
  <div class="">
    <img src="@/assets/Completed.png" class="image">
    <div id="finishMessage">ORDER COMPLETED!</div>
    <a :href='this.staringPage'>
      <div v-on:click="reload" class="buttonFinish">
        <p>START A NEW ORDER</p>
      </div>
    </a>
  </div>
</template>

<script>
  var staringPage = "./#/";
  export default {
    name: 'OrderCompletedPage',
    data() {
      return {
        staringPage: staringPage
      }
    },
    methods: {
      reload: function() {
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
    margin-top: 80px;
    width: 70%;
    max-width: 400px;
  }
  #finishMessage {
    margin-top: 20px;
    color: white;
    font-size: 50px;
    font-weight: bold;
    text-align: center;
  }
  .buttonFinish {
    cursor: pointer;
    /* Position */
    position: fixed;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    /* Visual properties */
    width: 300px;
    height: 40px;
    background-color: #FFA801;
    border-radius: 100px;
    filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2));
  }
  .buttonFinish p {
    text-align: center;
    line-height: 40px;
    color: white;
    font-size: 20px;
  }

  @media only screen and (max-width: 730px) {
  #finishMessage {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    font-size: 40px;
  }
}
</style>
