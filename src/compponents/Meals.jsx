import { useContext } from "react"
import { AppContext } from "../context"

const Meals = () => {
const conext = useContext(AppContext)
  console.log(conext)
  return <h1>Meals Component</h1>
}

export default Meals
