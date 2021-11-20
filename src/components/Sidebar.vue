<template>
  <div id="sidebar">
    <div class="sidebar-header">
      <span>UserName</span>
    </div>
    <div class="sidebar-nav">
      <router-link to="/" class="nav-button text">Home</router-link>
      <router-link to="/about" class="nav-button text">About</router-link>
    </div>
    <div class="sidebar-footer text">
      <span>Company</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
#sidebar {
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
  /*height: 100%;*/
}
.sidebar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  font-size: 1.2rem;
  letter-spacing: 1.1rem;
  text-transform: uppercase;
  color: whitesmoke;
  border-bottom: 2px solid white;
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.sidebar-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  color: whitesmoke;
  border-top: 2px solid white;
}
.nav-button {
  display: flex;
  justify-content: center;
  align-items: center;
  /*height: 2em;*/
  padding: 1rem;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  user-select: none;
  background-color: var(--primary-color);
  /*border-radius: 15px;*/
  text-align: center;
  text-decoration: none;
}
.nav-button:hover {
  color: var(--secondary-color);
  background-color: var(--elements-color);
  /*border-radius: 15px;*/
}

.text {
  letter-spacing: 1.1rem;
  text-transform: uppercase;
  color: var(--secondary-color);
}

</style>
