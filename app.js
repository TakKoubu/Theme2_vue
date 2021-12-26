const app = Vue.createApp({
  data() {
    return { text : '',enteredText: ''};
  },
  methods: {
    alertButton(){
      alert('clicked');
    },
    registeredUser(event){
      this.text = event.target.value;
    },
    enterText(){
      this.enteredText = this.enterText;
    },
  }
});

app.mount('#assignment');
