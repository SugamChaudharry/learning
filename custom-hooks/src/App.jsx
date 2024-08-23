import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css'

// custom hooks
function useInterval(fn,time) {
    setInterval(fn,time)
}
function useTodos(n){
  const [todos, setTodos] = useState([])
  const [loding,setLoding] = useState(true)
  useEffect(() => {
    const interval = useInterval(()=>{
      setLoding(true)
      setTimeout(()=>{
        axios.get("https://dummyjson.com/todos")
          .then(res => {
            setTodos(res.data.todos);
          })
          setLoding(false)
      },n*100)
    },n*1000)

    axios.get("https://dummyjson.com/todos")
        .then(res => {
          setTodos(res.data.todos);
        })
        setLoding(false)
      return () => {
        clearInterval(interval)
      }
  }, [n])

  return {todos,loding}
}
function useIsOnline(){
  const [online,setOnline] = useState(window.navigator.onLine)
  useEffect(()=>{
    useInterval(()=>{
      setOnline(r=> window.navigator.onLine)
    },5000)
    setOnline(r=> window.navigator.onLine)
  },[])
  return online
}
function App() {
  const {todos,loding} = useTodos(5);
  const online = useIsOnline()
//   setInterval(()=>{
//   console.log(todos);
// },1000)
  // console.log(loding);

  return (
    <>
    {online ?
    (!loding ? todos.map(todo => <Track key={todo.id} todo={todo} />) : <div>Lo..</div>)
    : <div>not online</div>}
    </>
  )
}

function Track({ todo }) {

  return <div>
    {todo.todo}
    <br />
    {todo.completed}
  </div>
}


// munt and unmount of useEffect
// function App(){
//   const [f,setF] = useState(true);
//   useEffect(()=>{
//     setInterval(()=>{
//       setF(r=>!r)
//     },5000)
//   },[])
//   return f ? <MyComponent /> : <div>llll</div>
// }
// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.log("mounted");


//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.log("unmounted");
//     };
//     // this function will run in last in case of [] depandance and for non empty [todos] it run first when rerander
//   }, []);

//   // Render UI
//   return <div>
//     v;kjvnakjnkjasnjkv  kjjk fa ;f
//   </div>
// }

export default App
