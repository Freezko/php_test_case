<template>

<div id="signup" class="form-wrapper">
	<div class="input-ctl">
		<label for="name">Имя</label>
		<input type="text" id="name" v-model="name">
	</div>
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
    	name: '',
    	password: ''
    };
  },
  methods:{
  	userCreate(){

  		this.$http.post('create-user',{
  			email: this.email,
  			name: this.name,
  			password: this.password
  		}).then(()=>{

  			this.$router.go({name: 'signin'});
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