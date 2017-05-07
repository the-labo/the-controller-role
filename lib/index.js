/**
 * Role controller for the-server
 * @module the-controller-role
 */
'use strict'

const TheRoleCtrl = require('./TheRoleCtrl')
const create = require('./create')

const lib = create.bind(this)

Object.assign(lib, {
  TheRoleCtrl,
  create
})

module.exports = lib
