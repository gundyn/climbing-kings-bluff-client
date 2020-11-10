'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./auth/events')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#new-climb-form').on('submit', events.onNewClimb)
  $('#see-all-climbs-form').on('submit', events.onSeeAllClimbs)
  $('#climb-delete-form').on('submit', events.onDeleteClimb)
  $('body').on('click', '.climb-delete', events.onDeleteClimb)
  $('body').on('click', '.climb-update', events.onUpdateClimb)
  $('#climb-update-form').on('submit', events.onUpdateClimbForm)
  // $('#show-climb-form').on('submit', events.onShowClimb)

  $('#signed-in-user').hide()
  $('#see-my-climbs-form').hide()
  $('#climb-update-form').hide()
  $('#climb-delete-form').hide()
  $('#see-all-climbs-form').hide()
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#new-climb-form').hide()
})
