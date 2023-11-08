import {Component} from 'react'
import MyMoves from '../MyMoves'
import Myprofile from '../Myprofile'
class Home extends Component {
  render() {
    return (
      <div>
        <MyMoves />
        <Myprofile />
      </div>
    )
  }
}

export default Home
