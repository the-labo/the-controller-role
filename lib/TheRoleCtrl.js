/**
 * Role controller for the-server
 * @augments TheCtrl
 * @class TheRoleCtrl
 */
'use strict'

const { TheCtrl } = require('the-controller-base')

/** @lends TheRoleCtrl */
class TheRoleCtrl extends TheCtrl {

  /**
   * Grant a role to user
   * @param {UserEntity} user - Use to grand
   * @param {string} roleCode - Role code string
   * @returns {Promise.<boolean>} True if newly added. False if alredy has the one
   */
  async grant (user, roleCode) {
    const s = this
    const { db } = s.app
    const { User, UserRole } = db.resources
    let hasRole = await s.hasRole(user, roleCode)
    if (hasRole) {
      return false
    }
    await User.update(user.id, {
      roles: [
        ...await UserRole.all({ user }),
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
  async revoke (user, roleCode) {
    const s = this
    const { db } = s.app
    const { User, UserRole } = db.resources
    user = await User.one(user)
    let hasRole = await s.hasRole(user, roleCode)
    if (!hasRole) {
      return false
    }
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
   * Has a role or not
   * @param {UserEntity} user - Use to grand
   * @param {string} roleCode - Role code string
   * @returns {Promise.<boolean>}
   */
  async hasRole (user, roleCode) {
    const s = this
    const { db } = s.app
    const { User, UserRole } = db.resources
    user = await User.one(user)
    let roles = await UserRole.all({ user })
    return roles.some((role) => role.code === roleCode)
  }
}

module.exports = TheRoleCtrl

/** @typedef {Object} UserEntity */
