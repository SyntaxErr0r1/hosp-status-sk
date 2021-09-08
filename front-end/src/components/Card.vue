<template>
    <div class="card">
        <h3>{{title}}</h3>
        <h3 v-if="content">{{content}}</h3>
        <h3 v-if="!content" class="skeleton-line skeleton-animation"></h3>
        <h4>{{description}}</h4>
    </div>
</template>

<script>
export default {
    props: ["title","content","description"]
}
</script>

<style lang="css" scoped>
    .card{ 
        border: 2px solid gray;
        padding: .5rem 1.5rem;
        box-shadow: 0 1px 10px -1px #9b9b9b;
    }
</style>