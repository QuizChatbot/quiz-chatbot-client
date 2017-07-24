import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Leaderboard from '../Leaderboard'

describe('Leaderboard component', () => {
  const props = {
    developers: [
      {
        profile: {
          first_name: 'Manusaporn',
          last_name: 'Treerungroj',
          profile_pic: 'pic_src'
        },
        '12_factors_app': {
          grade: 'A',
          score: '80'
        }
      }
    ]
  }

  it('should render button for choose category', () => {
    const Wrapper = shallow(<Leaderboard {...props} />)
    expect(Wrapper.find('CategoryButton')).toHaveLength(3)
  })

  it('should render LeaderboardItem component', () => {
    const Wrapper = shallow(<Leaderboard {...props} />)
    expect(Wrapper.contains(<h2>Leaderboard</h2>)).toEqual(true)
    expect(Wrapper.find('LeaderboardItem')).toHaveLength(1)
  })

  it('should render No Players message if developers length is 0', () => {
    const Wrapper = shallow(<Leaderboard developers={[]} />)
    expect(Wrapper.contains('No Players')).toEqual(true)
  })
})
