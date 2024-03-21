import React, { useState } from 'react'
import axios, { Axios } from 'axios';

function App() {
    const[data,setData] = useState('');
    const[targetvalue,setTargetValue] = useState('');
    const[convertText,setConvertText] = useState('GETING');
    
    const fetchdata = async ()=>{
        
        setConvertText("Loding")
 let stringLang = targetvalue.split('').slice(0,2).join('').toLocaleLowerCase();
   
const encodedParams = new URLSearchParams();
encodedParams.set('source_language', 'en');
encodedParams.set('target_language', stringLang);
encodedParams.set('text', data);

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'd2817b268cmsh386415b35146721p126d7bjsnbb2fc93fa0b9',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data.data.translatedText);
    let converText = (response.data.data.translatedText);

    console.log(converText)
    setConvertText(converText)
    console.log(convertText)
} catch (error) {
	console.error(error);
}
    }

  return (
    <>
    <div className='main-div'>
    <div>
        <h1 style={{textAlign:'center',color:"black",padding:'5px 10px'}}>text translate</h1>
    </div><div style={{
      textAlign:'center',
      margin:'10px',
    }}>
        <label style={{marginRight:'10px',fontSize:'15px'}}>source</label>
        <select style={{backgroundColor:'grey',padding:'2px 5px',color:'white',textTransform:'capitalize'}}>
            <option>English</option>
        </select>

        <label style={{marginLeft:'20px',marginRight:'10px',fontSize:'15px'}}>Target</label>

        <select style={{backgroundColor:'grey',padding:'2px 5px',color:'white',textTransform:'capitalize'}} onChange={(e)=>{setTargetValue(e.target.value)}}>
        
        <option>Hindi</option>
        <option>African</option>
        <option>Arabic</option>
        
        </select>
    </div>
    <div style={{
      textAlign:'center'
    }}>
        
        <input style={{padding:'5px 10px',textTransform:'capitalize' }} type='text' placeholder='Enter text to Translate' onChange={(e)=>{
            setData(e.target.value)
        }}></input>
    </div >
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      margin:'10px'
    }}>
    <button style={{cursor:'pointer',padding:'10px',backgroundColor:'pink',borderRadius:'10px',color:'black',width:'100px' ,textAlign:'center'}} onClick={fetchdata}>Translate </button>
    
    <h3 style={{padding:"5px 50px",marginBottom:'20px',color:'orange',fontSize:'20px',fontWeight:'bold',textAlign:"center",textTransform:'capitalize'}}>{convertText}</h3>
    </div></div>
    </>
  )
}

export default App