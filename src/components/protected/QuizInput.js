import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  getBlankQuest,
  getQuestFromProps,
  getQuizStatefromQuest,
  getFloatingLabelText
} from '../../libs/quizHelper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import Snackbar from 'material-ui/Snackbar'
import './bubble.css'

class QuizInput extends Component {
  constructor (props, context) {
    super(props, context)
    let quest = getQuestFromProps(props.quest)
    this.state = getQuizStatefromQuest(quest)
  }

  handleSubmit = e => {
    const { newQuiz, onSave } = this.props

    // Save quiz
    const {
      subject,
      category,
      question,
      choice_0,
      choice_1,
      choice_2
    } = this.state
    onSave({ subject, category, question, choice_0, choice_1, choice_2 })

    if (newQuiz) {
      this.setState(getBlankQuest())
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = form => {
    this.setState({ isEditing: { [form]: true } })
  }

  handleBlur = form => {
    const { newQuiz, onSave } = this.props
    if (!newQuiz) {
      let keys = form.split('_')
      let quiz = keys[0] === 'choice'
        ? { [keys[1]]: this.state[form] }
        : { [form]: this.state[form] }
      let isChoice = keys[0] === 'choice'
      onSave(quiz, isChoice)
      this.setState({ isEditing: { [form]: false } })
    }
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  }

  renderForm (form, autoFocus) {
    const { newQuiz } = this.props

    if (this.state.isEditing[form] || newQuiz) {
      return (
        <div style={{ textAlign: 'center' }}>
          <TextField
            ref={form}
            type='text'
            name={form}
            floatingLabelText={getFloatingLabelText(form)}
            value={this.state[form]}
            autoFocus={autoFocus || this.state.isEditing[form]}
            onChange={this.handleChange}
            onBlur={() => this.handleBlur(form)}
          />
        </div>
      )
    } else if (form.indexOf('choice') > -1) {
      return (
        <div
          style={{ textAlign: 'center', marginRight: '5%', marginLeft: '5%' }}
        >
          <FlatButton
            label={this.state[form]}
            onTouchTap={() => this.handleClick(form)}
            style={{
              maxWidth: '260px',
              width: '100%',
              margin: '0px',
              borderRadius: '25px',
              marginLeft: '5%',
              marginRight: '5%',
              borderStyle: 'solid',
              borderWidth: 'thin',
              borderColor: 'darkgrey'
            }}
          />
        </div>
      )
    } else if (form.indexOf('question') > -1) {
      return (
        <dl className='ios7'>
          <dd
            className='from'
            style={{ paddingRight: '5%' }}
            onClick={() => this.handleClick(form)}
          >
            <p style={{ margin: '0px', maxWidth: '260px' }}>
              <b>{getFloatingLabelText(form)}:</b> {this.state[form]}
            </p>
          </dd>
        </dl>
      )
    } else {
      return (
        <div
          style={{ textAlign: 'center', marginRight: '5%', marginLeft: '10%' }}
        >
          <div
            style={{
              textAlign: 'left',
              margin: 'auto',
              maxWidth: '260px',
              width: '100%'
            }}
          >
            <label onClick={() => this.handleClick(form)}>
              <b>{getFloatingLabelText(form)}:</b>{this.state[form]}
            </label>
          </div>
        </div>
      )
    }
  }

  renderSubmitButton () {
    const { newQuiz } = this.props
    if (newQuiz) {
      return (
        <div>
          <RaisedButton
            type='submit'
            label='Submit'
            primary
            onTouchTap={this.handleSubmit}
          />
          <Snackbar
            open={this.state.open}
            message='Quiz added'
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
        </div>
      )
    }
  }

  render () {
    const { idx, newQuiz } = this.props
    const autoFocus = true
    return (
      <div style={{ padding: '10px' }}>
        {idx && <h4 style={{ margin: '0px' }}>#{idx}</h4>}
        {this.renderForm('subject', autoFocus)}
        {this.renderForm('category')}
        {this.renderForm('question')}
        {this.renderForm('choice_0')}
        {this.renderForm('choice_1')}
        {this.renderForm('choice_2')}
        {newQuiz && this.renderSubmitButton()}
      </div>
    )
  }
}

QuizInput.propTypes = {
  idx: PropTypes.number,
  onSave: PropTypes.func.isRequired,
  quest: PropTypes.object,
  newQuiz: PropTypes.bool
}

export default QuizInput
