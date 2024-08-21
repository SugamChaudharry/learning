import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { countAtom,evenSelector } from './store/atoms/count'


function App() {

  return (
    <>
    <RecoilRoot>
      <Count />
    </RecoilRoot>
    </>
  )
}

function Count(){
  return <div>
    <CountRenderer />
    <Buttoms />
    <EvenCountRenderer />
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
  </div>
}
function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector)
  return <div>
    {isEven?"even":"odd"}
  </div>
}
function Buttoms() {
  // const [count , setCount] = useRecoilState(countAtom)
  // return <div>
  //   <button onClick={() => setCount(count+1)}>up</button>
  //   <button onClick={() => setCount(count-1)}>down</button>
  // </div>
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={() => setCount((count) => count+1)}>up</button>
    <button onClick={() => setCount((count) => count-1)}>down</button>
  </div>
}

export default App
