<template>
    <div class="homeboookdiv" @click="routeTo()">
        <img class="homebookimg" :src="data.pic" alt="111">
        <p class="homebookname">{{data.title}}</p>
    </div>
</template>

<script>
    export default {
        name: "Homebook",
        props:{
            data:{

            }
        },
        data() {
            return {
                bookname: 123
            }
        },
        methods:{
            routeTo() {
                this.$router.push('/chapterList/' + this.data.title + '/' + this.data.id)
            }
        }
    }
</script>

<style scoped>
    .homeboookdiv{
        /*height: 110px;*/
        width: 70px;
        margin: 5px;
        background: #ff6767;
    }
    .homebookimg{
        height: 90px;
        width: 70px;
        background: black;
    }
    .homebookname{
        text-align: center;
        font-size: 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>