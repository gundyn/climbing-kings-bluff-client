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
  // const token = store.user.token
  // console.log('events.js token ', token)
  const form = event.target

  const data = getFormFields(form)
  // do I need to put the token here somehow?

  api.newClimb(data)
    .then(ui.onNewClimbSuccess)
    .catch(ui.onNewClimbFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onNewClimb
}
