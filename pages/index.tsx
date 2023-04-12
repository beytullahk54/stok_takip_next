import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Delete from '@mui/icons-material/Delete';
import Update from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import {useEffect, useState} from "react";
import axios from "axios";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";

/*
function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
) {
    return { name, calories, fat, carbs };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3)
];*/

export default function ButtonAppBar() {

    const [rows,setRows] = useState([])
    const [urunAdi,setUrunAdi] = useState("")
    const [seciliId,setSeciliId] = useState(0)
    const [urunFiyati,setUrunFiyati] = useState("")
    const [urunStok,setUrunStok] = useState("")
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {

        setOpen(true);
        setSeciliId(0)
        setUrunAdi("")
        setUrunFiyati("")
        setUrunStok("")
    };
    const handleClickUpdate = (row) => {
        setSeciliId(row.id)
        setUrunAdi(row.urun_adi)
        setUrunFiyati(row.urun_fiyati)
        setUrunStok(row.urun_stok)
        setOpen(true);
    };
    const create = () => {
        if(seciliId != 0 ){

            axios.post("http://stoktakip-api.test/api/stoktakip/update",{"id":seciliId,"urun_adi":urunAdi,"urun_fiyati":urunFiyati,"urun_stok":urunStok,"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9zdG9rdGFraXAtYXBpLnRlc3RcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2ODEyNTczOTYsImV4cCI6MTY4MTI2MDk5NiwibmJmIjoxNjgxMjU3Mzk2LCJqdGkiOiJHN0FjMG9kb2t6Szd2eDVuIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.-xln6m5pWXvF5M_fYPBX25vfvRPS618x85A1uYhRdcE"}).then(res=>{
                get()
            })
        }else {
            axios.post("http://stoktakip-api.test/api/stoktakip/create", {
                "urun_adi": urunAdi,
                "urun_fiyati": urunFiyati,
                "urun_stok": urunStok,
                "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9zdG9rdGFraXAtYXBpLnRlc3RcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2ODEyNTczOTYsImV4cCI6MTY4MTI2MDk5NiwibmJmIjoxNjgxMjU3Mzk2LCJqdGkiOiJHN0FjMG9kb2t6Szd2eDVuIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.-xln6m5pWXvF5M_fYPBX25vfvRPS618x85A1uYhRdcE"
            }).then(res => {
                get()
            })
        }

    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(()=>{
        get()
    },[])

    function get(){
        axios.post("http://stoktakip-api.test/api/stoktakip/get").then(res=>{
            console.log(res)
            setRows(res.data)
        })
    }

    function deleteF(id){
        axios.post("http://stoktakip-api.test/api/stoktakip/delete",{"id":id}).then(res=>{
            console.log(res)
            get()
        })
    }

  return (
    <>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Kodlooper
                </Typography>
              </Toolbar>
            </AppBar>
          </Box><br/>
        <Container maxWidth="lg">
            <Button variant="outlined" onClick={handleClickOpen}>
                Yeni Ürün Oluştur
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Ürün Oluştur</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ürün bilgilerini giriniz
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Ürün Adı Giriniz"
                        type="email"
                        onChange={(evt) => setUrunAdi(evt.target.value)}
                        fullWidth
                        value={urunAdi}
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        value={urunFiyati}

                        label="Ürün Fiyatı Giriniz"
                        type="email"
                        onChange={(evt) => setUrunFiyati(evt.target.value)}
                        fullWidth
                        variant="standard"
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        value={urunStok}

                        label="Ürün Adeti Giriniz"
                        type="email"
                        onChange={(evt) => setUrunStok(evt.target.value)}
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>İptal</Button>
                    <Button onClick={create}>
                        {seciliId==0 && <>Oluştur</> }
                        {seciliId!=0 && <>Güncelle</> }
                    </Button>
                </DialogActions>
            </Dialog>
        </Container><br/>
            <Container maxWidth="lg">
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Ürün Adı</TableCell>
                        <TableCell align="right">Ürün Fiyatı</TableCell>
                        <TableCell align="right">Ürün Stoğu</TableCell>
                        <TableCell align="right">Ayarlar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.urun_adi}
                            </TableCell>
                            <TableCell align="right">{row.urun_fiyati}</TableCell>
                            <TableCell align="right">{row.urun_stok}</TableCell>
                            <TableCell align="right">
                                <Delete onClick={()=>deleteF(row.id)}></Delete>
                                <Update onClick={()=>handleClickUpdate(row)}></Update>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Container>
    </>
  );
}
