// import React from 'react'

function FuncType(): JSX.Element {
  function logMessage(message: (key: string) => void, messageParams: string) {
    const res = message(messageParams)
    console.log(res);
  }
  function showMessage(mesg: string): void{
    console.log(mesg);
  }
  logMessage(showMessage, 'hello world')
  return (
    <div>FuncType</div>
  )
}



export default FuncType
