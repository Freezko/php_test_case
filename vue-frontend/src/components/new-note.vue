<template>
	
	<form @submit.prevent="validateBeforeSubmit">
		<div class="form-group">
			<label for="username">User Name (цифры и буквы латинского алфавита) *</label>
			<input type="text" id="username" class="form-control" v-model="noteUsername" >

			<label for="email">E-mail</label>
			<input type="text" id="email" class="form-control" v-model="noteEmail">			


			<label for="content">Text *</label>
			<input type="text" id="content" class="form-control" v-model="noteContent" >
		</div>
		<ul class="errors-ul">
			<li v-for="error in errors">{{error}}</li>
		</ul>
		<div class="alert alert-info" role="alert">Поля, помеченные * обязательны для заполнения</div>


		<button class="btn btn-primary" type="submit">Submit</button>
	</form>

</template>


<script>
	import axios from 'axios';

	export default {
		data(){
			return {
				noteUsername: '',
				noteEmail: '',
				noteContent: '',
				errors: [],
      			formSubmitted: false
			}
		},
		methods: {
			validateBeforeSubmit(e) {
				this.errors = [];
				let emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    			let contentRegexp = /<[a-z][\s\S]*>/i;
    			let nameRegexp = /^[a-z0-9]+$/i;

				if(!this.noteContent || contentRegexp.test(this.noteContent)){
					this.errors.push('Content is required and should NO consist html tags!');
				}

				if(this.noteEmail.length>0 && !emailRegexp.test(this.noteEmail)){
					this.errors.push('Email should be correct email!');
				}

				if(!this.noteContent || !nameRegexp.test(this.noteUsername)){
					this.errors.push('Username is required and should be only alphanumeric format!');
				}


				if(this.errors.length==0){
					this.formSubmitted = true;
					this.onSubmitted();
				}
			},

			onSubmitted() {
					axios.post('http://127.0.0.1:8000/api/note', 
						{
							username: this.noteUsername,
							email: this.noteEmail,
							content: this.noteContent,
						})
						.then(
							(response) => {
								console.log(response);
								alert('Запись успешно добавлена!');
								this.noteUsername = '';
								this.noteEmail = '';
								this.noteContent = '';
							}
						)
						.catch(
							(error) => console.log(error)
						);

						this.formSubmitted = true;

					}
			}

		}
</script>	



<style>
	label{
		margin-top: 15px;
	}

	.errors-ul li{
		color:red;
		list-style: none;
	}


</style>