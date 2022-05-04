<template>
  <div class="user-page flex w-full">
    <h1>User Page</h1>
    <ul style="display: flex">
      <li
        v-for="user in state.users.data"
        :key="user.id"
        style="margin: 0 2rem"
      >
        <div><img :src="user.avatar" alt="" /></div>
        {{ user.first_name }}
      </li>
    </ul>
    <button @click="prev" :disabled="state.users.page == 1">Prev</button>
    <button @click="next" :disabled="state.users.page == 2">Next</button>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "../plugins/axios";
export default {
  setup() {
    //data users akan disimpan disini
    const state = reactive({
      users: {},
    });
    //ketika pertama dimuat, akan langsung mengambil data API
    onMounted(async () => {
      const { data } = await axios.get(`/users`);
      state.users = data;
    });
    //method untuk button next
    async function next() {
      const { data } = await axios.get(`/users?page=2`);
      state.users = data;
    }
    //method untuk button previous
    async function prev() {
      const { data } = await axios.get(`/users?page=1`);
      state.users = data;
    }
    //semua variable dan method harus kita return agar bisa dipakai
    return {
      state,
      next,
      prev,
    };
  },
};
</script>