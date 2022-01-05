import ApiReq from './components/apireq'
import  LeftBar  from './components/leftBar';
import {Center2} from './components/Center2'
import './App.css';
import { Center } from './components/center';
import { VsAroow } from './components/vsSum';
import {Aroow} from './components/sum'
import React , {useState} from 'react';
import Selector from './components/selector';

function App() {
  const [data, setData] = useState();
  const [ sign, setSign ] = useState('Aries');
  const [ date, setDate ] = useState('Yesterday');
  const [sum, setSum] = useState(false)
  const handler = () => {
    setSum(false)
  }
  const vsHandler = () => {
    setSum(true)
  }
  console.log(date, sign)


  return (
      <div className="bg">
         <div className='left'>
        <LeftBar />
        </div> 
         {sum ? <Center data={data} />  : <> <Center2 date={date} setDate={setDate} setSign={setSign} sign={sign} id="date" />   </> }
         {sum ? <VsAroow handler={handler} /> : <Aroow vsHandler={vsHandler}/> }
         {sum ? <ApiReq sign={sign} date={date} setData = {setData} /> : <></>}
      </div>
  )
}

export default App;
