import Wrapper from '../modules/wrapper'

const Child = ({ todos }) => (
  <div>
    {todos.map(post => <div key={post}>{post}</div>)}
  </div>
)
export default Wrapper('todos')(Child)
