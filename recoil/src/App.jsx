import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { countAtom } from './store/atoms/count'


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
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
  </div>
}
function Buttoms() {
  const [count , setCount] = useRecoilState(countAtom)
  return <div>
    <button onClick={() => setCount(count+1)}>up</button>
    <button onClick={() => setCount(count-1)}>down</button>
  </div>
}




export default App
