
import { Button } from '../ui/button'
const Profile = () => {
  return (
    <div className='p-4 text-center '>
      <h2 className='text-xl font-bold text-gray-500 mb-4'>Profile</h2>
      <img src="https://randomuser.me/api/portraits/men/70.jpg" alt="" className='rounded-md mb-4 mx-auto w-24 h-24 ' />
      <p className='font-semibold  '>John Doe</p>
      <p className='text-gray-500 mb-2'>email@emgail.com</p>
      <Button className='w-full' >Cerrar sesion</Button>
    </div>
  )
}

export default Profile