import React, { Component } from 'react'

const getStyle = {
  p: {
    margin: '0px auto',
    padding: '0px',
    color: 'rgba(255, 255, 255, 0.54)'
  }
}
export class Footer extends Component {
  render () {
    return (
      <div
        style={{
          padding: '48px 24px',
          backgroundColor: 'rgb(33, 33, 33)',
          textAlign: 'center'
        }}
      >
        <p style={getStyle.p}>
          Hand crafted with love by our awesome {' '}
          <a
            href='https://github.com/QuizChatbot/quiz-chatbot/graphs/contributors'
            style={{ color: 'rgba(255, 255, 255, 0.87)' }}
          >
            contributors
          </a>
          .
        </p>
        <p style={getStyle.p}>
          Repository on {' '}
          <a
            href='https://github.com/QuizChatbot/quiz-chatbot'
            style={{ color: 'rgba(255, 255, 255, 0.87)' }}
          >
            Github
          </a>
          .
        </p>

        <br />
        <p style={getStyle.p}>
          <a
            href='https://termsfeed.com/privacy-policy/c8fc5cfdb5a8f798dd59bf4b8d91a1b6'
            style={{ color: 'rgba(255, 255, 255, 0.87)' }}
          >
            Privacy policy
          </a>
          {' '} of Quiz Chatbot.
        </p>
      </div>
    )
  }
}

export default Footer
