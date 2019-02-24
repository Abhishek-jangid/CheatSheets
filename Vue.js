An essential feature all front-end frameworks must accomplish is rendering and updating dynamic data.
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js" defer></script> //used to add the vue frmwrk||should be added inside html head.
We use 'defer' keyword in script tag to make sure that web page is loaded and ready to hook up to vue before we actually load Vue.
Vue makes it easy to make a new app by exporting a class called Vue.
Vue constructor takes in only one object, called the options object.Each piece of information the Vue app needs to function is added to the options object as a key-value pair.
const app_name = new Vue({
                           key:value,
                        });
the first we have to select html elements as string and give it access to our vue app functionality. and this will be achieved as el:'#html_element_name',
To display dynamic information we need:
      1) A place to store the data we will be displaying.
      2)A syntax for displaying that information.
We can load all the data in html templates like we did in django {{ data key}} simple as that from the object in Vue object.
v-if :-> it will only display the HTML element it is on if the v-if statement returns true like:- 
        <button v-if="userIsLoggedIn">Log Out</button>
        <button v-if="!userIsLoggedIn">Log In</button>
v-for :-> v-for will iterate through every item in our .data's todoList array, create a variable called todo containing each succesive               array element, and create an li displaying each element in the list. Even if a new item is added to the list, the list will be             re-rendered instantly to display that new item.
          <li v-for="todo in todoList">{{ todo }}</li>
v-model :-> can be added to any form field and hooked up to our Vue app's data. Modifying the form field will then automatically modify               the specified Vue app data!
            <input v-model="username" />
