'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')
const store = require('./../store')

const onSignUp = (event) => {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = (event) => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onNewClimb = (event) => {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.newClimb(data)
    .then(ui.onNewClimbSuccess)
    .catch(ui.onNewClimbFailure)
}

const onSeeAllClimbs = (event) => {
  event.preventDefault()

  const data = store.user._id

  api.seeClimbs(data)
    .then(ui.onSeeAllClimbsSuccess)
    .catch(ui.onSeeAllClimbsFailure)
}

const onDeleteClimb = (event) => {
  event.preventDefault()

  // finds the id of the button to delete a climb
  const climbId = $(event.target).data('climb-id')

  api.deleteClimb(climbId)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}

// when you click the submit button on the update form
const onUpdateClimbForm = (event) => {
  event.preventDefault()

  // get the data from the update form
  const data = getFormFields(event.target)

  // the stored id from onUpdateClimb
  const id = store.id

  // pass both the form data and the stored id to api
  api.updateClimb(data, id)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

// when the update climb button is clicked
const onUpdateClimb = (event) => {
  event.preventDefault()

  // show the update form
  $('#climb-update-form').show()
  // grab the current climb id for update
  const id = $(event.target).data('climb-id')

  // store the id so we can pass it to onUpdateClimbForm
  store.id = id
}

// const onShowClimb = (event) => {
//   event.preventDefault()
//
//   const data = getFormFields(event.target)
//   console.log('form: ', data)
//
//   api.myClimbs(data)
//     .then(ui.onShowClimbSuccess)
//     .catch(ui.onShowClimbFailure)
// }

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onNewClimb,
  onSeeAllClimbs,
  onDeleteClimb,
  onUpdateClimb,
  // onShowClimb,
  onSignOut,
  onUpdateClimbForm
}
