/**
 * OVERVIEW: componente dedicata alla barra di navigazione 
 */
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import SelectAccount from "./SelectAccount";
import { useState } from "react";
import "../App.css"
function NavBar() {

    const [isLogged, setIsLogged] = useState(false);

    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;


    // Funzione di callback per aggiornare lo stato nel padre
    const updateSharedState = (newValue: boolean) => {
        setIsLogged(newValue);
    };

    if (user !== null && isLogged !== true) {
        setIsLogged(true)
    }
    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <Button color="inherit" component={Link} to="/"> The Web Book </Button>
                    </Typography>
                    {isLogged && (
                        <>
                            <SelectAccount nickName={user.nickName} icon={user.icon} updateLogged={updateSharedState} />
                            <div> {user.nickName}</div>
                        </>
                    )}
                    {!isLogged && (
                        <Button color="inherit" component={Link} to="/login">Accedi</Button>
                    )}
                    <Button color="inherit" component={Link} to="/upload">Carica File</Button>
                </Toolbar>
            </AppBar >
        </>
    );
}

export default NavBar;
