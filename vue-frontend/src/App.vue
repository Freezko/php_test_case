<template>
	<div id="app">

		<div class="container">
		<div class="header">
			<div class="row">
				<div class="col-xs-12">
					<router-link to="/">Все записи</router-link> |
					<router-link to="/new-note">Новая запись</router-link> 
				</div>
			</div>
		</div>	
			
			<div class="row">
				<div class="col-xs-12">
					<router-view></router-view>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {    
		data () {
			return {}
		}
	}
</script>

<style>
	#app{
	padding-top: 30px;
	}

	.header{
		padding-bottom: 20px;
	}

</style>
