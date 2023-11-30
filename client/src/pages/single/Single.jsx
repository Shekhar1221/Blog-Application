import Sidebar from '../../components/sidebar/Sidebar'
import SingglePost from '../../components/singlePost/SingglePost'
import './single.css'

export default function Single() {
  return (
    <div className='single'>
        <SingglePost />
       <Sidebar />
    </div>
  )
}
