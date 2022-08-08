import React from 'react'
import { useState } from 'react'
import QRCode from 'react-qr-code'
import  QrInput  from '../components/QrInput'
import LiveQrCode from '../components/LiveQrCode'
import '../assets/scss/pages/main.scss'

export const Main = () => {
    const [qrText, setQrText] = useState("")
    const [qrCode, setQrCode] = useState("")

    const createQrCode = () => {
        QRCode.toDataURL(qrText, {
            width: 1000,
            margin: 5,

        }, 
        (error, url) => {
            if(error){
                alert(error)
            }
            setQrCode(url)
        })
    }

    const QrCodeValue =(e)=>{
        setQrText(e.target.value)
        createQrCode()
    }

    return(
        <div className='qrcode_container'>
            <h1>Qr Kod yaradıcı</h1>
            <LiveQrCode value={qrText}/>
            <QrInput
            type='text'
            value={qrText}
            placeholder='Qr Kod mətni'
            onChange={QrCodeValue}
            />
            <a href={qrCode} download={`${qrText}.png`} className="download_btn">Endir</a>
        </div>
    )
}

export default Main
