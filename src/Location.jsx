import { useEffect } from "react";
import React from 'react';
import { useState } from "react";

export default function Locatdect(){

    let[apii,setapii] = useState("");
    console.log(apii.data);
    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(pos=>{
            const {latitude, longitude} = pos.coords;
            console.log(latitude, longitude);
            let url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            async function apies(){
                try{
                    let appp = await axios.get(url);
                    setapii(appp);
                    
                }catch(err){
                    console.log(err);
                }
            }
            apies();
        })
    },[])
    return (
        <>
        </>
    )
}