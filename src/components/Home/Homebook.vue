<template>
    <div class="homeboookdiv">
        <img class="homebookimg" src="" alt="111">
        <p class="homebookname">{{bookname}}</p>
    </div>
</template>

<script>
    export default {
        name: "Homebook",
        data() {
            return {
                bookname: 123
            }
        },
    }
</script>

<style scoped>
    .homeboookdiv{
        height: 40px;
        width: 30px;
        margin: 5px;
        background: brown;
    }
    .homebookimg{
        height: 30px;
        width: 20px;
        background: black;
    }
    .homebookname{
        text-align: center;
        font-size: 10px;
    }
</style>