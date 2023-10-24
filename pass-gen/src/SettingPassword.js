import { useState } from "react";

let useChars = ''

const SettingPassword = ({callbackFunction}) => {
    
    const useUppercase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const useLowercase = 'abcdefghijklmnopqrstuvwxyz'
    const useNumbers = '0123456789'
    const useSymbols = '~`! @#$%^&*()_-+={[}]|:;"<,>.?/'
    const [charNum, setCharNum] = useState(8)

    
    const generateString = (length) => {
        let i;
        const charactersLength = useChars.length
        let password = ''

        for (i = 0; i < charNum; i++) {
            password += useChars.charAt(Math.floor(Math.random() * charactersLength))
        }
        callbackFunction(password)
    console.log(password)
    console.log(charNum)
    console.log(useChars)
    
    } 

    const characterNumber = (e) => {
        setCharNum(e.target.value)
        console.log(charNum)
    }
   
    const addChars = (e) => {
        if (e.target.checked) {
            useChars += e.target.value
        } else {
            useChars = useChars.replace(e.target.value, "")
        }
        console.log(useChars)
    } 
   
    
    
    return ( 
        <>
            <div className="flex flex-col bg-bg p-5 mt-6">
                <div className="flex flex-col items-center w-full">
                    <div className="flex justify-around items-center w-full">
                        <label className="text-white font-mono ml-2" for="uppercase">Character length </label>
                         <span className="text-xl text-generate">{charNum}</span>
                    </div>
                    <input className="w-full h-1 mb-5 mt-4" type="range" min="0" max="18" onChange={characterNumber} value={charNum} id="range" />
                </div>
                <div className="flex items-center">
                    <input type="checkbox" value={useUppercase} id="uppercase" onChange={addChars}/>
                    <label className="text-white font-mono ml-2" for="uppercase">Include uppercase letters</label>
                </div>
                <div className="flex items-center">
                    <input className="text-white font-mono" type="checkbox" value={useLowercase} id="lowercase" onChange={addChars}/>
                    <label className="text-white font-mono ml-2" for="lowercase">Include lowercase letters</label>
                </div>      
                <div className="flex items-center">
                    <input className="text-white font-mono" type="checkbox" value={useNumbers} id="numbers" onChange={addChars}/>
                    <label className="text-white font-mono ml-2" for="numbers">Include numbers</label>
                </div>        
                <div className="flex items-center">
                    <input className="text-white font-mono" type="checkbox" value={useSymbols} id="symbols" onChange={addChars}/>
                    <label className="text-white font-mono ml-2" for="symbols">Include symbols</label>
                </div>    
                <button onClick={generateString} className="w-72 h-10 bg-generate font-mono mt-10 m-auto">Generate</button>
            </div>
        </>
     );
}
 
export default SettingPassword;