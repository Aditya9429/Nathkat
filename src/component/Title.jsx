import React from 'react'

export default function Title({text1,text2}) {
  return (
    <div>
      <div>
        <p style={{fontSize :'30px'}}>{text1} <span>{text2}</span></p>
      </div>
    </div>
  )
}
