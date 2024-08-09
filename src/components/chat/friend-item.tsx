
const FriendItem = () => {
  return (
    <article className='flex gap-x-3 items-center py-2 px-4 border-b hover:bg-gray-100 cursor-pointer'>
                <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="" className='w-14 h-14 rounded-md '/>
                <div>
                    <h3 className='font-semibold text-lg'>Anusha</h3>
                    <p className='text-xs text-gray-500'>Lorem, ipsum dolor.</p>
                </div>
            </article>
  )
}

export default FriendItem