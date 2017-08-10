import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'

const inputArray = []

const navStyles = {
  nav: "side-nav",
  container: "side-nav-container"
}



class Brainstorm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentInput: '',
      inputArray: []
    }
  }

  handleChange(e) {
    const currentInput = e.target.value
    this.setState({
      currentInput
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const idea = e.target.firstChild.value
    inputArray.push(idea)
    this.setState({
      currentInput: '',
      inputArray
    })
    e.target.firstChild.value = ''
  }

  render() {
    return (
      <div>
        <Nav navStyles={navStyles}/>
        <IdeaDisplay currentInput={this.state.currentInput} inputArray={this.state.inputArray}/>
        <IdeaInput handleSubmit={(e) => this.handleSubmit(e)} handleChange={(e) => this.handleChange(e)}/>
      </div>
    )
  }
}


const IdeaInput = ({handleSubmit, handleChange}) => {
  return (
    <form className="idea-input-container" onSubmit={(e) => handleSubmit(e)}>
      <input onChange={(e) => handleChange(e)}  name="idea-input" type="text" className="form-control" placeholder="idea"/>
      <button type="submit" className="btn btn-success btn-sm">Add</button>
    </form>
  );
}

IdeaInput.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
}


const IdeaDisplay = ({currentInput, inputArray}) => {
  return (
    <div className='idea-list-container'>
      <ul className='idea-list'>
        {
          inputArray.map((idea) => {
            return <li key={idea}>{idea}</li>
          })
        }
        <li className='current-input'>> {currentInput}</li>
      </ul>
    </div>
  )
}

IdeaDisplay.propTypes = {
  currentInput: PropTypes.string.isRequired,
  inputArray: PropTypes.array.isRequired
}



export default Brainstorm
