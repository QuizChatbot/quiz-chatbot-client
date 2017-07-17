import React from 'react'
import { shallow, mount, render } from 'enzyme'
import QuizItem, { Element } from '../QuizItem'
import IconButton from 'material-ui/IconButton'

describe('QuizItem component', () => {
  const quest = {}
  const func = () => {}

  it('should render Element component', () => {
    const Wrapper = shallow(
      <QuizItem idx={0} quest={quest} editQuiz={func} deleteQuiz={func} />
    )
    expect(
      Wrapper.contains(
        <Element idx={0} quest={quest} editQuiz={func} deleteQuiz={func} />
      )
    ).toEqual(true)
  })

  it('Element component should render QuizInput component and delete button', () => {
    const Wrapper = shallow(
      <Element idx={0} quest={quest} deleteQuiz={func} editQuiz={func} />
    )
    expect(Wrapper.find('QuizInput')).toHaveLength(1)
    expect(Wrapper.find('IconButton')).toHaveLength(1)
  })
})
