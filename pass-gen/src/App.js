import { useState } from "react";
import SettingPassword from "./SettingPassword";
import PasswordStrengthBar from 'react-password-strength-bar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";

function App() {
  const [pass, setPass] = useState('')

  const callbackFunction = (password) => {
    setPass(password)
  }
  
  console.log(pass)

  return (
    <div className="w-full scale-90 md:scale-100">
      <div>
        <h1 className="text-text font-mono text-lg text-center mb-10">Password Generator</h1>
      </div>    
      <div>
      <input value={pass} type="text" placeholder="Your password will appear here" className="w-full h-14 px-6 py-2 bg-input text-white font-mono" readOnly/>  
      <button  onClick={() => {
        navigator.clipboard.writeText(pass)
        alert('Copied to clipboard')
      } } className="mt-4 text-generate text-md font-mono hover:bg-white p-4 text-center hover:text-input"><FontAwesomeIcon icon={faClipboard} /> Copy to clipboard </button>
      </div>
      <div>
        <SettingPassword callbackFunction={callbackFunction} />
        <PasswordStrengthBar password={pass} />
      </div>
    </div>
  );
}

export default App;
