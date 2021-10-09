import React, { useEffect, useState } from 'react'
import axios from "axios";
import FacebookLogin from 'react-facebook-login';
import Facebook from './Facebook'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Follower from '../component/Follower';
import Inslight from '../component/Inslight';
import Hashid from '../component/HashId';
import GetId from '../component/GetId';
import UserInfo from '../component/UserInfo';

export default function Facebooklogin() {
    const [accessToken, setAccessToken] = useState([]);
    const [value, setValue] = useState('1');
    const [fBId, setFBid] = useState([]);
    const [id, setId] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const componentClicked = data => {
        // console.log("data", data)
    }
    const responseFacebook = response => {
        // console.log(response)
        setAccessToken(response.accessToken)
        console.log(response.accessToken)
    }

    useEffect(() => {
        sessionStorage.setItem('token', JSON.stringify(accessToken))
    }, [accessToken])
    // const user = JSON.parse(sessionStorage.getItem('token'));

    const Fbaccount = {
        method: 'GET',
        url: `https://graph.facebook.com/v11.0/me/accounts?access_token=${accessToken}`,
    };

    axios.request(Fbaccount).then(function (response) {
        const data = response.data
        // console.log(data.data[0].id)
        setFBid(data.data[0].id)
    }).catch(function (error) {
        console.error(error);
    });

    const Instaccount = {
        method: 'GET',
        url: `https://graph.facebook.com/v11.0/${fBId}?fields=instagram_business_account&access_token=${accessToken}`,
    };

    axios.request(Instaccount).then(function (response) {
        setId(response.data.instagram_business_account.id)
    }).catch(function (error) {
        console.error(error);
    });
    return (
        <div >
            <FacebookLogin
                appId="557380755473889"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} />

            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Item One" value="1" />
                            <Tab label="Item Two" value="2" />
                            <Tab label="Item Three" value="3" />
                            <Tab label="Item four" value="4" />
                            <Tab label="Item five" value="5" />
                            {/* <Tab label="Item six" value="6" /> */}
                        </TabList>
                    </Box>
                    <TabPanel value="1"><Facebook accesstoken={accessToken} userId={id} /></TabPanel>
                    <TabPanel value="2"><Follower accesstoken={accessToken} userId={id} /> </TabPanel>
                    <TabPanel value="3"><Inslight accesstoken={accessToken} userId={id} /></TabPanel>
                    <TabPanel value="4"><Hashid accesstoken={accessToken} /></TabPanel>
                    <TabPanel value="5"><UserInfo />welcome </TabPanel>
                    {/* <TabPanel value="6"><GetId accesstoken={accessToken} userId={id} /> </TabPanel> */}
                </TabContext>
            </Box>

        </div>

    );
}

