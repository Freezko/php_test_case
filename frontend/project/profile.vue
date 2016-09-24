<template>

<div id="profile">
	<h1>Отзывы {{ user.name }}</h1>	
	<div class="messages">
		<message v-for="message in messages" :message="message"></message>
	</div>
</div>

</template>

<script>
import message from '../base/message';
export default {
  components: {
  	message
  },
  data () {
    return {
      user: '',
      messages: '',
    	isSelfPage: false
    };
  },
  ready(){
  	this.$http.get(`/get-user/${this.$route.params.user_id}`)
  	.then((res)=>{
  		this.user = res.data;

  	})
  	.then(()=>{
  	   this.$http.get(`/get-user-messages/${this.$route.params.user_id}`)
  	   .then(res=>{
  	   		this.messages = res.data.data; 
  	   })
  	});
  }
};
</script>

<style lang="sass">
#profile {
	h1 {
		text-align: center;
	}


}


</style>