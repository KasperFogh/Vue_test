<template>
  <div class="home">
  
  <div class="d-flex flex-row">
        <Login class="p-2"/>
    <Register class="p-2"/>
  </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

export default {
  name: 'Home',
  components: {
    Login,
    Register
  }
}
</script>
