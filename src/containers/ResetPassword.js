import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import $ from "jquery";
import { Form, Input, Button } from 'antd';
import { CheckCircleFilled, CloseCircleFilled, InfoCircleOutlined } from '@ant-design/icons';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import CryptoJS from 'crypto-js/';
import Secret from '../image/secretepass.png';
import Lock from '../image/lock.png';
import Circle from '../image/circle.png';
import Opensec from '../image/opensecret.png';
import './ResetPassword.css';
import { isIOS, isAndroid } from 'react-device-detect';
const Container = styled.div`
    height:100vh;
    width:100vw;
    background:#E5E5E5;
    overflow:auto;
    position:relative
`
const Body = styled.div`
    height:auto;
    width:100%;
    margin-top:129px;

    // @media screen and (max-width: 767px) {
    //     text-align:center
    //   }

`
const TitleBox = styled.div`
    width:400px;
    margin:auto;
    margin-bottom:32px;
    @media screen and (max-width: 767px) {
        text-align:center
      }
`
const HintBox = styled.div`
    width:400px;
    margin:auto;
    margin-bottom:32px;
`
const Title = styled.span`
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 24px;
    color:#2A2A54;
    padding-left:10%;
    @media screen and (max-width: 767px) {
        padding-left:0
      }
`
const Subtitle = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: #232129;
    padding-left:12%;
    @media screen and (max-width: 767px) {
        padding-left:0
      }
`
const FormBox = styled.div`
    margin:auto;
    width:400px;
    @media screen and (max-width: 767px) {
            text-align:center
          }
`
const Footer = (isAndroid || isIOS) ? styled.div`
    height:42px;
    width:100%;
    position:absolute;
    bottom:0;
    border:1px solid #C4C4C4;
    background:transparent;
    text-align:center
`
    :
    styled.div`
    height:42px;
    width:100%;
    position:absolute;
    bottom:0;
    border:1px solid #C4C4C4;
    background:transparent;
    text-align:center;
    @media screen and (max-height: 648px) {
        display:none
        // position:fixed
      }
