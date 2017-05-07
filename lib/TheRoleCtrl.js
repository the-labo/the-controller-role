/**
 * Role controller for the-server
 * @augments TheCtrl
 * @class TheRoleCtrl
 */
'use strict'

const { TheCtrl } = require('the-controller-base')
const { TheUnauthorizedError } = require('the-error')

/** @lends TheRoleCtrl */
class TheRoleCtrl extends TheCtrl {
  /**
   * Grant a role to user
   * @param {UserEntity} user - Use to grand
   * @param {string} roleCode - Role code string
   * @returns {Promise.<boolean>} True if newly added. False if already has the one
   */
  async grantTo (user, roleCode) {
    const s = this
    const { db } = s.app
    const { User, UserRole } = db.resources
    let roles = await UserRole.all({ user })
    let hasRole = roles.some((role) => role.code === roleCode)
    if (hasRole) {
      return false
    }
    await User.update(user.id, {
      roles: [
        ...roles,
        await UserRole.create({ user, code: roleCode })
      ]
    })
    return true
  }

  /**
   * Revoke a role from user
   * @param {UserEntity} user - Use to grand
   * @param {string} roleCode - Role code string
   * @returns {Promise.<boolean>} True if revoked. False if the use has not one
   */
  async revokeFrom (user, roleCode) {
    const s = this
    const { db } = s.app
    const { User, UserRole } = db.resources
    user = await User.one(user)
    let destroying = await UserRole.only({ user, code: roleCode })
    if (!destroying) {
      return false
    }
    await destroying.destroy()
    await User.update(user, {
      roles: await UserRole.all({ user })
    })
    return true
  }

  /**
   * Has any of roles
   * @returns {Promise.<boolean>}
   */
  async hasAnyOf (roleCodes) {
    const s = this
    const { db } = s.app
    const { UserRole } = db.resources
    let { signed: user } = s.session
    if (!user) {
      throw new TheUnauthorizedError('You are not signed!')
    }
    let roles = await UserRole.all({ user })
    return roles.some((role) => roleCodes.includes(role.code))
  }

  /**
   * Check if has a role for signed user
   * @returns {Promise.<boolean>}
   */
  async has (roleCode) {
    const s = this
    return s.hasAnyOf([ roleCode ])
  }
}

module.exports = TheRoleCtrl

/** @typedef {Object} UserEntity */
