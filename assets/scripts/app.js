'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./auth/events')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#new-climb-form').on('submit', events.onNewClimb)
  $('#see-all-climbs-form').on('submit', events.onSeeAllClimbs)
  $('#climb-delete-form').on('submit', events.onDeleteClimb)
  $('#climb-update-form').on('submit', events.onUpdateClimb)
  $('#see-my-climbs-form').on('submit', events.onSeeMyClimbs)
  $('body').on('click', '.climb-delete', events.onDeleteClimb)

  $('#see-my-climbs-form').hide()
  $('#climb-update-form').hide()
  $('#climb-delete-form').hide()
  $('#see-all-climbs-form').hide()
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#new-climb-form').hide()
})
