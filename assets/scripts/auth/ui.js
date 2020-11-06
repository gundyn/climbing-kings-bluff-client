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

  store.user = response.user

  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#new-climb-form').show()
  $('#see-all-climbs-form').show()

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

  $('#new-climb-form')[0].reset()

  store.climb = response
}

const onNewClimbFailure = () => {
  $('#message').text('Failed to add new climb, try again!')
}

const onSeeAllClimbsSuccess = (response) => {
  $('#message').text('')
  console.log('onSeeAll response is: ', response)

  const climbs = response.climbs

  $('#see-all-climbs').html('')

  climbs.forEach(function (currentClimb) {
    const climbHTML = (`
      <h3>Name: ${currentClimb.name}</h4>
      <p>Grade: ${currentClimb.grade}</p>
      <p>Rating: ${currentClimb.rating}</p>
      <br>
      `)
    $('#see-all-climbs').append(climbHTML)
  })
}

const onSeeAllClimbsFailure = () => {
  $('#message').text('Failed to see all climbs, please try again!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onNewClimbSuccess,
  onNewClimbFailure,
  onSeeAllClimbsSuccess,
  onSeeAllClimbsFailure
}
