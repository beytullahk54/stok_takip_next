import {Button, Card, Container, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {width} from "@mui/system";

import {signIn,signOut} from "next-auth/react";
import axios from "axios";
import {useState} from "react";

const index = ()=>{
    const [email,setEmail] =useState("test@gmail.com");
    const [password,setPassword] =useState("test@22");

    const login=()=>{
        axios.post("http://stoktakip-api.test/api/auth/login",{email,password}).then(res=>{
            console.log(res)
            signIn('credentials', {callbackUrl: '/',access_token:res?.data?.access_token,name:"a",id:res?.data?.access_token})
        })
    }
    return(
        <>
            <Container maxWidth="sm" style={{position:"relative",marginTop:"10%"}}>
                <Card>
                    <Box sx={{ mb: 4, display: 'flex',  justifyContent: 'center' }}>

                        <Typography
                            variant='h6'
                            sx={{
                                mt:5,
                                lineHeight: 1,
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                fontSize: '1.5rem !important'
                            }}
                        >
                            Kodlooper
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 4,ml:5,mr:5, display: 'flex', alignItems: 'center', }}>

                        <TextField id="outlined-basic" value="test@gmail.com" onChange={evnt=>setEmail(evnt.target.value)} fullWidth label="Kullanıcı Adı" variant="outlined" />

                    </Box>
                    <Box sx={{ mb: 4,ml:5,mr:5, display: 'flex', alignItems: 'center', }}>

                        <TextField id="outlined-basic" value="test@22" onChange={evnt=>setPassword(evnt.target.value)}  fullWidth label="Şifre" variant="outlined" />

                    </Box>
                    <Box sx={{ mb: 4,ml:5,mr:5, display: 'flex', alignItems: 'center', }}>

                        <Button variant="outlined" fullWidth onClick={()=>login()}>Giriş Yap</Button>

                    </Box>

                </Card>
            </Container>
        </>)
}
export default index
