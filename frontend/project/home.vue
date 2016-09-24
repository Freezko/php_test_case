<template>


<div class="send-message">
	<div class="home-message">
	 	<a v-link="{name: 'signup'}">Зарегистрируйтесь и сможете оставить отзыв</a>
	</div>
	<textarea name="" id="" cols="30" rows="5"></textarea>
	
</div>



</template>

<script>
export default {
  data () {
    return {

    };
  }
};
</script>

<style lang="sass">

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




</style>