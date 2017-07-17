import React from 'react'
import { Shallow, mount, render } from 'enzyme'
import categoryData from '../categoryData'

describe('categoryData reducer', () => {
  const types = {
    setCategoryData: 'category/set-category',
    foo: 'bar'
  }

  it('should return category "12_factors_app" if state is undefined', () => {
    const action = {
      type: types.foo,
      data: 'design_patterns'
    }

    expect(
      categoryData(undefined, {
        type: action.type,
        data: action.data
      })
    ).toEqual({
      category: '12_factors_app'
    })

    expect(
      categoryData('', {
        type: action.type,
        data: action.data
      })
    ).toEqual({
      category: '12_factors_app'
    })
  })

  it('should handle if action type is unexpected', () => {
    const state = {
      category: '12_factors_app'
    }
    const action = {
      type: types.foo,
      data: 'design_patterns'
    }

    expect(
      categoryData(state, {
        type: action.type,
        data: action.data
      })
    ).toEqual({
      category: '12_factors_app'
    })
  })

  it('should handle if action type is category/set-category', () => {
    const state = {
      category: 'design_patterns'
    }
    const action = {
      type: types.setCategoryData,
      data: '12_factors_app'
    }

    expect(
      categoryData(state, {
        type: action.type,
        data: action.data
      })
    ).toEqual({
      category: action.data
    })
  })
})
