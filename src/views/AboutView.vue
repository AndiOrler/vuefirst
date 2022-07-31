<template>
  <div>
    <h2>This is an about page</h2>
    <br>
    <div style="text-align: center">
      <ul class="user-list">
        <li v-for="user in obj.users" :key="user.ID">
          {{ user.Name }}
        </li>
      </ul>
    </div>
    <br>
    <br>
    <h3>{{ count }}</h3>


    <br>
    <button @click="countUp" style="margin-right: 0.5em">count</button>
    <button @click="reset">reset</button>

  </div>
</template>

<script setup lang="ts">
import { UserAccessService } from '@/data-access/test';
import type { User } from '@/types/types';
import { reactive } from 'vue'
import { ref } from 'vue'

let users: User[] = [];

let obj = reactive({
  users
})

let userSer = UserAccessService;


userSer.fetchUsers()
  .then(res => obj.users = res);


let count = ref(1);

function countUp() {
  count.value++;
}

function reset() {
  count.value = 1;
}

</script>


<style scoped>
.user-list {
  list-style: none;
  padding-inline-start: 0;
  display: inline-block;
  text-align: left;  
}
</style>
