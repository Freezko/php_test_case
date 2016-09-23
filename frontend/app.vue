<template>
	<div class="main-logo">
		<h1>Гостевая книга</h1>
	</div>
	<router-view></router-view>
</template>

<script>
export default {
  replace: false,
  data () {
    return {

    };
  }
};
</script>

<style lang="sass">

.main-logo {
	padding: 50px;
	h1 {
		text-align: center;
	}

}

</style>