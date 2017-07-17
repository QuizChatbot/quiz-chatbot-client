import React from 'react'
import { Shallow, mount, render } from 'enzyme'
import app from '../app'

describe('app reducer', () => {
  const types = {
    setAuthComplete: 'auth/complete',
    setAuthFail: 'auth/fail',
    foo: 'bar'
  }

  it('should return auth = false if state is undefined', () => {
    const action = {
      type: types.foo
    }

    expect(
      app(undefined, {
        type: action.type
      })
    ).toEqual({
      authed: false
    })

    expect(
      app('', {
        type: action.type
      })
    ).toEqual({
      authed: false
    })
  })

  it('should handle if action type is unexpected', () => {
    const state = {
      auth: true
    }
    const action = {
      type: types.foo
    }

    expect(
      app(state, {
        type: action.type
      })
    ).toEqual(state)
  })

  it('should handle if action type is auth/complete', () => {
    const state = {
      authed: false
    }
    const action = {
      type: types.setAuthComplete
    }

    expect(
      app(state, {
        type: action.type
      })
    ).toEqual({
      authed: true
    })
  })

  it('should handle if action type is auth/fail', () => {
    const state = {
      authed: true
    }
    const action = {
      type: types.setAuthFail
    }

    expect(
      app(state, {
        type: action.type
      })
    ).toEqual({
      authed: false
    })
  })
})
