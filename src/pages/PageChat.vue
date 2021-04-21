<template>
  <q-page class="flex column">
    <q-banner
    v-if="!otherUserDetails.online"
    class="bg-grey-4 text-center">
    {{ otherUserDetails.name }} is offline.
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from == 'me' ? userDetails.name : otherUserDetails.name"
        :text="[message.text]"
        :sent="message.from === 'me' ? true : false"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form @submit="sendMessage" class="full-width">
          <q-input
            v-model="newMessage"
            bg-color="white"
            outlined
            rounded
            label="Message"
            dense
          >
            <template v-slot:after>
              <q-btn round dense flat type="submit" color="white" icon="send" />
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import mixinOtherUserDetails from 'src/mixins/mixin-other-user-details.js'

export default {
  mixins: [mixinOtherUserDetails],
  data () {
    return {
      newMessage: ''
      // messages: [
      //   {
      //     text: 'Hey Jagarz, how are you?',
      //     from: 'me'
      //   },
      //   {
      //     text: 'Good thanks, Promise! How are you?',
      //     from: 'them'
      //   },
      //   {
      //     text: 'Pretty good!',
      //     from: 'me'
      //   }
      // ]
    }
  },
  computed: {
    ...mapState('store', ['messages', 'userDetails'])

  },
  methods: {
    ...mapActions('store', [
      'firebaseGetMessages',
      'firebaseStopGettingMessages',
      'firebaseSendMessage'
    ]),
    sendMessage () {
      // this.messages.push({
      this.firebaseSendMessage({
        message: {
          text: this.newMessage,
          from: 'me'
        },
        otherUserId: this.$route.params.otherUserId
      })
    }
  },
  mounted () {
    this.firebaseGetMessages(this.$route.params.otherUserId)
  },
  destroyed () {
    this.firebaseStopGettingMessages()
  }
}
</script>

<style scoped></style>
