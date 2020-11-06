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
  $('#see-a-climb-form').show()
  $('#climb-delete-form').show()

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

  const climbs = response.climbs

  $('#see-all-climbs').html('')
  // lets me display all climbs in the browser
  climbs.forEach(function (currentClimb) {
    const climbHTML = (`
      <div data-climbId=${currentClimb._id}>
      <h3>Name: ${currentClimb.name}</h3>
      <p>Grade: ${currentClimb.grade}</p>
      <p>Rating: ${currentClimb.rating}</p>
      <button id="destroy-climb" class="climb-delete">Delete Climb!</button>
      ID: ${currentClimb._id}
      </div>
      <br>
      `)
    $('#see-all-climbs').append(climbHTML)
  })
}

const onSeeAllClimbsFailure = () => {
  $('#message').text('Failed to see all climbs, please try again!')
}

const onDeleteSuccess = () => {
  $('#delte-climb-message').text('Climb successfully deleted!')

  $('#message').text('Climbs have changed! Click "Get all climbs" again to see all climbs')

  $('#delte-climb-message').addClass('success')

  setTimeout(() => {
    $('#delte-climb-message').text('')
    $('#delte-climb-message').removeClass('success')
  }, 5000)

  $('form').trigger('reset')
}

const onDeleteFailure = () => {
  $('#message').text('Failed to delete a climb, please try again!')
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
  onSeeAllClimbsFailure,

  onDeleteSuccess,
  onDeleteFailure
}
