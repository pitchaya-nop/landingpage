import React, { useState, useEffect } from 'react'
import { isIOS, isAndroid } from 'react-device-detect';
import { useHistory } from "react-router-dom";


const Installed = () => {

    let history = useHistory();
    const [token, setToken] = useState(new URLSearchParams(window.location.search).get('token'))

    const CheckDevice = () => {
        if (isIOS || isAndroid) {
            if (isIOS) {
                window.location.assign(`${process.env.REACT_APP_SCHEMA_DEEP}://${process.env.REACT_APP_DEEP_LINK}/dev/recover?token=${token}`)

                setTimeout(() => {
                    history.push({
                        pathname: "/welcome-goochat",
                    });
                }, 2000);
            }
            else {
                window.location.assign(`${process.env.REACT_APP_SCHEMA_DEEP}://${process.env.REACT_APP_DEEP_LINK}/dev/recover?token=${token}`)
                // setTimeout(() => {
                //     history.push({
                //         pathname: "/recover",
                //         search: `?token=${token}`,
                //     });
                // }, 2000);
                setTimeout(() => {
                    history.push({
                        pathname: "/welcome-goochat",
                    });
                }, 2000);
            }
        } else {
            if (token) {

                history.push({
                    pathname: "/recover",
                    search: `?token=${token}`,
                });
            }
            // else {
            //     setTimeout(() => {
            //         history.push({
            //             pathname: "/welcome-goochat",
            //         });
            //     }, 2000);
            // }

        }
    }

    useEffect(() => {
        setTimeout(() => {
            CheckDevice()
        }, 1000);
    }, [])
    return (
        <></>
    )
}

export default Installed;