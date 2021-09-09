<template>
    <div class="card">
        <h3>{{title}}</h3>
        <div :class="{'content-box': (contentPercent || contentPercent === 0)}" >
            <h3 v-if="content || content === 0">{{content}}</h3>
            <h3 v-else class="skeleton-line skeleton-animation skeleton-200px"></h3>
            <h3 class=".card-percent">{{contentPercent}}</h3>
        </div>
        <h4>{{description}}</h4>
    </div>
</template>

<script>
export default {
    props: ["title","content","description","contentPercent"]
}
</script>

<style lang="scss" scoped>
.content-box{
    display: flex;
    justify-content: space-between;
    h3{
        font-size: 1.3em;
        margin: 0;
    }
}
.card{ 
    border: 2px solid gray;
    padding: .5rem 1.5rem;
    box-shadow: 0 1px 10px -1px #9b9b9b;
}
</style>