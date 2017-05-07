/**
 * Test for TheRoleCtrl.
 * Runs with mocha.
 */
'use strict'

const TheRoleCtrl = require('../lib/TheRoleCtrl')
const { TheUserResource } = require('the-resource-user')
const theDb = require('the-db')
const { ok, equal } = require('assert')

describe('the-role-ctrl', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', async () => {
    let db = theDb({ dialect: 'memory' })

    db.load(TheUserResource, 'User')
    db.load(TheUserResource.Role, 'UserRole')

    const { User, UserRole } = db.resources
    const session = {}
    let ctrl = new TheRoleCtrl({
      app: { db },
      session
    })
    ok(ctrl)

    let user01 = await User.create({ name: 'user01' })
    ok(user01)

    session.user = user01

    await ctrl.grantTo(user01, 'admin')
    ok(await ctrl.has('admin'))

    await ctrl.revokeFrom(user01, 'admin')
    ok(!await ctrl.has('admin'))

  })
})

/* global describe, before, after, it */
