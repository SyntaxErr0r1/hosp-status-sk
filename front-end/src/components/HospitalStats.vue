<template>
  <div class="stats-section">
    <h3 v-if="!stats" class="skeleton-line skeleton-animation"></h3>
    <h3 v-else-if="stats.region_info">{{stats.region_info.title}}</h3>
    <h3 v-else>Slovenská Republika</h3>
      <div class="card-list">
        <card
            title="Lôžka celkovo"
            :content="getOveralBedsString"
            description="Voľné/celkovo"
            ></card>
            <card
            title="Lôžka COVID celkovo"
            :content="getCovidBedsString"
            description="Voľné/celkovo"
            ></card>
            <card
            title="Lôžka COVID JIS"
            :content="stats ? stats.occupied_jis_covid : null"
            description="Obsadené"
            ></card>
            <card
            title="Lôžka COVID OAIM"
            :content="stats ? stats.occupied_oaim_covid : null"
            description="Obsadené"
            ></card>
            <card
            title="Lôžka COVID Ostatné"
            :content="stats ? stats.occupied_other_covid: null"
            description="Obsadené"
            ></card>
        </div>
        <h4 v-if="stats">Posledná aktualizácia: {{stats ? stats.updated_at : null}}</h4>
        <h4 v-if="!stats" class="skeleton-line skeleton-animation"></h4>
    </div>

</template>

<script>
import Card from '@/components/Card.vue'
export default {
  props: ["stats"],
  components: {Card},
  data(){
  return{
      
  }
  },
  computed:{
    getOveralBedsString(){
      const stats = this.stats
      if(!stats)
        return null
      return stats.free_all+'/'+stats.capacity_all
    },
    getCovidBedsString(){
      const stats = this.stats
      if(!stats)
      return null
      return stats.capacity_covid-(stats.occupied_jis_covid+stats.occupied_o2_covid+stats.occupied_oaim_covid+stats.occupied_other_covid)+'/'+stats.capacity_covid
    }
  }
}
</script>

<style lang="scss" scoped>
  @media screen and (max-width: 630px) {
    .card-list {
      flex-direction: column;
    }
    .card{
        flex-basis: 100%;
    }
    }
    .stats-section{
        //max-width: 1000px;
        margin: 0 auto;
        .card-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        .card{
            flex-basis: calc(100%/3 - 20px);
            box-sizing: border-box;
            margin: 10px;
        }
        }
    }
</style>

