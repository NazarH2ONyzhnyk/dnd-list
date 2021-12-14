<template>
  <div class="relative bg-gray-900 min-h-screen overflow-hidden">

    <!-- Decoration -->
    <img src="@/assets/Circles.png" alt="circles decoration" class="absolute">
    <img src="@/assets/right-rect.png" alt="rect decoration" class="absolute right-0">

    <div class="relative">
      <Navbar/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
