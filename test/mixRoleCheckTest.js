/**
 * Test for mixRoleCheck.
 * Runs with mocha.
 */
'use strict'

const mixRoleCheck = require('../lib/mixRoleCheck')
const { TheCtrl } = require('the-controller-base')
const { ok, equal } = require('assert')

describe('mix-role-check', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', async () => {
    let Ctrl = mixRoleCheck(class extends TheCtrl {
      foo () {
        return 'This is foo'
      }

      bar () {
        return 'This is bar'
      }
    }, [ 'ADMIN' ], { only: 'foo' })

    let ctrl = new Ctrl({
      app: {},
      session: {
        user: {
          roles: [ { code: 'OPERATOR' } ]
        }
      }
    })

    await Ctrl.beforeInvocation({
      target: ctrl,
      action: 'bar'
    })

    let caught = await Ctrl.beforeInvocation({
      target: ctrl,
      action: 'foo'
    }).catch((err) => err)
    equal(caught.name, 'ForbiddenError')

  })
})

/* global describe, before, after, it */
