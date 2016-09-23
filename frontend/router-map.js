export default {
	'/': {
		name: 'home',
		component: require('./project/home')
	},
	'/profile': {
		name: 'profile',
		component: require('./project/profile')
	},
	'/signup':{
		name: 'signup',
		component: require('./project/signup')
	},
	'/signin': {
		name: 'signin',
		component: require('./project/signin')
	}
}