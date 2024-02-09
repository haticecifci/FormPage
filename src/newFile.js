export default (await import('vue')).defineComponent({
name: 'App',
components: {
İsAccept
},
methods: {
submitMyForm() {
this.user = {
file: '',
gender: '2',
name: '',
surname: '',
email: '',
country: 2,
adress: '',
hobbies: '2'
};
this.file = '';
},
onFileChange(event) {
console.log(event.target.files);
this.file = { name: event.target.files[0].name };
this.user.file = event.target.files[0];
},
getCountryNameById(id) {
return this.getCountries.find((item) => item.id === id).name;
}
},
data() {
return {
genderOptions: [{ id: 1, name: 'Women' }, { id: 2, name: 'Man' }],
hobbies: [{ id: 1, name: 'Futbol' }, { id: 2, name: 'Basketbol' }, { id: 3, name: 'Voleybol' }],
countries: [{ id: 1, name: 'Türkiye' }, { id: 2, name: 'Amerika' }, { id: 3, name: 'Almanya' }],
file: {},
user: {
name: '',
surname: '',
email: '',
country: 2,
adress: '',
hobbies: [2],
gender: 2,
file: '',
isAccept: true
}
};
},
computed: {
getCountries() {
return this.countries;
}
}
});
