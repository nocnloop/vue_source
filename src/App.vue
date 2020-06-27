<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Dynamic</router-link>
      |
      <router-link to="/Brodcast">Brodcast</router-link>
      |
      <router-link to="/Form">Form</router-link>
      |
      <router-link to="/Bus">Bus</router-link>
      |
      <router-link to="/Slot">Slot</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  height: 30px;
  color: gray;
  font-size: 12px;
  border: 1px solid gray;
  border-radius: 2%;
  cursor: pointer;
}
</style>
