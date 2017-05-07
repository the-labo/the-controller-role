/**
 * Mix up controller class with sign check feature
 * @function mixRoleCheck
 * @param {function} BaseClass
 * @param {string[]} roleCodes - Role codes
 * @param {Object} [options={}] - Optional settings
 * @param {string[]} [options.only=null] - Action names to apply.
 * @returns {function} Mixed class
 */
'use strict'

const { USER_SESSION_KEY } = require('the-controller-sign')
const {
  TheUnauthorizedError,
  TheForbiddenError
} = require('the-error')

/** @lends mixRoleCheck */
function mixRoleCheck (BaseClass, roleCodes, options = {}) {
  let { only = null } = options
  if (only && only.length === 0) {
    console.warn('You are passing an empty array to `only`, which will never match any action')
  }
  class RoleCheckMixed extends BaseClass {
    static async beforeInvocation (invocation) {
      if (super.beforeInvocation) {
        await super.beforeInvocation(invocation)
      }
      let { target, action } = invocation
      let skip = only && !only.includes(action)
      if (skip) {
        return
      }
      let user = target.session[ USER_SESSION_KEY ]
      if (!user) {
        throw new TheUnauthorizedError(`Sign in required for action: "${action}"`)
      }
      let ok = user.roles.some((role) => roleCodes.includes(role.code))
      if (!ok) {
        throw new TheForbiddenError('Access denied')
      }
    }
  }
  return RoleCheckMixed
}

module.exports = mixRoleCheck
