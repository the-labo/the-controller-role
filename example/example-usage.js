'use strict'

const { TheRoleCtrl } = require('the-controller-role')
const theServer = require('the-server')

async function tryExample () {
  let server = theServer({ /* ... */ })

  server.register(
    class extends TheRoleCtrl { /* ... */},
    'role'
  )

  server.listen(3000)
}

tryExample().catch((err) => console.error(err))
