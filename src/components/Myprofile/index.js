import {TbTruckDelivery} from 'react-icons/tb'
import {CgProfile} from 'react-icons/cg'
import {RiLogoutCircleFill} from 'react-icons/ri'

const MyProfile = () => {
  return (
    <div>
      <div>
        <TbTruckDelivery />
        <p>MY MOVES</p>
      </div>
      <div>
        <CgProfile />
        <p>MY PROFILE</p>
      </div>
      <div>
        <RiLogoutCircleFill />
        <p>LOGOUT</p>
      </div>
    </div>
  )
}

export default MyProfile
