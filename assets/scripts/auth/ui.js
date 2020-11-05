'use strict'

const store = require('./../store')

const onSignUpSuccess = (response) => {
  $('#message').text('Thanks for signing up for Climb Kings Bluff! ' + response.user.email)
  $('#sign-up-form')[0].reset()
}

const onSignUpFailure = () => {
  $('#message').text('Sign up failed, plaese try again!')
  $('#sign-up-form')[0].reset()
}

const onSignInSuccess = (response) => {
  $('#message').text('Sign in succesful! ' + response.user.email)

  store.user = response.user
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#start-new-game-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#games-played').show()
  $('#sign-in-form')[0].reset()
  $('#sign-up-form')[0].reset()
  $('#change-password-form')[0].reset()
}

const onSignInFailure = () => {
  $('#message').text('Sign in failed, please try again!')
  $('#sign-up-form')[0].reset()
}

const onChangePasswordSuccess = (response) => {
  $('#message').text('Password change successful!')
  $('#sign-in-form')[0].reset()
  $('#sign-up-form')[0].reset()
  $('#change-password-form')[0].reset()
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess
}
