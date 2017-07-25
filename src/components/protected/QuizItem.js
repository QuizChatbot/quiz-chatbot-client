import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QuizInput from './QuizInput'
import styled from 'styled-components'
import IconButton from 'material-ui/IconButton'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import Paper from 'material-ui/Paper'

const PaperStyled = styled(Paper)`
  text-align: left;
`

export const Element = ({
  idx,
  quest,
  deleteQuiz,
  editQuiz,
  handleOpen,
  handleClose,
  isDialogOpen
}) => {
  function handleSave (id, quiz, isChoice) {
    editQuiz(`${id}`, quiz, isChoice)
  }

  function handleDeleteAndCloseDialog (qid) {
    deleteQuiz(qid)
    handleClose()
  }

  const actions = [
    <FlatButton label='Cancel' primary onTouchTap={() => handleClose()} />,
    <FlatButton
      label='Delete'
      primary
      keyboardFocused
      onTouchTap={() => handleDeleteAndCloseDialog(quest.id)}
    />
  ]

  return (
    <div>
      <QuizInput
        idx={idx}
        quest={quest}
        onSave={(quiz, isChoice) => handleSave(quest.id, quiz, isChoice)}
      />
      <div style={{ textAlign: 'right' }}>
        <IconButton tooltip='Delete'>
          <ActionDelete onTouchTap={() => handleOpen()} />
        </IconButton>
      </div>
      <Dialog
        title='Comfirm delete?'
        actions={actions}
        modal={false}
        open={isDialogOpen}
        onRequestClose={() => handleClose()}
      >
        This quiz will be permanently deleted and can not undo.
      </Dialog>
    </div>
  )
}

class QuizItem extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      isDialogOpen: false
    }
  }

  handleOpen = () => {
    this.setState({ isDialogOpen: true })
  }

  handleClose = () => {
    this.setState({ isDialogOpen: false })
  }

  render () {
    const { idx, quest, deleteQuiz, editQuiz } = this.props

    return (
      <PaperStyled zDepth={2}>
        <Element
          idx={idx}
          quest={quest}
          deleteQuiz={deleteQuiz}
          editQuiz={editQuiz}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          isDialogOpen={this.state.isDialogOpen}
        />
      </PaperStyled>
    )
  }
}

QuizItem.propTypes = {
  idx: PropTypes.number,
  quest: PropTypes.object,
  editQuiz: PropTypes.func,
  deleteQuiz: PropTypes.func
}

export default QuizItem
