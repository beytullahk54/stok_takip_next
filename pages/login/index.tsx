import {Button, Card, Container, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {width} from "@mui/system";


const index = ()=>{
    const login=()=>{
        alert("başarılı")
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

                        <TextField id="outlined-basic" fullWidth label="Kullanıcı Adı" variant="outlined" />

                    </Box>
                    <Box sx={{ mb: 4,ml:5,mr:5, display: 'flex', alignItems: 'center', }}>

                        <TextField id="outlined-basic" fullWidth label="Şifre" variant="outlined" />

                    </Box>
                    <Box sx={{ mb: 4,ml:5,mr:5, display: 'flex', alignItems: 'center', }}>

                        <Button variant="outlined" fullWidth onClick={()=>login()}>Giriş Yap</Button>

                    </Box>

                </Card>
            </Container>
        </>)
}
export default index
