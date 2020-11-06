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

  api.seeClimbs()
    .then(ui.onSeeAllClimbsSuccess)
    .catch(ui.onSeeAllClimbsFailure)
}

const onDeleteClimb = (event) => {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log('data:', data)
  api.deleteClimb(data)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onNewClimb,
  onSeeAllClimbs,
  onDeleteClimb
}
