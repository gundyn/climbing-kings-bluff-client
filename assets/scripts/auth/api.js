'use strict'

const config = require('./../config')
const store = require('./../store')

const signUp = (data) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const newClimb = (data) => {
  return $.ajax({
    url: config.apiUrl + '/climbs',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const seeClimbs = (data) => {
  return $.ajax({
    url: config.apiUrl + '/climbs',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const deleteClimb = (climbId) => {
  console.log('data:', climbId)
  return $.ajax({
    url: config.apiUrl + '/climbs/' + climbId,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateClimb = (data, id) => {
  console.log('api data: ', data)
  console.log('api id: ', id)
  return $.ajax({
    url: config.apiUrl + '/climbs/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const myClimbs = (data) => {
  return $.ajax({
    url: config.apiUrl + '/climbs/',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  newClimb,
  seeClimbs,
  deleteClimb,
  updateClimb,
  myClimbs
}
