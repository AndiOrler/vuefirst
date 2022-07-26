<template>
    <div class="nav">
        <h2>{{ welcome }}</h2>
        <ul class="nav-items">
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">About</RouterLink>
            </li>
        </ul>
    </div>



</template>

<script setup lang="ts">
let welcome = "hello my Friend :)"
</script>

<style scoped>
.nav {
    padding-top: 2em;
    padding-bottom: 4em;
}

.nav-items {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    display: inline;
    padding-right: 1em;
}
</style>