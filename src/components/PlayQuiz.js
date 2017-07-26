import React, { Component } from 'react'
import { Step, Stepper, StepButton } from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'

const getStyles = () => {
  return {
    root: {
      width: '100%',
      maxWidth: '640px',
      margin: 'auto'
    },
    content: {
      margin: '0 16px'
    },
    actions: {
      marginTop: 12
    },
    backButton: {
      marginLeft: 5,
      marginRight: 6
    },
    paper: {
      maxWidth: '320px',
      width: '100%',
      paddingTop: '12px',
      paddingButtom: '10px',
      textAlign: 'center',
      display: 'inline-block'
    }
  }
}

class PlayQuiz extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      stepIndex: 0,
      visited: []
    }
  }

  componentWillMount () {
    const { stepIndex, visited } = this.state
    this.setState({ visited: visited.concat(stepIndex) })
  }

  componentWillUpdate (nextProps, nextState) {
    const { stepIndex, visited } = nextState
    if (visited.indexOf(stepIndex) === -1) {
      this.setState({ visited: visited.concat(stepIndex) })
    }
  }

  handleNext = () => {
    const { stepIndex } = this.state
    if (stepIndex < 2) {
      this.setState({ stepIndex: stepIndex + 1 })
    }
  }

  handlePrev = () => {
    const { stepIndex } = this.state
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 })
    }
  }

  getStepContent (stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div style={{ maxWidth: '640px', width: '100%', margin: 'auto' }}>
            Please say something to me...
            <br />
            <FlatButton
              label='🤖 PLAY 🤖'
              rippleColor='#FF5722'
              backgroundColor='#FF9800'
              hoverColor='#EF6C00'
              href='https://www.facebook.com/messages/t/122419575009686'
              target='_blank'
              style={{ marginBottom: '3px' }}
            />
          </div>
        )
      case 1:
        return (
          <div>
            Choose quiz you want to play. I have...<br />
            <Paper style={getStyles().paper} zDepth={1} rounded={false}>
              -&gt; <b>12 Factors App</b> for 10 questions<br />
              -&gt; <b>Design Patterns</b> for 20 questions<br />
              -&gt; <b>Rules of Thumb</b> for 30 questions<br /><br />
            </Paper><br /><br />
            <div
              style={{
                maxWidth: '540px',
                width: '100%',
                margin: 'auto',
                textAlign: 'left'
              }}
            >
              • I'll ask question 1 at a time<br />
              • You answer! Don't worry I have choices for you ;)<br />
              • If you want to pause, just say 'no' when I ask whether you want to play the next question
              <br />
              • You can play as many times as you like and you choose category for each round
              <br />
            </div>
          </div>
        )
      case 2:
        return (
          <div style={{ maxWidth: '640px', width: '100%', margin: 'auto' }}>
            <b>Enjoy!</b> <br />
            You can come back here to see players ranking all the time.
          </div>
        )
      default:
        return 'Click a step to get started.'
    }
  }

  render () {
    const { stepIndex, visited } = this.state
    const styles = getStyles()

    return (
      <div style={{ textAlign: 'center', margin: 'auto' }}>
        <h2>How to Play with Me</h2>
        <div style={styles.root}>
          <Stepper
            linear={false}
            orientation={window.innerWidth > 370 ? 'horizontal' : 'vertical'}
          >
            <Step
              completed={visited.indexOf(0) !== -1}
              active={stepIndex === 0}
            >
              <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
                Join and start!
              </StepButton>
            </Step>
            <Step
              completed={visited.indexOf(1) !== -1}
              active={stepIndex === 1}
            >
              <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
                How to play?
              </StepButton>
            </Step>
            <Step
              completed={visited.indexOf(2) !== -1}
              active={stepIndex === 2}
            >
              <StepButton onClick={() => this.setState({ stepIndex: 2 })}>
                Enjoy!
              </StepButton>
            </Step>
          </Stepper>
          <div style={styles.content}>
            <p>{this.getStepContent(stepIndex)}</p>
            <div style={styles.actions}>
              {stepIndex !== 0 &&
                <FlatButton
                  label='Back'
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={styles.backButton}
                />}
              {stepIndex !== 2 &&
                <RaisedButton
                  label='Next'
                  primary
                  onTouchTap={this.handleNext}
                />}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PlayQuiz
