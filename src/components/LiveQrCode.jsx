import React from 'react'
import QRCode from 'react-qr-code'

export const LiveQrCode = ({value}) => {
  return (
    <QRCode value={value}/>
  )
}


export default LiveQrCode