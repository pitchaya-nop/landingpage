import React, { useState,useEffect } from 'react'
import { isIOS, isAndroid } from 'react-device-detect';
import { useHistory } from "react-router-dom";
const Groupchat = () => {

    let history = useHistory();
    const [token, setToken] = useState(new URLSearchParams(window.location.search).get('qrCode'))
    const CheckDevice = () => {
        if (isIOS || isAndroid) {
            if (isIOS) {
                    window.location.assign(`${process.env.REACT_APP_SCHEMA_DEEP}://${process.env.REACT_APP_DEEP_LINK}/group_invite?qrCode=${token}`)
                setTimeout(() => {
                    history.push({
                        pathname: "/welcome-goochat",
                    });
                }, 2000);
            }
            else {
                window.location.assign(`${process.env.REACT_APP_SCHEMA_DEEP}://${process.env.REACT_APP_DEEP_LINK}/group_invite?token=${token}`)
                setTimeout(() => {
                    history.push({
                        pathname: "/welcome-goochat",
                    });
                }, 2000);
            }
        } else {
            history.push({
                pathname: "/welcome-goochat",
            });
        }
    }

    useEffect(() => {
        setTimeout(() => {
            CheckDevice()
        }, 1000);
    }, [])
    return (
        <>

        </>
    )
}

export default Groupchat