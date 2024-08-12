import { useEffect, useState } from "react"
import FriendItem from "./friend-item"
import FriendSearch from "./friend-search"

interface Friend {
  uid:string,
  displayName:string,
  photoURL:string,
  lastMessage:string
}

const Friends = () => {
  const [friends,setFriends] = useState<Friend[]>([]);

  useEffect(()=>{
    const getFriends = async ()=>{
      const res = await fetch('https://randomuser.me/api/?results=15&nat=mx')
      const {results}  = await res.json()

      const data = results.map( (user : any) => ({
        uid: user.login.uuid,
        displayName: user.name.first,
        photoURL: user.picture.thumbnail,
        lastMessage: "Hi, i am " + user.name.first
      }))
      setFriends(data)
    }

    getFriends()
  },[])
  return (
    <div className='grid grid-rows-[auto_1fr] h-screen'>
        <section className='border-b p-4'>
            <h2 className="font-bold text-xl text-gray-600 mb-2">Chats</h2>
            <FriendSearch/>
        </section>
        <div className='custom-scrollbar'>
            {friends.map((friend)=><FriendItem friend={friend}   key={friend.uid}/>)}
        </div>
    </div>
  )
}

export default Friends