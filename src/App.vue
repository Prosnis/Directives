<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="header">
    <div class="title">
      <div class="title-wrapper">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="220" height="220" />
        <div>
          <h1>Vue Directives</h1>
          <p>Research and Development</p>
        </div>
      </div>
      <nav class="links">
        <ul class="list">
          <li><RouterLink to="/" exact-active-class="active">home</RouterLink></li>
          <li><RouterLink to="/v-text" exact-active-class="active">v-text</RouterLink></li>
          <li><RouterLink to="/v-html" exact-active-class="active">v-html</RouterLink></li>
          <li><RouterLink to="/v-show" exact-active-class="active">v-show</RouterLink></li>
          <li><RouterLink to="/v-if" exact-active-class="active">v-if</RouterLink></li>
          <li><RouterLink to="/v-else-if" exact-active-class="active">v-else-if</RouterLink></li>
          <li><RouterLink to="/v-for" exact-active-class="active">v-for</RouterLink></li>
          <li><RouterLink to="/v-on" exact-active-class="active">v-on</RouterLink></li>
          <li><RouterLink to="/v-bind" exact-active-class="active">v-bind</RouterLink></li>
          <li><RouterLink to="/v-model" exact-active-class="active">v-model</RouterLink></li>
          <li><RouterLink to="/v-slot" exact-active-class="active">v-slot</RouterLink></li>
          <li><RouterLink to="/v-pre" exact-active-class="active">v-pre</RouterLink></li>
          <li><RouterLink to="/v-cloak" exact-active-class="active">v-cloak</RouterLink></li>
          <li><RouterLink to="/v-memo" exact-active-class="active">v-memo</RouterLink></li> 
        </ul>
      </nav>
    </div>
    <main>
      <RouterView /> 
    </main>
  </header>

</template>


<style scoped>

p {
  color: #fffff5db;
  font-size: 36px;
  margin: 0;
  margin-bottom: 20px;
  font-weight: 700;
}





.list li a:hover {
  color:#42d392;
}

.list{
  list-style-type: none;
  display: flex;
  gap: 5px;
  font-size: 26px;
  margin: 0;
  padding: 0;
  
}

.title {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}


.title h1 {
  color: #3DD68C;
  font-size: 56px;
  margin: 0;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.logo{
  filter: drop-shadow(0 0 4rem rgb(99, 250, 132));
  margin-right: 20px;
}

main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1080px;
  margin: auto;
  min-height: 50vh;
}



.title-wrapper{
  display: flex;
}

.links {
  border-bottom: 2px solid #3DD68C;
  padding: 10px;
  margin-bottom: 40px;
}





.list li a {
  text-decoration: none;
  color: rgba(255, 255, 245, 0.86); 
  padding: 5px;
  font-weight: 100;
  transition: color 0.3s ease; 
}


.list li a.router-link-active {
  color: #42b983; 
}



</style>
