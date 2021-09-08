<template>
  <div class="home">
    <h1>Obsadenosť nemocničných lôžok (COVID-19)</h1>
    <hospital-stats :stats="hospBedsSKNow"></hospital-stats>
    <h3>Zoznam krajov</h3>
    <ul class="region-list">
        <!-- <li><a href="#ba-region">BA</a></li>
        <li><a href="#ba-region">TA</a></li>
        <li><a href="#ba-region">TC</a></li>
        <li><a href="#ba-region">NI</a></li>
        <li><a href="#ba-region">ZI</a></li>
        <li><a href="#ba-region">BC</a></li>
        <li><a href="#ba-region">PV</a></li>
        <li><a href="#ba-region">KI</a></li> -->
        <li><a v-for="region in hospBedsRegions" v-bind:key="region.id" v-bind:href="'#region_'+region.id">{{region.region_info.title}}</a></li>
    </ul>
    <hospital-stats v-for="region in hospBedsRegions" v-bind:key="region.id" v-bind:id="'region_'+region.id" :stats="region" ></hospital-stats>
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
      hospBedsSKNow: null,
      hospBedsRegions: null,
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    loadData(){
      DataLoader.getBedsSlovakia(this.dataSource).then(data => {
        this.hospBedsSKNow = data
      }).catch(err => console.error(err))
      
      DataLoader.getBedsRegions(this.dataSource).then(data => {
        this.hospBedsRegions = data
      }).catch(err => console.error(err))

    },
  },

};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 3rem;
}
.region-list{
    li {
        margin-right: 10px;
        padding-left: 10px;
        list-style: none;
        display: inline-block;
        border-left: 1px solid black;
    }
}
</style>