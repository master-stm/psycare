<template>
<div class="chatroom">

  <nav class="nav">
        <div class="nav-container">
          <p>Group Name</p>
        </div>
      </nav>
      <div class="chat-container">
<q-chat-message
v-for="(message,i) in messages" class="text-grey" :key="i"
        name="me"
        :text="[message]"
        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
        sent
      />
      </div>
        <form class="chatForm">
          <input v-model="text" type="text" placeholder="Enter your message...">
          <button @click.prevent="sendChatText" type="submit">Send</button>
        </form>
</div>

</template>



<script>
import Male from '../assets/images/male.png'
  import Female from '../assets/images/female.png'
export default{
    name: "Chat",
    data(){
return{
  text:'',
  messages:['hello there!','hi'],
  Male,
    Female
}
    },
    methods:{
      sendChatText(){
this.messages.push(this.text)
this.text = ''
      }
    }
}
</script>


<style scoped lang="scss">

.chatroom{
  margin: 0;
  box-sizing: 0;
  padding: 0;
  height: 65vh;
  .nav {
    background-color: whitesmoke;
    margin-top: 3px;
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.75);

    justify-content: center;
    align-items: center;
    height: 50px;

    top: 0;
    width: 90%;


    .nav-container {
  max-width: 1200px;
  width: 100%;
  align-items: center;
  padding: 0 20px;
}

p{
  color:rgba($color: #008000, $alpha: 0.5);
  font-size: 1.2em;
  transform: translateY(50%);
  font-weight: 600;

}
  }
  .chat-container{
    width: 100%;
    height: 82vh;
    margin: 1em auto;

  border-radius: 5px;
    background-color: whitesmoke;
  }

  .chatForm {
  display: flex;

    bottom: 0;
    width: 100%;

  }
  input[type="text"] {
  width: 100%;
  font-size: 16px;
  border: none;
  border-radius: 10px;
}

button[type="submit"] {
  padding: 10px;
  background-color: rgba($color: #008000, $alpha: 0.5);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
}
}








</style>
