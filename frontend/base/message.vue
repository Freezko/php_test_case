<template>
<div id="message">
	<div class="message-text">{{ message.text}}</div>
	<a class="message-username"
	   v-link="{name: 'profile', params: {user_id: message.user_id}}">
	{{ message.name}}</a>
</div>

</template>

<script>
export default {
  props:['message'],
  data () {
    return {

    };
  }
};
</script>

<style lang="sass">

#message {
	width: 100%;
	margin-bottom: 2px;
	box-shadow: 1px 1px 1px grey;
	padding: 4px;
	height: 100px;

	.message-text {
		font-size: 1.3rem;
	}

	.message-username {
		font-size: 1.5rem;
		float: right;
		background: rgba(grey, .2);
		padding: 4px;
	}
}


</style>