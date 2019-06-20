<template>
  <div>
    <router-view></router-view>
    <Efooter/>
  </div>
</template>


<script>
//底部组件
import Efooter from "../../components/Efooter";
export default {
  components: {
    Efooter,

    
  }
};
</script>
<style >
a{text-decoration: none;}
</style>

