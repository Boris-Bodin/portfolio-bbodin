import React from "react";
import {AppBar, Button, Toolbar} from "@mui/material";
import Link from "next/link";

export default function Page() {
    return <>
        <AppBar position={'static'}>
            <Toolbar>
                <Link href={'/'}>
                    <Button color='inherit'>Home</Button>
                </Link>
            </Toolbar>
        </AppBar>
        <h1 className='underline'>Hello! Env : {process.env['NEXT_PUBLIC_ENVIRONNEMENT']}</h1>
    </>;
}
