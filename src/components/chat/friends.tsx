import FriendItem from "./friend-item"
import FriendSearch from "./friend-search"

const Friends = () => {
  return (
    <div className='grid grid-rows-[auto_1fr] h-screen'>
        <section className='border-b p-4'>
            <h2 className="font-bold text-xl text-gray-600 mb-2">Chats</h2>
            <FriendSearch/>
        </section>
        <div className='custom-scrollbar'>
            {Array.from({length:15}).map((_,i)=><FriendItem key={i}/>)}
        </div>
    </div>
  )
}

export default Friends