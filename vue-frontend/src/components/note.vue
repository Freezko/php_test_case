<template>
	<div class="panel panel-default">
		<div class="panel-heading">
			<div>
				<a href="#" @click.prevent='onUser' class="username-anchor">{{nt.username}}</a>
			</div>
		</div>
		<div class="panel-body">
			{{nt.content}}
		</div>
	</div>
</template>

<script>
	export default {
		props: ['nt'],
	
		methods: {
			onUser() {
				this.$emit('noteUser', this.nt.username)
			}
		}

	}


</script>

