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

const onUpdateClimb = (event) => {
  event.preventDefault()
  console.log('event: ', event)
  console.log('event.target: ', event.target)

  const data = getFormFields()
  console.log('data: ', data)

  const id = $(event.target).data('climb-id')
  console.log('id: ', id)

  api.updateClimb(data, id)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onSeeMyClimbs = (event) => {
  event.preventDefault()

  const data = store.user._id

  api.myClimbs(data)
    .then(ui.onSeeMyClimbsSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onNewClimb,
  onSeeAllClimbs,
  onDeleteClimb,
  onUpdateClimb,
  onSeeMyClimbs
}
