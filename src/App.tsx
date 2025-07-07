import { useSelector } from "react-redux"
import type { State } from "./type/type"

function App() {
const blogs = useSelector((state : State ) => state.blogs.blogs)

  return (
    <>
      {blogs?.map((blog) => {
        return (
          <h1>{blog.title}</h1>
        )
      })}
    </>
  )
}

export default App
