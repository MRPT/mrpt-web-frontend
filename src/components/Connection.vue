<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-for='connection in connection_list' :key='connection'>{{connection}} <input type="submit" :key='connection' value="connect" /></p>
  </div>
</template>

<script>
export default {
  name: 'Connection',
  data () {
    return {
      connection_list: ['localhost:8080', '192.168.1.5:1234']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
