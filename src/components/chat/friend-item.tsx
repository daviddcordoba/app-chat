interface FriendItemProps {
  friend :{
    uid:string,
    displayName:string,
    photoURL:string,
    lastMessage:string
  }
}
const FriendItem = ({friend}:FriendItemProps) => {
  return (
    <article className='flex gap-x-3 items-center py-2 px-4 border-b hover:bg-gray-100 cursor-pointer'>
                <img src={friend.photoURL} alt="" className='w-14 h-14 rounded-md '/>
                <div className="flex-1 min-w-0">
                    <h3 className='font-semibold text-lg'>{friend.displayName}</h3>
                    <p className='text-xs text-gray-500 truncate  '>{friend.lastMessage}</p>
                </div>
            </article>
  )
}

export default FriendItem