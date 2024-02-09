<template>
  
  <div class="h-screen w-full p-20 flex gap-8">
    <div class="p-6 rounded-md shadow-lg bg-white w-1/2 border border-solid border-gray-600">
      <!-- <p>User Info: {{ user }}</p>
      <p>User Ülke: {{ getCountryNameById(user.country) }}</p> -->


        <form @submit.prevent="submitMyForm">
        <div class="mb-4 flex flex-col">
          <label for="nameInput" class="text-gray-500 text-xs mb-2">Name</label>
          <input id="nameInput" v-model="user.name"
          :class="uservalidations.name?'isError':''"
          class="block w-full font-normal text-base text-gray-700 bg-white rounded border border-solid border-gray-400 transition ease-in outline-none px-3 py-1 m-0 focus:text-gray-900 focus:border-blue-600 placeholder-gray-400 placeholder:text-xs"
          placeholder="John"
          
          >
        </div>

        <div class="mb-4 flex flex-col">
          <label for="surnameInput" class="text-gray-500 text-xs mb-2">Surname</label>
          <input id="surnameInput" v-model="user.surname"
          :class="uservalidations.surname?'isError':''"
          class="block w-full font-normal text-base text-gray-700 bg-white rounded border border-solid border-gray-400 transition ease-in outline-none px-3 py-1 m-0 focus:text-gray-900 focus:border-blue-600 placeholder-gray-400 placeholder:text-xs"
          placeholder="Doe"
          
          >
        </div>

        <div class="mb-4 flex flex-col">
          <label for="emailInput" class="text-gray-500 text-xs mb-2">Email</label>
          <input id="emailInput" type="email" v-model="user.email"
          :class="uservalidations.email?'isError':''"
          class="block w-full font-normal text-base text-gray-700 bg-white rounded border border-solid border-gray-400 transition ease-in outline-none px-3 py-1 m-0 focus:text-gray-900 focus:border-blue-600 placeholder-gray-400 placeholder:text-xs"
          placeholder="abc@mail.com"
          
          >
        </div>

        <div class="mb-4 flex flex-col">
          <label for="countryInput" class="text-gray-500 text-xs mb-2">Country</label>
          <select id="countryInput" class="block w-full font-normal text-base text-gray-700 bg-white rounded border border-solid border-gray-400 transition ease-in outline-none px-3 py-1 m-0 focus:text-gray-900 focus:border-blue-600 placeholder-gray-400 placeholder:text-xs">
            <option v-for="item in getCountries" :key="item.id" :value="item.id">{{ item.name }}</option>
          </select>
        </div>

        <div class="mb-4 flex flex-col">
          <label for="nameInput" class="text-gray-500 text-xs mb-2">Adress</label>
          <textarea v-model="user.adress"
          :class="uservalidations.adress?'isError':''" id="adressInput" class="block w-full font-normal text-base h-24 text-gray-700 bg-white rounded border border-solid border-gray-400 transition ease-in outline-none px-3 py-1 m-0 focus:text-gray-900 focus:border-blue-600 placeholder-gray-400 placeholder:text-xs"
          placeholder="Adress"></textarea>
        </div>

        <div class="mb-4 flex flex-col">
           <div class="text-gray-500 text-xs mb-2">Hobies</div>   
           <div class="flex gap-8">

            <div class="text-xs flex" v-for="item in hobbies" :key="item.id">
            <input type="checkbox" v-model="user.hobbies" :value="item.id" class="h-4 w-4 mr-2 rounded border-gray-400 focus:text-blue-600">{{item.name}}
           </div> 
          </div>    
        </div>

        <div class="mb-4 flex flex-col">
           <div class="text-gray-500 text-xs mb-2">Gender</div>   
           <div class="flex gap-8">
            <div class="text-xs flex" v-for="item in genderOptions" :key="item.id">
              <input type="radio" :id="item.name" :value="item.id" v-model="user.gender" name="gender"  class="h-4 w-4 mr-2 rounded border-gray-400 focus:text-blue-600">
              <label :for="item.name">{{item.name}}</label>
           </div>
          </div>    
        </div>

        <div class="mb-4 flex item-center">
          <input  @change="onFileChange" type="file" hidden ref="myFileInput">
          <button @click="$refs.myFileInput.click()"
          :class="uservalidations.file?'isError':''" type="button" class="px-4 py-2 text-gray-700 font-bold rounded outline-none border border-gray-400 leading-3 shadow-md w-max duration-150 ease-in-out focus:shadow-lg"
          >{{file?.name?'Dosya değiştir':'Dosya Seç'}}</button>
          <span v-if="file?.name" class="ml-2 text-sm text-green-500">{{ file.name }}</span>
        </div>
       

        <button type="submit"
        class="px-4 py-2 bg-blue-700 text-white text-xs w-full font-bold rounded uppercase shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out focus:bg-blue-700 focus:shadow-lg "
        >Gönder</button>  

      </form>
    </div>


    <div class="p-6 rounded-md shadow-lg bg-white w-1/2 border border-solid border-gray-600">
      <DynamicInput></DynamicInput>  
    </div> 
 

    <div class="p-6 rounded-md shadow-lg bg-white w-1/2 border border-solid border-gray-600">
      <p>User Info: {{ user }}</p>
      <p>User Ülke: {{ getCountryNameById(user.country) }}</p>

    </div>
  </div> 
</template>

<script>

import DynamicInput from '@/components/DynamicInput.vue'

export default {
  name: 'App',
  components:{DynamicInput},
  methods:{
    validateData(){
      const obj={
        name:this.user.name.trim()==="",
        surname:this.user.surname.trim()==="",
        email:this.user.email.trim()==="",
        adress:this.user.adress.trim()==="",
        file:this.user.file ? this.user.file.name?.trim()==="":true
      }
  
      return obj
      
    },
    submitMyForm(){
      const validationResult=this.validateData();
      this.uservalidations=validationResult
      if(Object.values(validationResult).includes(true)){
        alert("Form Geçersiz")
      }
      this.user={
        file:'',
        gender:'2',
        name:'',
        surname:'',
        email:'',
        country:2,
        adress:'',
        hobbies:'2',
        
      }
      this.file=''
    },
    onFileChange(event){
      console.log(event.target.files)
      this.file={name:event.target.files[0].name}
      this.user.file=event.target.files[0]
    },
    getCountryNameById(id){
      return this.getCountries.find((item)=>item.id===id).name
    }
  },
  data(){
    return{
      genderOptions:[{id:1,name:'Women'},{id:2,name:'Man'}],
      hobbies:[{id:1,name:'Futbol'},{id:2,name:'Basketbol'},{id:3,name:'Voleybol'}],
      countries:[{id:1,name:'Türkiye'},{id:2,name:'Amerika'},{id:3,name:'Almanya'}],
      file:{},
      uservalidations:{
        name:false,
        surname:false,
        email:false,
        adress:false,
        file:false
      },
      user:{
        name:'',
        surname:'',
        email:'',
        country:2,
        adress:'',
        hobbies:[2],
        gender:2,
        file:'',
       
      }
    }
  },
   computed:{
    getCountries(){
      return this.countries
    }
   }
  
}
</script>

<style>

.isError{
  @apply border-red-500;
  border-color: rgb(239 68 68 / var(--tw-border-opacity)) !important;
}

.isError:focus{
  @apply border-red-500;
}

.isError:hover{
  @apply border-red-700;
}

</style>
