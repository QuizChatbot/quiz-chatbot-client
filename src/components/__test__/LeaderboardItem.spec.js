import React from 'react'
import { shallow, mount, render } from 'enzyme'
import LeaderboardItem from '../LeaderboardItem'

describe('LeaderboardItem component test', () => {
  const props = {
    idx: 0,
    developer: {
      profile: {
        first_name: 'Manusaporn',
        last_name: 'Treerungroj',
        profile_pic: 'pic_src'
      },
      '12_factors_app': {
        grade: 'A',
        score: '80'
      }
    },
    category: '12_factors_app'
  }

  it('should render ListItem', () => {
    const Wrapper = shallow(<LeaderboardItem {...props} />)
    expect(Wrapper.find('ListItem')).toHaveLength(1)
  })
})
