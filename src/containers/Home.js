import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import logo from '../image/gochat.png'
import apple from '../image/apple.png'
import googleplay from '../image/google-play.png';
import download from '../image/download.png'
import { QRCode } from 'react-qrcode-logo';
import { isIOS, isAndroid } from 'react-device-detect';
const Header = styled.div`
overflow: hidden;
display:flex;
  background-color: #f1f1f1;
  padding:15px;
  border-bottom:3px solid #3b3b3b;
  a {
    float: left;
    color: black;
    text-align: center;
    text-decoration: none;
    font-size: 18px; 
    line-height: 25px;
    border-radius: 4px;
  }
  a.logo {
    flex:3;
    font-size: 25px;
    font-weight: bold;
  }
  a.active {
    background-color: dodgerblue;
    color: white;
  }
  @media screen and (max-width: 500px) {
    a{
        text-align: left;
    }
  }
`
const Imagelogo = styled.img`
  width:45px
`
const Headerright = styled.div`
// float: right;
flex:3;
@media screen and (max-width: 500px) {
      display:none
}
`
const Boxqr = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding:15px;
    justify-content:center;
    over-flow:hiden
`
const Displayqr = styled.div`
    margin-top:60px
`
const Buttonlink = styled.button`

    background-color:white;
    padding:20px 15px 15px 15px;
    border:1px solid #999;
    cursor:pointer;
    margin-right:5px;
    border-radius:5px;
    width:100%;
    font-weight:bold;
    display:block;
`
const Downloadplatform = styled.a`
    text-decoration:none;
    color:rgb(224,182,86);
    :hover{
        background-color:#999

    }
`
const Onlywebbut = styled.a`

    padding:20px 15px 15px 15px;
    border:1px solid #999;
    cursor:pointer;
    margin-right:5px;
    border-radius:5px;
    text-decoration:none;
    color:#999;
    :hover{
        filter: invert(1);
        background-color:#999

    }
`
const Home = (props) => {
    const [mousedownios, setMousedownios] = useState(false)
    const [mousedownand, setMousedownand] = useState(false)
    const [url, setUrl] = useState(window.location.href)
    const [id, setId] = useState(new URLSearchParams(window.location.search).get('id'))
    const [isoa,setIsoa] = useState(new URLSearchParams(window.location.search).get('isOa'))
    const andriodDownloadUrl = 'https://play.google.com/store/apps/details?id=gochat.thai.app';
    const iosDownloadUrl = 'https://apps.apple.com/th/app/gochat/id1564659556?l=th'
    const Openapp = {
        backgroundColor: 'rgba(43,43,81,1)'
    }
    const launchApp = ()=> {
            if(isoa !== null){
                
                window.location.assign(`${process.env.REACT_APP_SCHEMA_DEEP}://${process.env.REACT_APP_DEEP_LINK}/contact/add?id=${id}&isOa=${isoa}`)
            }else {
                
                window.location.assign(`${process.env.REACT_APP_SCHEMA_DEEP}://${process.env.REACT_APP_DEEP_LINK}/contact/add?id=${id}`)
            }
            window.setTimeout(() => {
              window.location.assign(andriodDownloadUrl);
            }, 3000)
        }
    
    const Iosopen = () =>{
        if(isoa !== null){
            window.location.assign(`${process.env.REACT_APP_SCHEMA_DEEP}://${process.env.REACT_APP_DEEP_LINK}/contact/add?id=${id}&isOa=${isoa}`)
        }else {
            window.location.assign(`${process.env.REACT_APP_SCHEMA_DEEP}://${process.env.REACT_APP_DEEP_LINK}/contact/add?id=${id}`)
        }
        
        setTimeout(() => {
            window.location.assign(iosDownloadUrl)
        }, 3000);
    }
    useEffect(() => {
    }, [])
    return (
        <>
        
            <Header>
                <a className="logo">
                    <Imagelogo src={logo} />
                </a>
                <Headerright className="header-right">
                    {/* <a class="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a> */}
                </Headerright>
            </Header>
            <Boxqr>
                <Displayqr>
                    <div style={{ width: 'auto', height: 'auto', border: '#cdcdcd 1px solid' }}>
                        <QRCode

                            value={url}
                            size={200}
                            quietZone={20}
                            // logoImage={Gochat}
                            logoWidth={30}
                        />
                    </div>
                    <p style={{ textAlign: 'center' }}>
                        Add  Friends via QR Code
                    </p>

                </Displayqr>
                <small style={{ flexBasis: '100%', textAlign: 'center', color: '#999' }}>
                    Open the Friends tab in your  app, tap the add friends icon in<br />
                        the top right, select "QR code," and then scan this QR code.
                    </small>
                <div style={{ paddingTop: '2rem', width: '100%', textAlign: 'center' }}>
                    {
                        !isAndroid && !isIOS ?
                            <>
                                <Onlywebbut href={iosDownloadUrl} target="_blank" onMouseEnter={(event) => {
                                    setMousedownios(true)
                                }} onMouseLeave={(event) => {
                                    setMousedownios(false)
                                }} >
                                    {
                                        mousedownios ? <img src={download} style={{ width: '20px' }} /> : <img src={apple} style={{ width: '20px' }} />
                                    }
                                </Onlywebbut>
                                <Onlywebbut href={andriodDownloadUrl} target="_blank"
                                    onMouseEnter={(event) => {
                                        setMousedownand(true)
                                    }} onMouseLeave={(event) => {
                                        setMousedownand(false)
                                    }} >
                                    {mousedownand ? <img src={download} style={{ width: '20px' }} /> : <img src={googleplay} style={{ width: '20px' }} />}
                                </Onlywebbut>

                            </> :
                            isIOS ?
                                <>
                                    <Buttonlink style={Openapp} onClick={()=>{
                                        Iosopen()
                                    }}>
                                        <Downloadplatform >
                                            Open Goochat
                                            
                                        </Downloadplatform>
                                    </Buttonlink>
                                    <Buttonlink style={{ marginTop: '1rem' }}>
                                        <Downloadplatform style={{ color: '#000' }} href={iosDownloadUrl} target="_blank">
                                            Download Goochat
                                        </Downloadplatform>
                                    </Buttonlink>


                                </>
                                :
                                isAndroid ?
                                    
                                    <>
                                    <iframe style={{display:'none',width:'0',height:'0'}}  id="loader" ></iframe>
                                        <Buttonlink style={Openapp} 
                                        onClick={()=>{
                                                launchApp()}
                                        }
                                         >
                                            <Downloadplatform 
                                            
                                            >
                                                Open Goochat
                                        </Downloadplatform>
                                        </Buttonlink>
                                        <Buttonlink style={{ marginTop: '1rem' }} 
                                        onClick={()=>{
                                            window.location.href = andriodDownloadUrl
                                        }}
                                        >
                                            <Downloadplatform style={{ color: '#000' }} 
                                            >
                                                Download Goochat
                                        </Downloadplatform>
                                        </Buttonlink>


                                    </>
                                    : ''

                    }


                </div>

            </Boxqr>

        </>
    )
}

export default Home;