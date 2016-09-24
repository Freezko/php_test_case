<template>

	<div class="pagination">
		<a @click="paginatePrev" v-if="prevPage">назад</a>
	 	<a @click="paginateNext" v-if="nextPage">вперед</a>
	</div>

	<div class="messages">
		<div v-for="message in messages">
			{{ message.text }}
		</div>
	</div>

	<div class="send-message">
		<div class="home-message" v-if="!isAuth">
		 	<a v-link="{name: 'signup'}">Зарегистрируйтесь и сможете оставить отзыв</a>
		</div>
		<form v-if="isAuth" @submit.prevent>
			<textarea name="" id="" cols="30" rows="5" v-model="text"></textarea>
			<button @click="sendMessage">Отправить</button>
			
		</form>
	</div>

</template>

<script>
export default {
  data () {
    return {
    	text: '',
    	messages: [],
    	nextPage: '',
    	prevPage: '',
    	logOut: '',
    	isAuth: window.isAuth
    };
  },
  ready(){
  	this.getMessages();

  },
  methods:{
  	getMessages(){

	  	return this.$http.get('all-messages').then((res)=>{

	  		if(res.data.data){

		  		this.messages = res.data.data;

		  		this.prevPage =	res.data.prev_page_url ? 
			  		res.data.prev_page_url.replace(/http:\/\/php-case.local\//, '') : "";

			  	this.nextPage = res.data.next_page_url ? 
					res.data.next_page_url.replace(/http:\/\/php-case.local\//, '') : "";
	
	  		}
	  	});	

  	},
  	paginateNext(){

  		this.$http.get(this.nextPage).then((res)=>{
	  		this.messages = res.data.data;

	  		this.prevPage =	res.data.prev_page_url ? 
		  		res.data.prev_page_url.replace(/http:\/\/php-case.local\//, '') : "";

		  	this.nextPage = res.data.next_page_url ? 
				res.data.next_page_url.replace(/http:\/\/php-case.local\//, '') : "";

  		});
  	},
  	paginatePrev(){

  		this.$http.get(this.prevPage).then((res)=>{
	  		this.messages = res.data.data;

	  		this.prevPage =	res.data.prev_page_url ? 
		  		res.data.prev_page_url.replace(/http:\/\/php-case.local\//, '') : "";

		  	this.nextPage = res.data.next_page_url ? 
				res.data.next_page_url.replace(/http:\/\/php-case.local\//, '') : "";

  		});
  	},
  	sendMessage(){

  		this.$http.post('write-message',{
	  		text: this.text,
	  		user_id: window.userId
	  	}).then(res=>{
			this.getMessages();
  		})
  	}
  }
};
</script>

<style lang="sass">
.pagination {
	text-align: center;
	font-size: 1.4rem;
	a {
		cursor: pointer;
	  	padding: 4px 10px 4px 10px;
		&:hover {
			background: rgba(grey,0.2);
		}
	}
}
.send-message {
	width: 500px; 
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);

	textarea {
		//padding: 10px;
		width: 100%;
		font-size: 2rem;
	}
	.home-message {
		margin-top: 100px;
		margin-bottom: 100px;
		font-size: 1.4rem;
		text-align: center;
		cursor: pointer;
	}

}

.messages {
	max-width: 500px;
	margin: 0 auto;
}


</style>