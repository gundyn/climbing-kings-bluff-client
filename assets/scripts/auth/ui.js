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
  $('#message').text('Sign in successful! ' + response.user.email)

  // I can see the token here in the user object
  store.user = response.user
  console.log('sign in stored token ', store.user.token)

  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#new-climb-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
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

const onNewClimbSuccess = (response) => {
  $('#message').text('New climb added!')
  // $(store.user.token).data()
}

const onNewClimbFailure = () => {
  $('#message').text('Failed to add new climb, try again!')
  console.log('fail token ', store.user.token)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onNewClimbSuccess,
  onNewClimbFailure
}
