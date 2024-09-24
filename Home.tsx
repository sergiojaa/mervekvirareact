
import { useNavigate } from "react-router-dom"
export default function Home() {
    const navigate = useNavigate()

  return (
    <div> HOME
      <button onClick={()=>navigate('/about')}>
        NAVIGATE TO ABOUT
      </button>
    </div>
  )
}
