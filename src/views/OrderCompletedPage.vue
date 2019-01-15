<template>
<div class="wrapper" v-if="currentPage.length === 4">
<img id="completed" src="@/assets/Completed.png" class="image">
</div>
</template>

<script>
    export default {
        name: 'OrderCompletedPage',
        props: [
        'currentPage'
        ]
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
</style>
