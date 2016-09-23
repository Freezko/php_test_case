export default {

	'/': {
		name: 'home',
		component: require('./project/home')
	},
	'/signup':{
		name: 'signup',
		component: require('./project/signup')
	},
	'/signin': {
		name: 'signin',
		component: require('./project/signin')
	},
	'/profile': {
		name: 'profile',
		require: require('./project/profile')
	}

}