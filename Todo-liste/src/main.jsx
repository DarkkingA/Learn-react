import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoForm } from './TodoForm.jsx'
import { TodoWrapper } from './TodoWrapper.jsx'
import { EditTodoForm } from './EditTodoForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TodoForm/>
    <TodoWrapper/>
    <EditTodoForm/>
  </StrictMode>,
)
