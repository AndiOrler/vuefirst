<template>
  <div >
    <h2>This is an about page</h2>

    <button @click="Test.foo()">test</button>
  </div>
</template>

<script setup lang="ts">
import { Test } from '@/data-access/test';
import { defineComponent } from 'vue'
// import { Test } from '../data-access/Test'

// function test() {
//   console.log("fooooo")

// }




</script>


<style>

</style>
