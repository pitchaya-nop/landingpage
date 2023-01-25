import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Webhook = () => {
    const query = new URLSearchParams(window.location.search);
    const webhookAction = query.get('webhookAction')
    const linktoken = query.get('linkToken')

    const [responsedata, setResponsedata] = useState()
    const getLinktoken = () => {
        axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/chat/oa/webhook/action`;
        axios({
            method: 'post',
            headers: {
                'Device-Id': '123444',
                'Platform': 'web',
                'Accept-Language': 'en',
                'App-version': '1.0.0',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NVVUlEIjoiYWFkZjg5MmQtYTExYS00MmYwLWJiNTEtMmYwYzhhNzAyODU0IiwiZGV2aWNlSUQiOiIxYzk4MDMwZWE2MTIyODBjIiwiZXhwIjoxNjkzMDQxMjY0LCJ1c2VySUQiOiI2MjllZmMwZGU1NGI5ZGEwYzQ2MTRhZTgifQ.yptZ0IzG_RoHCOdBVK_ZXjBJaJDAI9-XZkMvs5SpAo0`
            },
            data: {
                oaId: "630765874b03c9b064f8c45d",
                sessionId: "1cf25699-0883-4293-abc8-27c3ecfb0715",
                webhookAction: "linkAccount"
            }
        }).then((link) => {
            console.log(link);
        })
    }
    const authenWebhook = () => {
        axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/oa/webhook/account/link`;
        axios({
            method: 'post',
            headers: {
                'Device-Id': '123444',
                'Platform': 'web',
                'Accept-Language': 'en',
                'App-version': '1.0.0',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjcmVhdGVkVGltZSI6IjIwMjItMDgtMjUgMTI6MDU6MjciLCJvYUlkIjoiNjMwNzY1ODc0YjAzYzliMDY0ZjhjNDVkIn0.1VPrgPEmMbTS4wckwLlxbK-tiLv2VItE9wvMlP3_f-0`
            },
            data: {
                'linkToken': linktoken,
                'webhookAction': webhookAction
            }
        }).then((res) => {
            if (res.data.code === '0000') {
                setResponsedata(res.data.data)
            } else {
                alert('error')
            }
        })
    }
    useEffect(() => {
        // getLinktoken()
        if (linktoken && webhookAction) {
            authenWebhook()
        }
    }, [])
    // /oa/webhook/account/link

    // 1. linkToken
    // 2.webhookAction

    // "gochatId": "test1234",
    //   "displayName": "nutto",
    //   "countryCode": "TH",
    //   "dialCode": "+66",
    //   "mobile": "0922466714",
    //   "statusMessage": "My status",
    //   "email": "test.nutto@gmail.com",
    //   "birthday": "1994-01-07",
    //   "avatars": 
    //   {
    //     "thumbnail": "https://exmple.com/link",
    //     "medium": "https://exmple.com/link",
    //     "source": "https://exmple.com/link"
    //   }
    // "general": {
    //     "fullName": {
    //       "firstName": "test1",
    //       "lastName": "test2"
    //     },
    //     "addresses": [
    //       {
    //         "addressId": "60cb19cec9e53e1e9f4ecedd",
    //         "addressName": "nutto",
    //         "lat": 13.00000001,
    //         "lng": 13.00000001,
    //         "addressInformation": "PENTOR GROUP ซอย รามอินทรา 5 แยก 15 อนุสาวรีย์ เขตบางเขน กรุงเทพมหานคร"
    //       },
    //       {
    //         "addressId": "60cb19cec9e53e1e9f4ecedd",
    //         "addressName": "nutto",
    //         "lat": 13.00000001,
    //         "lng": 13.00000001,
    //         "addressInformation": "PENTOR GROUP ซอย รามอินทรา 5 แยก 15 อนุสาวรีย์ เขตบางเขน กรุงเทพมหานคร"
    //       }
    //     ],
    //     "options": [
    //       {
    //         "optionId": "60cb19cec9e53e1e9f4ecedd",
    //         "optionName": "bank account1",
    //         "optionCode": "001",
    //         "optionNo": "1273000180"
    //       }
    //     ]
    //   }
    return (
        <>
            { responsedata && <div>
                <h1>User information</h1>
                {responsedata &&
                    <>
                        {responsedata.gochatId ? <p>gochatid :{responsedata.gochatId}</p> : ''}
                        {responsedata.displayName ? <p>displayname :{responsedata.displayName}</p> : ''}
                        {responsedata.countryCode ? <p>country code :{responsedata.countryCode}</p> : ''}
                        {responsedata.dialCode ? <p>dialcode :{responsedata.dialCode}</p> : ''}
                        {responsedata.mobile ? <p>mobile :{responsedata.mobile}</p> : ''}
                        {responsedata.statusMessage ? <p>statusmessage :{responsedata.statusMessage}</p> : ''}
                        {responsedata.email ? <p>email :{responsedata.email}</p> : ''}
                        {responsedata.birthday ? <p>birthday :{responsedata.birthday}</p> : ''}
                        {/* { responsedata.avatars ? <div>
                        avatar path :
                        <p>{responsedata.avatars.thumbnail}</p>
                        <p>{responsedata.avatars.medium}</p>
                        <p>{responsedata.avatars.source}</p>
                    </div> : ''}
                    {
                        responsedata.general.fullName ? <div>
                            <p>{responsedata.general.fullName.firstName}</p>
                            <p>{responsedata.general.fullName.lastName}</p>
                        </div> : ''
                    }
                    {
                        responsedata.addresses.length > 0 ? <div>
                            {responsedata.addresses.map((item) => {
                                return <>
                                    <p>{item.addressId}</p>
                                    <p>{item.addressName}</p>
                                    <p>{item.lat}</p>
                                    <p>{item.lng}</p>
                                    <p>{item.addressInformation}</p>
                                </>
                            })}
                        </div> : ''
                    }
                    {
                        responsedata.options.length > 0 ?
                            <div>
                                {responsedata.options.map((item) => {
                                    return <>
                                        <p>{item.optionId}</p>
                                        <p>{item.optionName}</p>
                                        <p>{item.optionCode}</p>
                                        <p>{item.optionNo}</p>
                                    </>
                                })}
                            </div> : ''
                    } */}
                    </>}
            </div>}
        </>

    )
}

export default Webhook;