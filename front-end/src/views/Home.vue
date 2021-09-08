<template>
  <div class="home">
    <h1>Obsadenosť nemocničných lôžok (COVID-19)</h1>
    <hospital-stats :stats="hospBedsSKNow"></hospital-stats>
    <button @click="loadData">RELOAD</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HospitalStats from "@/components/HospitalStats.vue";
export default {
  name: "Home",
  components: {
    HospitalStats,
  },

  data() {
    return {
      dataSource: {
        protocol: "http",
        host: "localhost:3000",
      },
      hospBedsSKNow: {
        oldest_reported_at: "2020-11-20 00:00:00",
        newest_reported_at: "2021-09-06 09:04:22",
        published_on: "2021-09-06",
        id: 2109060000,
        capacity_all: "LOADING",
        free_all: "LOADING",
        capacity_covid: 3003,
        occupied_jis_covid: 19,
        occupied_oaim_covid: 9,
        occupied_o2_covid: 64,
        occupied_other_covid: 4,
        updated_at: "2021-09-06 11:14:51",
      },
    };
  },

  mounted() {
    this.loadData();
  },

  methods: {
    loadData(){
      console.log("loading data");
      fetch(
        `${this.dataSource.protocol}://${this.dataSource.host}/hospital-beds/in-slovakia?updated_since=2021-09-05%2012%3A34%3A56`
      )
      .then(res => res.json()).then(hospitalBedsSK => {
        var hospBedsSKNowUpdated = hospitalBedsSK.page[0]; 
        this.hospBedsSKNow = hospBedsSKNowUpdated;
        console.log("data loaded");
      }).catch(err => {
        console.error(err);
      });
    },

  },

};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 3rem;
}
</style>