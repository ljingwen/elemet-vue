<template>
    <div>
        <Eheader/>
        <Eentry/>
        <Elist/>
    </div>
</template>
<script>
//头部组件
import Eheader from "../components/Eheader";
//entry
import Eentry from "../components/Eentry";
//elsit
import Elist from "../components/Elist";
export default {
    components: {
        Eheader,
        Eentry,
        Elist
    }
}
</script>
<style>

</style>

