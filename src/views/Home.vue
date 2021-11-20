<template>
  <div id="home">
    <Sidebar/>
    <div class="content">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  name: 'Home',
  components: {
    Sidebar
  }
}
</script>
<style scoped>
#home {
  display: grid;
  grid-template-columns: 30% 70%;
  height: 100%;
  width: 100%;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
