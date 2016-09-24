<template>

<div id="signin" class="form-wrapper">
  <form @submit.prevent="Login">
  	<div class="input-ctl">
  		<label for="email">Email</label>
  		<input type="email" id="email" v-model="email" required>
  	</div>
  	<div class="input-ctl">
  		<label for="passowrd">Пароль</label>
  		<input id="passowrd" type="password"  v-model="password" required>
  	</div>
  	<button type="submit">Отправить</button>
  </form>
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
  	Login(){

  		this.$http.post('login-user',{
  			email: this.email,
  			password: this.password
  		})
      .then((response)=>{

  			window.localStorage.setItem('token', response.data.token);

  			this.$http.get('get-auth-user').then((response)=>{

  				window.localStorage.setItem('user_id', response.data.user.id);
          window.location = '/';

  			})
  		},err=>{
        alert('Неверный пароль или email!')
      })
  	}
  }
};
</script>

<style lang="sass">
@import '../base/mixin';

#signin { 
  background: rgba(blue,0.5);
  @include center-block();
}



</style>