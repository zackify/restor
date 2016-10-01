import React from 'react';
import { connection } from '../../dist'

const Todos = ({ todos }) => (
  <div>
    {todos.map(post => <div key={post}>{post}</div>)}
  </div>
)
export default connection('todos')(Todos)
