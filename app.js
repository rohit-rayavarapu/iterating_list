let vm = Vue.createApp({
  data() {
    return {
      people: [
        {
          name: "John",
          message: "Hello world!",
          age: "",
        },
        {
          name: "Rick",
          message: "I like pie.",
        },
        {
          name: "Amy",
          message: "Skydiving is fun!",
        },
      ],
    };
  },
  methods: {
    moveToBottom() {
      const element = this.people.shift();
      this.people.push(element);
    },
  },
}).mount("#app");
