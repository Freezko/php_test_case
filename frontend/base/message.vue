<template>
<div id="message">
	<div class="message-text">{{ message.text}}</div>
	<div class="message-username">{{ message.name}}</div>
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
	}
}


</style>