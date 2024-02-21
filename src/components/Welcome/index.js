import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {but1: 'Subscribe'}

  clicked = () => {
    const {but1} = this.state
    if (but1 === 'Subscribed') {
      return this.setState({but1: 'Subscribe'})
    }
    return this.setState({but1: 'Subscribed'})
  }

  render() {
    const {but1} = this.state
    return (
      <div className="main">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="but" type="button" onClick={this.clicked}>
          {but1}
        </button>
      </div>
    )
  }
}
export default Welcome
