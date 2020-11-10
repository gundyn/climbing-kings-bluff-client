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
  $('#signed-in-user').text('Current user: ' + response.user.email)

  store.user = response.user

  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#new-climb-form').show()
  $('#see-all-climbs-form').show()
  $('#see-a-climb-form').show()
  $('#see-my-climbs-form').show()
  $('#signed-in-user').show()

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

const onSignOutSuccess = () => {
  $('#message').text('Sign out successful')

  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#signed-in-user').hide()
  $('#new-climb-form').hide()
  $('#see-all-climbs-form').hide()
  $('#see-all-climbs').hide()
  $('#climb-update-form').hide()

  $('#sign-up-form').show()
  $('#sign-in-form').show()

  $('#sign-in-form')[0].reset()
  $('#sign-up-form')[0].reset()
  $('#change-password-form')[0].reset()
}

const onSignOutFailure = () => {
  $('#message').text('Sign out failure, please try again!')
}

const onChangePasswordSuccess = (response) => {
  $('#message').text('Password change successful!')

  $('#sign-in-form')[0].reset()
  $('#sign-up-form')[0].reset()
  $('#change-password-form')[0].reset()
}

const onNewClimbSuccess = (response) => {
  $('#message').text('New climb added!')
  $('#see-all-climbs').hide()

  $('#new-climb-form')[0].reset()

  store.climb = response
}

const onNewClimbFailure = () => {
  $('#message').text('Failed to add new climb, try again!')
}

const onSeeAllClimbsSuccess = (response) => {
  $('#message').text('')
  $('#see-all-climbs').show()
  $('#climb-delete-form').show()

  const climbs = response.climbs

  $('#see-all-climbs').html('')
  // lets me display all climbs in the browser
  climbs.forEach(function (currentClimb) {
    const climbHTML = (`
      <h3>Name: ${currentClimb.name}</h3>
      <p>Grade: ${currentClimb.grade}</p>
      <p>Rating: ${currentClimb.rating}</p>
      <p>ID: ${currentClimb._id}</p>
      <br>

    <button class="climb-delete" type="button" data-climb-id=${currentClimb._id} value="Delete Climb!">Delete climb!</button>

    <button class="climb-update" type="click" data-climb-id=${currentClimb._id} value="Update Climb">Update climb!</button>
  `)
    $('#see-all-climbs').append(climbHTML)
  })
  // if currentUser === true if so add the buttons to the string
  const currentUser = store.user._id
  console.log('user: ', currentUser)

  const climbId = response
  console.log('climbId: ', climbId)
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
  $('#see-all-climbs').hide()
  $('#climb-delete-form').hide()
  $('#climb-update-form').hide()
}

const onDeleteFailure = () => {
  $('#message').text('Cannot delete this climb, you do not own this climb!')
}

const onUpdateSuccess = () => {
  $('#update-climb-message').text('You successfully updated the climb')

  $('#message').text('Climbs have changed! Click "Get all climbs" again to see all climbs.')

  $('#update-climb-message').addClass('success')

  setTimeout(() => {
    $('#update-climb-message').text('')
    $('#update-climb-message').removeClass('success')
  }, 5000)

  $('form').trigger('reset')
  $('#see-all-climbs').hide()
  $('#climb-delete-form').hide()
  $('#climb-update-form').hide()
}

const onUpdateFailure = () => {
  $('#message').text('Cannot update this climb, you do not own this climb!')
}

// const onShowClimbSuccess = (response) => {
//   console.log('response: ', response)
//
//   // print out myClimbs
//   const climbHTML = (`
//       <h3>Name: ${response.climb.name}</h3>
//       <p>Grade: ${response.climb.grade}</p>
//       <p>Rating: ${response.climb.rating}</p>
//       <p>ID: ${response.climb._id}</p>
//       <br>
//       `)
//   $('#see-my-climb').append(climbHTML)
//   $('form').trigger('reset')
// }
//
// const onShowClimbFailure = (response) => {
//   console.log(response)
//   $('#message').text('failed to get climb, please try again!')
// }

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
  onDeleteFailure,

  onUpdateSuccess,
  onUpdateFailure,

  // onShowClimbSuccess,
  // onShowClimbFailure,

  onSignOutSuccess,
  onSignOutFailure
}
