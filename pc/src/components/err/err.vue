<template>
 <div>
  <div class="ccc">您访问错了，请回到主页继续浏览</div>
  <div class="ccc" @click="back">返回</div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

     back(){
       
       this.$router.back()

     }
     
    

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
  
</style>