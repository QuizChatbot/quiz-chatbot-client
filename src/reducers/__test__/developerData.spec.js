import React from 'react'
import { Shallow, mount, render } from 'enzyme'
import developerData from '../developerData'

describe('developerData reducer', () => {
  const types = {
    setDeveloperData: 'developer/set-developer-data',
    foo: 'bar'
  }

  it('should handle if state is undefined', () => {
    const action = {
      type: types.foo,
      data: [{ id: 1 }, { id: 2 }, { id: 3 }]
    }

    expect(
      developerData(undefined, {
        type: action.type,
        data: action.data
      })
    ).toEqual({
      developers: []
    })

    expect(
      developerData(
        {},
        {
          type: action.type,
          data: action.data
        }
      )
    ).toEqual({
      developers: []
    })
  })

  it('should handle if action type is unexpected', () => {
    const state = {
      developers: [{ id: 1 }, { id: 2 }]
    }
    const action = {
      type: types.foo,
      data: [{ id: 1 }, { id: 2 }, { id: 3 }]
    }

    expect(
      developerData(state, {
        type: action.type,
        data: action.data
      })
    ).toEqual({
      developers: state.developers
    })
  })

  it('should handle if action type is developer/set-developer-data', () => {
    const state = {
      developers: [{ id: 1 }, { id: 2 }]
    }
    const action = {
      type: types.setDeveloperData,
      data: [{ id: 1 }, { id: 2 }, { id: 3 }]
    }

    expect(
      developerData(state, {
        type: action.type,
        data: action.data
      })
    ).toEqual({
      developers: action.data
    })
  })
})
