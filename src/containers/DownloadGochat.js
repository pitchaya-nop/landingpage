import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Form, Input, Button, Select, notification } from 'antd';
import { LoadingOutlined, ArrowRightOutlined, UnorderedListOutlined } from '@ant-design/icons'
import axios from 'axios';

import './DownloadGochat.scss'
import Frame from '../image/Frame.png';
import FrameMobile from '../image/FrameMobile.png';
import FrameMobile1 from '../image/FrameMobile1.png';
import FrameMobile2 from '../image/FrameMobile2.png';
import FrameMobile3 from '../image/FrameMobile3.png';
import LogoWelcome from '../image/Loggowelcome.png';
import Andriod from '../image/andriod.png';
import Ios from '../image/ios.png';


const Container = styled.div`
    height:100vh;
    width:100vw;
    background:#E5E5E5;
    overflow:auto;
    background:url(${Frame});
    background-repeat:no-repeat;
    background-size:cover;
    position:relative;
    .menu-top-bar{
        position:absolute;
        top:0;
        width:100%;
        background: linear-gradient(rgba(42,42,84,1), rgba(42,42,84,0));
        display:flex;
        justify-content:flex-end;
        a{
            color:#FCFCFE;
            padding:16px;
            font-size:20px;
            &:hover{
                color:#ffffff;
                font-weight:600
            }
        }
        @media screen and (max-width: 767px) {
            display:none
          }
    }
    @media screen and (max-width: 767px) {
        background-position:center
      }
`
const ContentBox = styled.div`
    width:100%;
    display:flex;
    margin-top:114px;
    

`
const IMGPhoneBox = styled.div`
    display:flex;
    flex:1;
    justify-content:center;
    padding-left:10%;
    img{
        width:470px;
        height:710px
    }
    @media screen and (width: 768px) {
        padding-left:0
      }
    @media screen and (max-width: 767px) {
        display:none;
      }
`
const DownloadButtonBox = styled.div`
    flex:1;
    @media screen and (max-width: 767px) {}
`
const DetailCompany = styled.div`
      width:520px;
    .title{
        font-size:48px;
        font-weight:700;
        color:#ffffff;
        display:block;
        margin-bottom:60px
    }
    .subtitle{
        font-size:30px;
        font-weight:700;
        color:#ffffff;
        display:block;
        margin-bottom:18px;
    }
    .paragraph-box{
        font-size:24px;
        color:#ffffff;
    }
    @media screen and (max-width: 767px) {
        width:100%;
        // text-align:center;
        padding:20px;
        .title{
            font-size:24px;
            font-weight:700;
            color:#ffffff;
            display:block;
            margin-bottom:60px
        }
        .subtitle{
            font-size:15px;
            font-weight:700;
            color:#ffffff;
            display:block;
            margin-bottom:18px;
        }
        .paragraph-box{
            font-size:12px;
            color:#ffffff;
        }
      }
`
const Paragraph = styled.p`
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 1px;
    color:#fff;
    margin-top:32px;
    @media screen and (max-width: 767px) {
        font-size:14px;
        line-height:16.71px;
        margin-bottom:0
      }
`
const DownloadButtonAction = styled.div`
    text-align:center;
    margin-top:94px;
    display:flex;
    justify-content: center;
    @media screen and (max-width: 767px) {
        margin-top:43px;
      }
`
const Detaildownload = styled.div`
      width:65%;
      text-align:center;
      margin-top:100px;
      @media screen and (max-width: 767px) {
        width:100%;
        margin-top:0;
      }
`
const LogoDownloadIos = styled.img`
      margin-right:12px;
      @media screen and (max-width: 767px) {
        width:125px
      }
`
const LogoDownloadAndriod = styled.img`
    @media screen and (max-width: 767px) {
        width:112px
    }
`
const Togglebutton = styled.button`
    @media screen and (max-width: 767px) {    
        right:0;
        transition:none
    }
        position: absolute; 
        right: -40px; 
        top:117px;
        writing-mode: vertical-rl;
        text-orientation: mixed; 
        transform: rotate(-90deg); 
        background: transparent; 
        padding: 5px; 
        color: #fff;
        padding:8px 20px; 
        border:1px solid #fff;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px; 
        border-bottom:0;
        font-size: 1.125rem; 
        transition:all 0.5s ease-in-out;
        cursor:pointer;
        &:hover{
            color:#fff !important;
            text-decoration: none;
        }
`
const Togglebuttonmobile = styled.button`
    display:none;
    @media screen and (max-width: 767px) {
        display:unset;
        position:absolute;
        border:none;
        background:transparent;
        top:2.5rem;
        right:0.5rem;
    }
`
const Formcontactus = styled.div`
    @media screen and (max-width: 767px) {
        width:100%;
    }
    width:708px;
    background:transparent;
    overflow:auto;
    transition:all 0.5s ease-in-out;
    .container-form{
        position:relative;
        @media screen and (max-width: 767px) {
            padding:1rem
        }
        .contact-form{
            @media screen and (max-width: 767px) {
                width:100%;
                margin:auto;
            }
            width:500px;
            .ant-form-item textarea.ant-input {
                min-height: 129px;
            }
            .ant-input{
                // padding:12px 13px
                background:transparent;
                color:#ffffff !important;
                
            }
            .ant-select-selection-placeholder {
                color: #ffffff;
              }
              .ant-select-arrow{
                  color:#ffffff
              }
            .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
                // height: 48px;
                // padding: 8px 11px;
                background:transparent;
                color:#ffffff 
            }
            .ant-form-vertical .ant-form-item-label > label, .ant-col-24.ant-form-item-label > label, .ant-col-xl-24.ant-form-item-label > label {
                color:#ffffff;
                font-weight: 600;
                font-size: 15px;
            }
            
            .submitbutton{
                Width:300px;
                Height:46px;
                border-radius: 30px;
                padding: 12px, 18px, 12px, 18px;
                background: transparent;
                color:white
            }
        }
    }
`
const DownloadGochat = () => {
    const menuitems = [
        { key: 0, label: 'Home' },
        { key: 1, label: 'Service' },
        { key: 2, label: 'Contact Us' },
        { key: 3, label: 'About Us' }
    ]
    const [form] = Form.useForm();
    const [selectmenu, setSelectmenu] = useState(0)
    const [toggle, setToggle] = useState(false)
    const [loading, setLoading] = useState(false)
    const [datacontact, setDatacontact] = useState({
        email: '',
        name: '',
        topic: '',
        detail: ''
    })
    const topics = [
        { label: 'General questions', value: 'General questions' },
        { label: 'Support and help', value: 'Support and help' },
        { label: 'Suggestion', value: 'Suggestion' }
    ];

    const toggleContact = () => {
        setToggle(!toggle)
    }
    const topicSelect = (event) => {
        console.log(event);
        setDatacontact({ ...datacontact, topic: event })
    }
    const openNotification = (type, text) => {
        notification['success']({
            message: 'Successfully',
            placement: 'topRight',
            duration: 2,
            closeIcon: true,

        });
    };
    const onFinish = (values) => {
        setLoading(true)
        console.log(datacontact);
        axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/support/contact`;
        axios({
            method: 'post',
            headers: {
                'Device-Id': '123444',
                'Platform': 'ios',
                'Accept-Language': 'en',
                'App-version': '1.0.0',
                'Os-version': '15.0',
            },
            data: {
                email: datacontact.email,
                fullName: datacontact.name,
                topic: datacontact.topic,
                messageDetails: datacontact.detail
            }
        })
            .then(function (response) {
                console.log(response);
                if (response.data.code === '0000') {
                    setTimeout(() => {
                        setLoading(false)
                        openNotification()
                        setDatacontact({
                            ...datacontact,
                            email: '',
                            name: '',
                            topic: '',
                            detail: ''
                        })
                        form.setFieldsValue({
                            email: '',
                            name: '',
                            topic: '',
                            message: ''
                        });
                    }, 1000);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    };

    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
    };
    const changeSelectmenu = (menu) => {
        setSelectmenu(menu)
    }
    const togglemobile = () => {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    const activeMenu = () => {
        switch (selectmenu) {
            case 0:
                return 'Home'
            case 1:
                return 'Service'
            case 2:
                return 'Contact Us'
            case 3:
                return 'About Us'
        }
    }
    return (
        <>
            <Container>
                <div className="menu-top-bar">
                    {
                        menuitems.map((item) => {
                            return <a key={item.key} onClick={() => changeSelectmenu(item.key)} style={{ color: selectmenu === item.key && '#ffffff', fontWeight: selectmenu === item.key && '600', borderBottom: selectmenu === item.key && '2px solid #ffffff' }}>{item.label}</a>
                        })
                    }
                </div>
                <div className="mobile-container">
                    <div className="topnav">
                        <a onClick={() => changeSelectmenu(0)} className="active">{activeMenu()}</a>
                        <div id="myLinks">
                            <a className={selectmenu === 0 ? 'selected-menu' : ''} onClick={() => { changeSelectmenu(0); togglemobile() }}>Home</a>
                            <a className={selectmenu === 1 ? 'selected-menu' : ''} onClick={() => { changeSelectmenu(1); togglemobile() }}>Service</a>
                            <a className={selectmenu === 2 ? 'selected-menu' : ''} onClick={() => { changeSelectmenu(2); togglemobile() }}>Contact Us</a>
                            <a className={selectmenu === 3 ? 'selected-menu' : ''} onClick={() => { changeSelectmenu(3); togglemobile() }}>About Us</a>
                        </div>
                        <a href="javascript:void(0);" className="icon" onClick={togglemobile}>
                            <UnorderedListOutlined />
                        </a>
                    </div>
                </div>

                <ContentBox>
                    <IMGPhoneBox>
                        {selectmenu === 0 && <img src={FrameMobile} />}
                        {selectmenu === 1 &&<img src={FrameMobile1} />}
                        {selectmenu === 2 &&<img src={FrameMobile2} />}
                        {selectmenu === 3 &&<img src={FrameMobile3} />}
                    </IMGPhoneBox>
                    <DownloadButtonBox>
                        {
                            selectmenu === 0 &&
                            <Detaildownload >
                                <img style={{ width: '135px', height: '135px' }} src={LogoWelcome} />
                                
                                <Paragraph>The new social network powerful, <br />fast, private, secure and easy to use.</Paragraph>
                                <DownloadButtonAction>
                                    <a href={'https://play.google.com/store/apps/details?id=com.snocko.goochat'}>
                                        <LogoDownloadIos src={Andriod} />
                                    </a>
                                    <a href="#" onClick={() => alert('Coming soon...')}>
                                        <LogoDownloadAndriod src={Ios} />
                                    </a>
                                </DownloadButtonAction>
                            </Detaildownload>
                        }
                        {
                            selectmenu === 1 &&
                            <DetailCompany>
                                <span className="title">Service</span>
                                <span className="subtitle">GooChat Business Account</span>
                                <div className="paragraph-box">
                                    <span>GooChat Business Account for brands and companies. You can use it to send general information, sales, and marketing activities, and special promotions to your customers. Example Greeting messages, rich menu, chat private and broadcast to all customers, etc.</span>
                                </div>
                            </DetailCompany>
                        }
                        {
                            selectmenu === 2 &&
                            <DetailCompany>
                                <Formcontactus >
                                    <div className="container-form">
                                        <div className="contact-form">
                                            <h1 className="title">Contact Us</h1>
                                            <Form
                                                form={form}
                                                name="basic"
                                                layout="vertical"
                                                onFinish={onFinish}
                                                onFinishFailed={onFinishFailed}
                                                autoComplete="off"
                                            >
                                                <Form.Item
                                                    label="Email address"
                                                    name="email"
                                                    rules={[
                                                        {
                                                         type:'email',
                                                         message:''   
                                                        },
                                                        {
                                                            required: true,
                                                            message: ''
                                                        }]}
                                                >
                                                    <Input value={datacontact.email} onChange={(e) => setDatacontact({ ...datacontact, email: e.target.value })} />
                                                </Form.Item>

                                                <Form.Item
                                                    label="Name"
                                                    name="name"
                                                    rules={[{ required: true, message: '' }]}
                                                >
                                                    <Input value={datacontact.name} onChange={(e) => setDatacontact({ ...datacontact, name: e.target.value })} />
                                                </Form.Item>
                                                <Form.Item name="topic" label="Topic" rules={[{ required: true, message: '' }]}>
                                                    <Select options={topics} onChange={topicSelect} placeholder="Select Topic" />
                                                </Form.Item>
                                                <Form.Item
                                                    name="message"
                                                    label="Message detail"
                                                    style={{ marginBottom: '50px' }}
                                                    rules={[{ required: true, message: '' }]}
                                                >
                                                    <Input.TextArea value={datacontact.detail} onChange={(e) => setDatacontact({ ...datacontact, detail: e.target.value })} />
                                                </Form.Item>
                                                <Form.Item style={{ textAlign: 'center' }}>
                                                    <Button className="submitbutton" htmlType="submit" disabled={loading}>
                                                        {loading ? <LoadingOutlined /> : ''}Send
                                                    </Button>
                                                </Form.Item>
                                            </Form>
                                        </div>
                                    </div>
                                </Formcontactus>
                            </DetailCompany>
                        }
                        {
                            selectmenu === 3 &&
                            <DetailCompany>
                                <span className="title">About Us</span>
                                <span className="subtitle">GooChat Business Account</span>
                                <div className="paragraph-box">
                                    <p>
                                        Other Information technology service activities N.E.C.
                                        An example providing a mobile chat and media sharing service through digital platforms.
                                    </p>
                                    <p>
                                        NO. 3 JALAN BK 5B/4B, BANDAR KINRARA 5B 47180 PUCHONG SELANGOR MALAYSIA
                                    </p>
                                    <p>
                                        Service Mail : goochat-service@goochat.net
                                    </p>
                                </div>
                            </DetailCompany>
                        }


                    </DownloadButtonBox>
                </ContentBox>
            </Container>

        </>

    )

}

export default DownloadGochat