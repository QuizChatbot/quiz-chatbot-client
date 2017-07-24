import React, { Component } from 'react'

class PlayQuiz extends Component {
  render () {
    return (
      <div style={{ textAlign: 'center', margin: 'auto' }}>
        <h2>How to play with me</h2>
        • Click the link below
        • Say something to me
        • Choose quiz you want to play. I have...
        -&gt; 12 Factors App for 10 questions
        -&gt; Design Patterns for 20 questions
        -&gt; Rules of Thumb for 30 questions
        • I'll ask question 1 at a time
        • You answer! Don't worry I have choices for you ;)
        • If you want to pause, just say 'no' when I ask whether you want to play the next question
        • You can play as many times as you like and you choose category for each round
        • Enjoy!

        https://www.facebook.com/messages/t/122419575009686
      </div>
    )
  }
}

export default PlayQuiz
