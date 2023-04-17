<template>
  <div class="chatroom">
    <nav class="nav">
      <div class="nav-container">
        <p>Group Name</p>
      </div>
    </nav>
    <div class="chat-container">
      <q-scroll-area style="height: 100%; max-width: 100%">
        <q-chat-message
          v-for="(message, i) in messages"
          class="text-grey"
          :key="i"
          :name="message.name"
          :text="[message.text]"
          :avatar="message.name == 'Person One' ? Male : Female"
          :sent="message.name == 'Person One' ? true : false"
        />
      </q-scroll-area>
    </div>
    <form class="chatForm">
      <input v-model="text" type="text" placeholder="Enter your message..." />
      <button @click.prevent="sendChatText" type="submit">Send</button>
    </form>
  </div>
</template>



<script>
import Male from "../assets/images/male.png";
import Female from "../assets/images/female.png";
export default {
  name: "Chat",
  data() {
    return {
      text: "",
      messages: [
        {
          name: "Person One",
          text: " I've been really struggling lately, but I'm too ashamed to tell anyone about it",
        },
        {
          name: "Person two",
          text: " What's been going on? Maybe I can help",
        },
        {
          name: "Person One",
          text: " It's just that I have this mental illness and I feel like people will judge me if I tell them. I don't want them to think I'm weak or crazy.",
        },
        {
          name: "Person Two",
          text: "I understand how you feel, but mental illness is nothing to be ashamed of. It's just like any other health condition, like diabetes or asthma",
        },
        {
          name: "Person One",
          text: "I know, but it's different. People don't talk about mental illness the same way they talk about physical illnesses",
        },
        {
          name: "Person Two",
          text: "That's true, but things are starting to change. More and more people are speaking out about their mental health, and the stigma is slowly starting to fade.",
        },
        {
          name: "Person One",
          text: "I don't know. I just feel like people will see me differently if they know",
        },
        {
          name: "Person Two",
          text: " They might, but that's not necessarily a bad thing. If someone judges you or treats you differently because of your mental illness, that's on them, not on you. You don't have to hide who you are or what you're going through to please other people",
        },
        {
          name: "Person One",
          text: "  I guess you're right. It's just hard to open up about something so personal.",
        },
        {
          name: "Person Two",
          text: " I know it is, but it can also be really liberating. When you're able to talk openly about your mental health, you might find that you feel less alone and more supported",
        },
        {
          name: "Person One",
          text: "Okay, I'll think about it. Thanks for listening and for not judging me",
        },
      ],
      Male,
      Female,
    };
  },
};
</script>


<style scoped lang="scss">
.chatroom {
  margin: 0;
  box-sizing: 0;
  padding: 0;
  height: 65vh;
  .nav {
    background-color: whitesmoke;
    margin-top: 3px;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);

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

    p {
      color: rgba($color: #008000, $alpha: 0.5);
      font-size: 1.2em;
      transform: translateY(50%);
      font-weight: 600;
    }
  }
  .chat-container {
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
