/**
 * Create a TheRoleCtrl instance
 * @function create
 * @param {...*} args
 * @returns {TheRoleCtrl}
 */
'use strict'

const TheRoleCtrl = require('./TheRoleCtrl')

/** @lends create */
function create (...args) {
  return new TheRoleCtrl(...args)
}

module.exports = create
