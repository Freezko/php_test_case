<template>
	<div>
		<button class="btn btn-primary" @click="onGetNotes">Показать все записи</button>
		<hr>

		<app-note v-for="note in notes" :nt="note" @noteUser="onNoteUser($event)"></app-note>
	</div>
</template>

<script>
	import Note from './note.vue';
	import axios from 'axios';

	export default{
		data() {
			return {
				notes: []
			}
		},

		methods: {
			onGetNotes() {
				axios.get('http://localhost:8000/api/notes')
				.then(
					response => {
						this.notes = response.data.notes;
					}
				)
				.catch(
					error => console.log(error)
				);
			},

			onNoteUser(username) {
				//this.notes = this.notes.filter(note=>note.username == username);

				axios.get('http://localhost:8000/api/notes/user/'+username)
				.then(
					response => {
						this.notes = response.data.notes;
					}
				)
				.catch(
					error => console.log(error)
				);
			}
		},

		components: {
			'app-note' : Note
		} 
	}
</script>