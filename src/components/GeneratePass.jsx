import React, {useState} from 'react';

import { toast, ToastContainer } from 'react-toastify'
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from '../utils/characters.js'
import { COPY_SUCCESS } from '../utils/message'

const GeneratePass = () => {

    const [password, setPassword] = useState('')
    const [passwordLength, setPasswordLength] = useState(20)
    const [includeUppercase, setIncludeUppercase] = useState(false)
    const [includeLowercase, setIncludeLowercase] = useState(false)
    const [includeNumbers, setIncludeNumbers] = useState(false)
    const [includeSymbols, setIncludeSymbols] = useState(false)
  
    const handleGeneratePassword = (e) => {
      if (
        !includeUppercase &&
        !includeLowercase &&
        !includeNumbers &&
        !includeSymbols
      ) {
        notify('You must Select atleast one option', true)
      }
      let characterList = ''
  
      if (includeLowercase) {
        characterList = characterList + lowerCaseLetters
      }
  
      if (includeUppercase) {
        characterList = characterList + upperCaseLetters
      }
  
      if (includeNumbers) {
        characterList = characterList + numbers
      }
  
      if (includeSymbols) {
        characterList = characterList + specialCharacters
      }
  
      setPassword(createPassword(characterList))
    }
    const createPassword = (characterList) => {
      let password = ''
      const characterListLength = characterList.length
  
      for (let i = 0; i < passwordLength; i++) {
        const characterIndex = Math.round(Math.random() * characterListLength)
        password = password + characterList.charAt(characterIndex)
      }
      return password
    }
  
    const copyToClipboard = () => {
      const newTextArea = document.createElement('textarea')
      newTextArea.innerText = password
      document.body.appendChild(newTextArea)
      newTextArea.select()
      document.execCommand('copy')
      newTextArea.remove()
    }
  
    const notify = (message, hasError = false) => {
      if (hasError) {
        toast.error(message, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      } else {
        toast(message, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    }
  
    const handleCopyPassword = (e) => {
      if (password === '') {
        notify('Nothing To Copy', true)
      } else {
        copyToClipboard()
        notify(COPY_SUCCESS)
      }
    }
  
    return (
        <div className='w-full my-0 mx-auto mt-2'>
          <div className='bg-gray-100 rounded-md shadow-xl px-6 py-2 mb-2'>
            <div className='relative bg-white py-3 px-2 mb-4'>
              <h3>{password}</h3>
              <button onClick={handleCopyPassword} className='absolute text-white 
              border-none bg-gray-500 cursor-pointer top-1 right-1 '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </button>
            </div>
  

            <div className='flex justify-between mb-4'>
              <label htmlFor='password-strength' className="text-gray-800">Karaktere të fjalëkalimit</label>
              <input
                defaultValue={passwordLength}
                onChange={(e) => setPasswordLength(e.target.value)}
                type='number'
                id='password-strength'
                name='password-strength'
                max='20'
                min='10'
              />
            </div>
  
            <div className="flex flex-row justify-between">

            <div className='flex text-gray-800 justify-between mb-4'>
              <label htmlFor='uppercase-letters'>Përfshijë shkronjë të madhe</label>
              <input
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                type='checkbox'
                id='uppercase-letters'
                name='uppercase-letters'
                className="mt-2 ml-2"
              />
            </div>

            <div className='flex justify-between text-gray-800 mb-4'>
              <label htmlFor='lowercase-letters'>Përfshijë shkronjë të vogël</label>
              <input
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
                type='checkbox'
                id='lowercase-letters'
                name='lowercase-letters'
                className="mt-2 ml-2"
              />
            </div>

            </div>
  
            <div className="flex flex-row justify-between">

            <div className='flex justify-between text-gray-800 mb-4'>
              <label htmlFor='include-numbers'>Përfshijë numër</label>
              <input
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                type='checkbox'
                id='include-numbers'
                name='include-numbers'
                className="mt-2 ml-2"
              />
            </div>
  
            <div className='flex justify-between text-gray-800 mb-4'>

              <label htmlFor='include-symbols'>Përfshijë simbole</label>
              <input
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                type='checkbox'
                id='include-symbols'
                name='include-symbols'
                className="mt-2 ml-2"
              />
            </div>

            </div>
  
            <button onClick={handleGeneratePassword} className='border-none 
            bg-blue-600 w-1/4 my-0 mx-auto block translate transition-all 
            scale hover:scale-110 duration-500 text-blue-100 hover:bg-blue-900 
            hover:text-blue-200 text-base curser-pointer p-2 rounded'>
              Gjenero Fjalëkalimin
            </button>
           
          </div>
        </div>
    )
  }
  

export default GeneratePass;