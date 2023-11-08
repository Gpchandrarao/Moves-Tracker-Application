import {Component} from 'react'
import {FiArrowRight} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {FaBoxes} from 'react-icons/fa'
import {GiPathDistance} from 'react-icons/gi'
import {MdDateRange} from 'react-icons/md'
import {BsPencil} from 'react-icons/bs'
import {TiTick} from 'react-icons/ti'
import {AiFillWarning} from 'react-icons/ai'

// import {FaBoxesStacked} from '@react-icons/all-files/fa/FaBoxesStacked'

import './index.css'

class MyMovies extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    this.getTravelData()
  }

  getTravelData = async () => {
    const uRl = 'https://run.mocky.io/v3/3d59aba6-f03d-44b5-aa8c-1fac10657d3b'
    const response = await fetch(uRl)
    const data = await response.json()

    console.log(data)
    const fetchedData = data.Customer_Estimate_Flow.map(each => ({
      estimateId: each.estimate_id,
      // userId: each.user_id,
      // movingFrom: each.moving_from,
      // movingTo: each.moving_to,
      // movingOn: each.moving_on,
      // new_floor_no: each.new_floor_no,
      propertySize: each.property_size,
      // firstName: each.firstName,
      customStatus: each.custom_status,
      dateCreated: each.date_created,
      distance: each.distance,
      dateCreated: each.date_created,
      estimateId: each.estimate_id,
      moveDateFlexible: each.move_date_flexible,
      movingFrom: each.moving_from,
      moving_on: each.moving_on,
      movingTo: each.moving_to,
      totalItems: each.total_items,
      orderDate: each.order_date,
    }))
    this.setState({movies: fetchedData})
  }

  render() {
    const {movies} = this.state
    return (
      <div className="main-container">
        <h1>My Moves</h1>
        <ul className="ul-container">
          {movies.map(each => (
            <li key={each.estimateId}>
              <div className="addres">
                <div className="from_container">
                  <p className="from-text">From</p>
                  <p className="from_adderes">{each.movingTo}</p>
                </div>
                <FiArrowRight className="arrow" />
                <div className="addres_to">
                  <p className="from-text">To</p>
                  <p className="from_adderes">{each.movingFrom}</p>
                </div>
                <div>
                  <p className="requst">Requst#</p>
                  <p className="requst-text">{each.estimateId}</p>
                </div>
              </div>
              <div className="details">
                <div className="details-items">
                  <AiFillHome className="datails-icons" />
                  <p className="details-text">{each.propertySize}</p>
                </div>
                <div className="details-items">
                  <FaBoxes className="datails-icons" />
                  <p className="details-text">{each.totalItems}</p>
                </div>
                <div className="details-items">
                  <GiPathDistance className="datails-icons" />
                  <p className="details-text">{each.distance}</p>
                </div>
                <div className="details-items">
                  <MdDateRange className="datails-icons" />
                  <p className="details-text">{each.orderDate}</p>
                  <BsPencil className="datails-icons" />
                </div>
                <div className="details-items">
                  <TiTick className="datails-icons" />
                  <p className="details-text">Is flexible</p>
                </div>
                <div className="buttons-container">
                  <button type="button" className="add-butons1">
                    View move details
                  </button>
                  <button type="button" className="add-butons2">
                    Quotes Awaiting
                  </button>
                </div>
              </div>
              <div className="disclaimer-container">
                <AiFillWarning className="disclaimer-icon" />
                <h1 className="disclaimer-heading">
                  Disclaimer:
                  <span className="disclaimer-span">
                    Plase update your move data before two days of shifting
                  </span>
                </h1>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MyMovies
