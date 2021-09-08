<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
  padding: 2em;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      hospBedsSlovakia: {
        success: true,
        next_offset: 2004300000,
        page: [
          {
            oldest_reported_at: "2020-11-20 00:00:00",
            newest_reported_at: "2021-09-06 09:04:22",
            published_on: "2021-09-06",
            id: 2109060000,
            capacity_all: 24764,
            free_all: 9912,
            capacity_covi: 3003,
            occupied_jis_covid: 19,
            occupied_oaim_covid: 9,
            occupied_o2_covid: 64,
            occupied_other_covid: 4,
            updated_at: "2021-09-06 11:14:51",
          },
        ],
      },
    };
  },
};
</script>
