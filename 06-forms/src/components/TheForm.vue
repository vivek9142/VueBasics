<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <!-- with v-model we can reset the input and take control over it so it is
      preferred here -->
      <input id="user-name" name="user-name" type="text" v-model="userName"/>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <!-- the interesting thing of what you should be aware here is that v-model,
      if used on an input of type number  automatically fetches the user input
      and converts it from a string to a number of data type.By default, if you would 
      be using just JavaScript or if you're using refs and therefore the native JavaScript 
      object representing this input. By default, what's stored in the value is always a 
      string. It's an extra feature added by Vue and v-model that it sees 
      
      in refs you'll only get string as an type 

      Speaking off these modifiers, you might've seen it already, there are a couple of 
      other modifiers as well. The lazy modifier allows you to change how Vue updates the 
      bound property  If it does this on every keystroke or if for some inputs, it does 
      this at a lower frequency.Trim allows you to tell Vue that it should remove excess 
      white space at the beginning and end of the text that was entered.
      -->

      <input id="age" name="age" type="number" v-model="userAge" />
    </div>

    <!-- add select for referrer with v-model  -->
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <!-- select dropdown add v-model same name to every radio, initialize seelct as array
     and access in method -->
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-news" name="interest" value="news" type="checkbox" v-model="interest"/>
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" value="interest" type="checkbox" v-model="interest"/>
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" value="nothing" type="checkbox" v-model="interest"/>
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <!-- radio button add v-model same name to every radio and access in method -->
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" value="video" type="radio" v-model="how"/>
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" value="blogs" type="radio" v-model="how"/>
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" value="other" type="radio" v-model="how"/>
        <label for="how-other">Other</label>
      </div>
    </div>

    <!-- for single checkbox, you can intialize it as false -->
    <div class="form-control">
      <input type="checkbox" id="confirm-terms" name="confirm-terms" v-model="confirmTerms">
      <label for="confirm-terms">Confirm Terms</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
export default {
  data(){
    return{
      userName:'',
      userAge:null,
      referrer:'wom',
      interest:[],
      how:null,
      confirmTerms:false
    }
  },
  methods:{
    submitForm(){
      console.log('username '+this.userName);
      this.userName='';
      console.log('user age');
      console.log(this.userAge);
      console.log(31);
      this.userAge=null;
      console.log('referrer '+this.referrer);
      this.referrer = 'wom';
      console.log(this.interest);
      this.interest = [];
      console.log(this.how);
      this.how=null;
      console.log('confirm :'+this.confirmTerms);
      this.confirmTerms = false;
    }
  }
}
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>