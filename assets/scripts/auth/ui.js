'use strict'

const store = require('./../store')

const onSignUpSuccess = (response) => {
  $('#message').text('Thanks for signing up for Climb Kings Bluff! ' + response.user.email)
  $('#sign-up-form')[0].reset()
  console.log('response ' + response)
}

const onSignUpFailure = () => {
  $('#message').text('Sign up failed, plaese try again!')
  $('#sign-up-form')[0].reset()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
