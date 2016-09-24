<template>

<div id="signup" class="form-wrapper">
	<div class="input-ctl">
		<label for="email">Email</label>
		<input type="email" id="email" v-model="email">
	</div>
	<div class="input-ctl">
		<label for="passowrd">Пароль</label>
		<input id="passowrd" type="password"  v-model="password">
	</div>
	<button @click="userCreate">Отправить</button>
</div>

</template>

<script>
export default {

  data () {
    return {
    	email: '',
    	password: ''
    };
  },
  methods:{
  	userCreate(){

  		this.$http.post('login-user',{
  			email: this.email,
  			password: this.password
  		}).then((response)=>{

  			window.localStorage.setItem('token', response.data.token);

  			this.$http.get('get-user').then((response)=>{

  				window.localStorage.setItem('user_id', response.data.user.id);
          window.location = '/';

  			})
  		})
  	}
  }
};
</script>

<style lang="sass">
@import '../base/mixin';

#signup { 
  background: red;
  @include center-block();
}



</style>