`

const FooterText = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    justify-content:center;
    color: #000000;
    margin:14px auto 0 auto; 
    width:400px;
    // margin:auto

`
const ButtonSubmit = styled(Button)`
    // background: rgba(42, 42, 84, 0.8);
    background: #2A2A54;
    border-radius: 8px;
    width:343px;
    height:50px;
    color:#fff;
    :focus {
        color: #fff;
        // border-color: palevioletred;
        background: #2A2A54;
      }
      :hover {
        color: #fff;
        // border-color: palevioletred;
        background: #2A2A54;
      }
      :disabled{
          background:#2A2A54;
          opacity:0.8;
          color:#fff;
          :hover{
              background:#2A2A54;
              opacity:0.8;
              color:#fff

          }
      }
`
const Ulhint = styled.ul`
    //   list-style-type:${<CheckCircleFilled />};
      font-size:11px;
      padding-inline-start:0%;
      color: #767481;
      @media screen and (max-width: 767px) {
        padding-inline-start:revert
      }
`
const FormItem = styled(Form.Item)`
      width:343px;
      @media screen and (max-width: 767px) {
        margin-left:auto;
        margin-right:auto
      }
`
const Inputpass = styled(Input.Password)`
        border-radius:6px;
`
const ResetPassword = (props) => {

    const [token, setToken] = useState(new URLSearchParams(window.location.search).get('token'))
    const [validateEngliseletter, setValidateEngliseletter] = useState()
    const [validateUppertext, setValidateUppertext] = useState()
    const [validateLowertext, setValidateLowertext] = useState()
    const [validateNumber, setValidateNumber] = useState()
    const [validatePasswordmatch, setValidatePasswordmatch] = useState()
    const [validateMintext, setValidateMintext] = useState()
    const [emptyinput1, setEmptyinput1] = useState(true)
    const [emptyinput2, setEmptyinput2] = useState(true)
    const [hidefooter, setHidefooter] = useState(true)
    const [Loginform] = Form.useForm()
    let history = useHistory();

    const checkUppertext = (text) => {
        if (text === '') {
            setEmptyinput1(true)
        } else {
            setEmptyinput1(false)
        }

        if (validatePasswordmatch === undefined) {
            setValidatePasswordmatch(false)
        }
        if (text !== undefined) {
            if (isUpper(text)) {
                setValidateUppertext(true)
            } else {
                setValidateUppertext(false)
            }
            if (isLower(text)) {
                setValidateLowertext(true)
            } else {
                setValidateLowertext(false)
            }
            if (isNumber(text)) {
                setValidateNumber(true)
            } else {
                setValidateNumber(false)
            }
            if (isEnglish(text)) {
                setValidateEngliseletter(true)
            } else {
                setValidateEngliseletter(false)
            }
            if (text.length >= 6) {
                setValidateMintext(true)
            } else {
                setValidateMintext(false)
            }

        }
    }
    const isUpper = (str) => {
        return /[A-Z]/.test(str);
    }
    const isLower = (str) => {
        return /[a-z]/.test(str)
    }
    const isNumber = (str) => {
        return /[0-9]/.test(str)
    }
    const isEnglish = (str) => {
        return /^[a-z0-9]+$/i.test(str);
    }
    const isCheckicon = (value) => {
        if (emptyinput1 === true && emptyinput2 === true) {
            return <img src={Circle} alt="Circle" style={{ width: '1em', height: '1em' }} />;
        } else {
            if (value) {
                return <CheckCircleFilled />;
            }
            else if (value === undefined) {
                return <img src={Circle} alt="Circle" style={{ width: '1em', height: '1em' }} />;
            }
            else {
                return <CloseCircleFilled />;
            }
        }

    }
    const onFinish = (values) => {

        const reg = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/
        const threg = /[\u0E00-\u0E7F]/
        if (reg.test(values.password)) {
            alert('Password must be 0-9 , a-Z')
            return false
        }
        else if (threg.test(values.password)) {
            console.log('th');
            alert('Password must be 0-9 , a-Z')
            return false
        }
        else {
            if (validateUppertext && validateLowertext && validateNumber && validateMintext && validatePasswordmatch) {
                var keyHex = CryptoJS.enc.Utf8.parse('4a310288218c3394d829e49bd187c395');
                var encrypted = CryptoJS.AES.encrypt(values.password, keyHex, {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7
                });
                const formdata = new FormData()
                formdata.append('tokenRecover', token)
                formdata.append('newPassword', encrypted)
                axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/forget/recover`;
                axios({
                    method: 'post',
                    headers: {
                        'Device-Id': '123444',
                        'Platform': 'ios',
                        // 'Accept': 'application/json',
                        'Accept-Language': 'en',
                        'App-version': '1.0.0',
                        'Os-version': '15.0',
                        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    data: formdata
                })
                    .then(function (response) {
                        // console.log(response.data.message);
                        if (response.data.message === 'success') {
                            history.push('welcome-goochat')
                        }
                        else {
                            alert(response.data.message)
                            Loginform.setFieldsValue({
                                password: '',
                                confirm: ''
                            })
                            setValidateUppertext()
                            setValidateLowertext()
                            setValidateNumber()
                            setValidatePasswordmatch()
                            setValidateMintext()
                            setValidateEngliseletter()
                            setEmptyinput1(true)
                            setEmptyinput2(true)
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            }
        }


    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed');
    };

    useEffect(() => {
        document.title = "GoochatRecoverPassword"
        var originalHeight = document.documentElement.clientHeight;
        var originalWidth = document.documentElement.clientWidth;
        $(window).resize(function () {
            // Control landscape/portrait mode switch
            if (document.documentElement.clientHeight == originalWidth &&
                document.documentElement.clientWidth == originalHeight) {
                originalHeight = document.documentElement.clientHeight;
                originalWidth = document.documentElement.clientWidth;
            }
            // Check if the available height is smaller (keyboard is shown) so we hide the footer.
            if (document.documentElement.clientHeight < originalHeight) {
                // $('.footer').hide();
                // alert('showkeyboard')
                setHidefooter(false)
            } else {
                // $('.footer').show();
                // alert('hidekeyboard')
                setHidefooter(true)
            }
        });
    }, [])

    return (
        <Container>
            <Body>
                <TitleBox>
                    <Title>New Password</Title>
                </TitleBox>
                <TitleBox style={{ marginBottom: '28px' }}>
                    <Subtitle>Cool! It's time to set new password</Subtitle>
                </TitleBox>
                <FormBox>
                    <Form

                        name="basic"
                        form={Loginform}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <FormItem
                            name="password"

                        >
                            <Inputpass

                                onChange={(event) => {

                                    checkUppertext(event.target.value)
                                }}
                                style={{ height: '40px', border: '1px solid #DFDFF4', borderRadius: '6px' }}
                                prefix={
                                    <img src={Lock} alt="Lock" style={{ width: '13px', height: '16px' }} />
                                }
                                iconRender={visible => (visible ? <img src={Opensec} alt="Secret" style={{ width: '17.35px', height: '11.59px', color: '#8D92C3' }} /> : <img src={Secret} alt="Secret" style={{ width: '17.35px', height: '11.59px', color: '#8D92C3' }} />)}
                                placeholder="Enter password"
                            />
                        </FormItem>

                        <FormItem
                            name="confirm"
                            dependencies={['password']}
                            rules={[
                                ({ getFieldValue }) => ({
                                    validator(_, value) {

                                        if (!value || getFieldValue('password') === value) {
                                            // console.log(value);
                                            if (value !== '') {
                                                setValidatePasswordmatch(true)
                                            }
                                            return Promise.resolve();
                                        }
                                        setValidatePasswordmatch(false)
                                        return Promise.resolve();
                                    },
                                }),
                            ]}

                        >
                            <Inputpass
                                style={{ height: '40px', border: '1px solid #DFDFF4', borderRadius: '6px' }}
                                prefix={<img src={Lock} alt="Lock" style={{ width: '13px', height: '16px' }} />}
                                iconRender={visible => (visible ? <img src={Opensec} alt="Secret" style={{ width: '17.35px', height: '11.59px', color: '#8D92C3' }} /> : <img src={Secret} alt="Secret" style={{ width: '17.35px', height: '11.59px', color: '#8D92C3' }} />)}
                                placeholder="Confirm password"
                                onChange={(event) => {
                                    // console.log(event.target.value);
                                    if (event.target.value === '') {
                                        setValidatePasswordmatch(false)
                                        setEmptyinput2(true)
                                    } else {
                                        setEmptyinput2(false)
                                    }
                                    if (validateUppertext === undefined) {
                                        setValidateUppertext(false)
                                    }
                                    if (validateLowertext === undefined) {
                                        setValidateLowertext(false)
                                    }
                                    if (validateNumber === undefined) {
                                        setValidateNumber(false)
                                    }
                                    if (validateMintext === undefined) {
                                        setValidateMintext(false)
                                    }
                                    // if(validateUppertext === undefined && validateLowertext === undefined && validateNumber === undefined ){}

                                }}
                            />
                        </FormItem>
                        <Form.Item style={{ marginBottom: '15px' }}>
                            <ButtonSubmit htmlType="submit" disabled={!(validateUppertext && validateLowertext && validateNumber && validateMintext && validatePasswordmatch && validateEngliseletter)}>Set Password</ButtonSubmit>
                        </Form.Item>
                    </Form>
                </FormBox>
                <HintBox>
                    <Ulhint>
                        <p style={{ color: validateEngliseletter ? 'green' : validateEngliseletter === undefined ? '#767481' : emptyinput1 === true && emptyinput2 === true ? '#767481' : 'red' }}>
                            {isCheckicon(validateEngliseletter)} Password contain at characters English only
                            </p>
                        <p style={{ color: validateUppertext ? 'green' : validateUppertext === undefined ? '#767481' : emptyinput1 === true && emptyinput2 === true ? '#767481' : 'red' }}>{isCheckicon(validateUppertext)} Password contain at least 1 UPPERCASE letter</p>
                        <p style={{ color: validateLowertext ? 'green' : validateLowertext === undefined ? '#767481' : emptyinput1 === true && emptyinput2 === true ? '#767481' : 'red' }}>{isCheckicon(validateLowertext)} Password contain at least 1 lowercase letter</p>
                        <p style={{ color: validateNumber ? 'green' : validateNumber === undefined ? '#767481' : emptyinput1 === true && emptyinput2 === true ? '#767481' : 'red' }}>{isCheckicon(validateNumber)} Password contain at least 1 number</p>
                        <p style={{ color: validateMintext ? 'green' : validateMintext === undefined ? '#767481' : emptyinput1 === true && emptyinput2 === true ? '#767481' : 'red' }}>{isCheckicon(validateMintext)} Password a minimum of 6 characters</p>
                        <p style={{ color: validatePasswordmatch ? 'green' : validatePasswordmatch === undefined ? '#767481' : emptyinput1 === true && emptyinput2 === true ? '#767481' : 'red' }}>{isCheckicon(validatePasswordmatch)} Password match</p>
                    </Ulhint>
                </HintBox>
            </Body>
            {
                hidefooter ?
                    <Footer>
                        <FooterText>
                            @ 2021 GOOCHAT
                </FooterText>
                    </Footer>
                    : ''
            }

        </Container>
    )

}

export default ResetPassword;