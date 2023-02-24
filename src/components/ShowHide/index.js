import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  isFirstNameClicked = () => {
    this.setState(prevState => ({
      firstName: !prevState.firstName,
    }))
  }

  isLastNameClicked = () => {
    this.setState(prevState => ({
      lastName: !prevState.lastName,
    }))
  }

  render() {
    const {firstName, lastName} = this.state
    let showFirstName
    let showLastName

    if (firstName === true) {
      showFirstName = (
        <div className="card">
          <p className="name">Joe</p>
        </div>
      )
    }
    if (lastName === true) {
      showLastName = (
        <div className="card">
          <p className="name">Jonas</p>
        </div>
      )
    }

    return (
      <div className="container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <div>
            <button
              className="btn"
              type="button"
              onClick={this.isFirstNameClicked}
            >
              Show/Hide Firstname
            </button>
            {showFirstName}
          </div>
          <div>
            <button
              className="btn"
              type="button"
              onClick={this.isLastNameClicked}
            >
              Show/Hide Lastname
            </button>
            {showLastName}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
