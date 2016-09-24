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
		<input id="passowrd" type="password"  v-model="passowrd">
	</div>
	<button @click="createUser">Отправить</button>
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
  		let { email, name, password } = this;

  		this.$http.post('create-user',{
  			email,
  			name,
  			password
  		}).then(()=>{

  			consol.log(response);
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