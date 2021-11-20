<template>
  <div id="about">
    <Sidebar/>
    <div class="content">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar'
export default {
  components: { Sidebar }
}
</script>
<style scoped>
#about {
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
