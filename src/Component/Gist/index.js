import React,{useEffect} from 'react';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import './index.module.css';
import classNames from 'classnames/bind';

import styles from './index.module.css';
const cx = classNames.bind(styles);
const GistMap = () => {
    let lati,longi;
    //throw error
    const errorCallback = e => {
        // document.getElementById('position').innerHTML = `錯誤碼： ${e.code}<br>錯誤訊息： ${e.message}`;
        alert(`錯誤碼： ${e.code}\n錯誤訊息： ${e.message}`);
    }
    const getIcon = (color) => {
        return new L.Icon({
            iconUrl: `https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        })
    }

    //取得自身位置
    let myMap;
    navigator.geolocation.getCurrentPosition(
        data=>{
            console.log('data',data);
            lati = data.coords.latitude;
            longi = data.coords.longitude;
            
            myMap = L.map(cx("myMap"),{
                center:[lati,longi], 
                zoom:17
            })
            //設定圖資來源：
            const OSMUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
            L.tileLayer(OSMUrl).addTo(myMap);
        },
        errorCallback,
        {
            enableHighAccuracy: false,
            timeout: 2000000000,
            maximumAge: 0,
        }
    );

    useEffect(()=>{
        try{
            //釘上自己位置的圖釘
            const pos = L.marker([lati,longi],{icon:getIcon('blue')}).addTo(myMap);
            pos.bindPopup(`您所在的位置`).openPopup(); 
        }catch(e){
            console.log(e);
        }
    },[]);
    
    return ( 
        <div id={cx('myMap')}></div>
    ); 
}
 
export default GistMap;