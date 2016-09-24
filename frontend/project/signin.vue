<template>

<div id="signin" class="form-wrapper">
	<div class="input-ctl">
		<label for="email">Email</label>
		<input type="text" id="email" type="email">
	</div>
	<div class="input-ctl">
		<label for="passowrd">Пароль</label>
		<input type="text" id="passowrd">
	</div>
	<button>Отправить</button>
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
@import '../base/mixin';

#signin { 
  background: red;
  @include center-block();
}



</style>