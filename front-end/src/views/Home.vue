<template>
  <div class="home">
    <h1>Obsadenosť nemocničných lôžok (COVID-19)</h1>
    <hospital-stats :stats="hospBedsSKNow"></hospital-stats>
    <button @click="loadData">RELOAD</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HospitalStats from "@/components/HospitalStats";
import DataLoader from "@/modules/DataLoader"
export default {
  name: "Home",
  components: {
    HospitalStats,
  },

  data() {
    return {
      hospBedsSKNow: null
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    loadData(){
      DataLoader.getBedsSlovakia(this.dataSource).then(data => {
        this.hospBedsSKNow = data
      }).catch(err => console.log(err))

    },
  },

};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 3rem;
}
</style>