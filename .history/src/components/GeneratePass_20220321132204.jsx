import React, {useState} from 'react';

import { toast } from 'react-toastify'
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters
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
        const characterIndex = Math.round(Math.random() * characterListLength);
        password = password + characterList.charAt(characterIndex);
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
        <div className='w-full mx-auto my-0 mt-2'>
          <div className='px-4 py-2 mb-2 bg-gray-100 rounded-md shadow-xl'>
            <div className='flex flex-row justify-between px-0 py-2 mb-4 bg-white md:px-2'>
              <h3 className="text-base font-normal md:font-semibold">{password}</h3>
              <button onClick={handleCopyPassword} className='text-red-500 bg-white border-none cursor-pointer top-1 right-1 '>
                <svg xmlns="http://www.w3.org/2000/svg" className="flex w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
          </div>
  

            <div className='flex flex-row justify-between mb-2 md:mb-4'>
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
  
            <div className="flex flex-col justify-between md:flex-row">

            <div className='flex flex-row justify-between mb-2 text-gray-800 md:mb-4'>
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

            <div className='flex justify-between mb-2 text-gray-800 md:mb-4'>
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
  
            <div className="flex flex-col md:flex-row md:justify-between">

            <div className='flex justify-between mb-2 text-gray-800 md:mb-4'>
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
  
            <div className='flex justify-between mb-2 text-gray-800 md:mb-4'>

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
  
            <button onClick={handleGeneratePassword} className='block w-full p-2 mx-auto my-0 text-base text-blue-100 transition-all duration-500 bg-blue-600 border-none rounded md:w-1/4 translate scale hover:scale-110 hover:bg-blue-900 hover:text-blue-200 curser-pointer'>
              Gjenero Fjalëkalimin
            </button>
           
          </div>
        </div>
    )
  }
  

export default GeneratePass;