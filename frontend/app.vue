<template>
	<div class="navigation">
		<a v-link="{name: 'home'}" v-if="isAuth">Отзывы</a>
		<a v-link="{name: 'profile'}" v-if="isAuth">Профиль</a>
		<a href="#" v-if="isAuth">Выход</a>
		<a v-link="{name: 'signup'}" v-if="!isAuth">Регистрация</a>
		<a v-link="{name: 'signin'}" v-if="!isAuth">Вход</a>
	</div>
	<div class="main-logo">

		<h1>Гостевая книга</h1>
	</div>
	<router-view></router-view>
</template>

<script>
export default {
  replace: false,
  data () {
    return {
    	isAuth: window.isAuth
    };
  }
};
</script>

<style lang="sass">

.main-logo {
  padding: 50px;
  h1 {
	text-align: center;
  }

}
.navigation {
  position: fixed;
  text-align: right;
  width: 100%;
  font-size: 1.5rem;

  a {
  	padding: 3px;
  }
}


</style>