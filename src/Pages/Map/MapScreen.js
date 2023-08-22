import React from "react";
import mapOne from "../../Assets/mapOne.jpeg";
import mapTwo from "../../Assets/mapTwo.jpeg";
import mapThree from "../../Assets/mapThree.jpeg";

import "./MapScreen.css";

 
import Navbar from "../../Components/Navbar/Navbar";
import Pin from "./Pin.js";
import PageTitle from "../../Components/PageTitle/PageTitle";
 

function MapScreen() {

  const [pointerVisible, setPointerVisible] = React.useState(false)

  const [position, setPosition] = React.useState({x:0, y:0})

  const [search, setSearch] = React.useState('')

  const onChangeSearch=(e)=>{
   
    setSearch(e.target.value)

    handleSearch(e.target.value)

  }

  const handleSearch=(search)=>{
    if(search===''){
      setPointerVisible(false)
       
    }
     
    else{
      setPointerVisible(true)
    }

    if(search.toLowerCase()==='g32'){
      setPointerVisible(true)
      setPosition({x:24, y:2})
    }

    

    else if(search.toLowerCase()==='g19'){
      setPointerVisible(true)
      setPosition({x:26, y:4})
    }

    else if(search.toLowerCase()==='g18'){
      setPointerVisible(true)
      setPosition({x:30, y:8})
    }

    else if(search.toLowerCase()==='student services'){
      setPointerVisible(true)
      setPosition({x:32, y:11.5})
    }

    else if(search.toLowerCase()==='reception'){
      setPointerVisible(true)
      setPosition({x:33, y:14})
    }

    else if(search.toLowerCase()==='food court'){
      setPointerVisible(true)
      setPosition({x:41, y:12.5})
    }

    else if(search.toLowerCase()==='g37'){
      setPointerVisible(true)
      setPosition({x:45, y:17.5})
    }

    else if(search.toLowerCase()==='g44'){
      setPointerVisible(true)
      setPosition({x:50, y:15.5})
    }

    else if(search.toLowerCase()==='g46a'){
      setPointerVisible(true)
      setPosition({x:53.5, y:16.8})
    }

    else if(search.toLowerCase()==='g47'){
      setPointerVisible(true)
      setPosition({x:57.5, y:16})
    }

    else if(search.toLowerCase()==='g46'){
      setPointerVisible(true)
      setPosition({x:57.5, y:17.8})
    }

    else if(search.toLowerCase()==='g50'){
      setPointerVisible(true)
      setPosition({x:68, y:17.3})
    }


    else if(search.toLowerCase()==='g50a'){
      setPointerVisible(true)
      setPosition({x:70, y:16})
    }

    else if(search.toLowerCase()==='g60'){
      setPointerVisible(true)
      setPosition({x:74.5, y:21})
    }

    else if(search.toLowerCase()==='g54'){
      setPointerVisible(true)
      setPosition({x:70, y:23})
    }

    else if(search.toLowerCase()==='g53'){
      setPointerVisible(true)
      setPosition({x:62, y:23.7})
    }

    else if(search.toLowerCase()==='g52'){
      setPointerVisible(true)
      setPosition({x:61, y:21.7})
    }

    else if(search.toLowerCase()==='g48'){
      setPointerVisible(true)
      setPosition({x:57, y:23.7})
    }

    else if(search.toLowerCase()==='g43'){
      setPointerVisible(true)
      setPosition({x:47, y:20})
    }

    else if(search.toLowerCase()==='g41'){
      setPointerVisible(true)
      setPosition({x:40, y:20.3})
    }


    else if(search.toLowerCase()==='g49'){
      setPointerVisible(true)
      setPosition({x:58.5, y:20})
    }


    else if(search.toLowerCase()==='g51'){
      setPointerVisible(true)
      setPosition({x:61.8, y:20})
    }

    else if(search.toLowerCase()==='flagship'){
      setPointerVisible(true)
      setPosition({x:15, y:3})
    }

    else if(search.toLowerCase()==='g24'){
      setPointerVisible(true)
      setPosition({x:16, y:6})
    }

    else if(search.toLowerCase()==='g17' || search.toLowerCase()==='conference 3'){
      setPointerVisible(true)
      setPosition({x:19, y:8.5})
    }

    else if(search.toLowerCase()==='g15'){
      setPointerVisible(true)
      setPosition({x:19, y:10.2})
    }

    else if(search.toLowerCase()==='g16'){
      setPointerVisible(true)
      setPosition({x:23, y:9})
    }

    else if(search.toLowerCase()==='g14'){
      setPointerVisible(true)
      setPosition({x:21, y:12.2})
    }

    else if(search.toLowerCase()==='g12'){
      setPointerVisible(true)
      setPosition({x:24, y:11.5})
    }

    else if(search.toLowerCase()==='g01'){
      setPointerVisible(true)
      setPosition({x:21.5, y:13.3})
    }

    else if(search.toLowerCase()==='g11'){
      setPointerVisible(true)
      setPosition({x:25.5, y:12.5})
    }


    else if(search.toLowerCase()==='gym'){
      setPointerVisible(true)
      setPosition({x:17, y:36})
    }

    else if(search.toLowerCase()==='gym' || search.toLowerCase()==='111'){
      setPointerVisible(true)
      setPosition({x:17, y:36})
    }

    else if(search.toLowerCase()==='107'){
      setPointerVisible(true)
      setPosition({x:19, y:42})
    }

    else if(search.toLowerCase()==='106'){
      setPointerVisible(true)
      setPosition({x:21, y:43.5})
    }

    else if(search.toLowerCase()==='105'){
      setPointerVisible(true)
      setPosition({x:22.5, y:45.5})
    }

    else if(search.toLowerCase()==='104'){
      setPointerVisible(true)
      setPosition({x:26, y:45.3})
    }

    else if(search.toLowerCase()==='120'){
      setPointerVisible(true)
      setPosition({x:43.5, y:53})
    }

    else if(search.toLowerCase()==='124'){
      setPointerVisible(true)
      setPosition({x:52, y:54.5})
    }

    else if(search.toLowerCase()==='125'){
      setPointerVisible(true)
      setPosition({x:58, y:53.5})
    }

    else if(search.toLowerCase()==='127' || search.toLowerCase()==='hub 5' ){
      setPointerVisible(true)
      setPosition({x:62, y:53.5})
    }

    else if(search.toLowerCase()==='131'){
      setPointerVisible(true)
      setPosition({x:67, y:53.5})
    }

    else if(search.toLowerCase()==='134a' ){
      setPointerVisible(true)
      setPosition({x:61.9, y:54.6})
    }

    else if(search.toLowerCase()==='134'){
      setPointerVisible(true)
      setPosition({x:66, y:55})
    }


    else if(search.toLowerCase()==='130'){
      setPointerVisible(true)
      setPosition({x:69, y:50})
    }

    else if(search.toLowerCase()==='129'){
      setPointerVisible(true)
      setPosition({x:62.5, y:49})
    }

    else if(search.toLowerCase()==='128'){
      setPointerVisible(true)
      setPosition({x:62.5, y:50.8})
    }

    else if(search.toLowerCase()==='126'){
      setPointerVisible(true)
      setPosition({x:56.2, y:49})
    }

    else if(search.toLowerCase()==='122'){
      setPointerVisible(true)
      setPosition({x:52.5, y:48.8})
    }

    else if(search.toLowerCase()==='121' || search.toLowerCase()==='staff centre 2'){
      setPointerVisible(true)
      setPosition({x:48, y:48.5})
    }

    else if(search.toLowerCase()==='learning core 1'){
      setPointerVisible(true)
      setPosition({x:44, y:45.5})
    }

    else if( search.toLowerCase()==='117' || search.toLowerCase()==='staff centre 1'){
      setPointerVisible(true)
      setPosition({x:34, y:45})
    }

    else if(search.toLowerCase()==='117a'){
      setPointerVisible(true)
      setPosition({x:30.8, y:43.6})
    }

    else if(search.toLowerCase()==='117b'){
      setPointerVisible(true)
      setPosition({x:33.5, y:43})
    }

    else if(search.toLowerCase()==='115'){
      setPointerVisible(true)
      setPosition({x:28, y:37.5})
    }

    else if(search.toLowerCase()==='220'){
      setPointerVisible(true)
      setPosition({x:16.5, y:68.5})
    }

    else if(search.toLowerCase()==='219'){
      setPointerVisible(true)
      setPosition({x:16.5, y:69.6})
    }

    else if(search.toLowerCase()==='218'){
      setPointerVisible(true)
      setPosition({x:17, y:71})
    }

    else if(search.toLowerCase()==='217'){
      setPointerVisible(true)
      setPosition({x:17, y:72})
    }

    else if(search.toLowerCase()==='216'){
      setPointerVisible(true)
      setPosition({x:17, y:73.5})
    }

    else if(search.toLowerCase()==='215'){
      setPointerVisible(true)
      setPosition({x:18.2, y:74.8})
    }

    else if(search.toLowerCase()==='214'){
      setPointerVisible(true)
      setPosition({x:22.8, y:74})
    }

    else if(search.toLowerCase()==='212'){
      setPointerVisible(true)
      setPosition({x:23.5, y:75})
    }

    else if(search.toLowerCase()==='211'){
      setPointerVisible(true)
      setPosition({x:19.5, y:75.5})
    }

    else if(search.toLowerCase()==='210'){
      setPointerVisible(true)
      setPosition({x:25, y:76})
    }

    else if(search.toLowerCase()==='209'){
      setPointerVisible(true)
      setPosition({x:20.7, y:76.5})
    }


    else if(search.toLowerCase()==='207'){
      setPointerVisible(true)
      setPosition({x:21, y:77.5})
    }

    else if(search.toLowerCase()==='208'){
      setPointerVisible(true)
      setPosition({x:24.8, y:77})
    }


    else if(search.toLowerCase()==='205'){
      setPointerVisible(true)
      setPosition({x:22, y:79})
    }

    else if(search.toLowerCase()==='206'){
      setPointerVisible(true)
      setPosition({x:26.5, y:78})
    }

    else if(search.toLowerCase()==='204'){
      setPointerVisible(true)
      setPosition({x:27, y:79})
    }

    else if(search.toLowerCase()==='232'){
      setPointerVisible(true)
      setPosition({x:26, y:82.8})
    }

    else if(search.toLowerCase()==='234b'){
      setPointerVisible(true)
      setPosition({x:27, y:84})
    }

    else if(search.toLowerCase()==='234'){
      setPointerVisible(true)
      setPosition({x:29.3, y:83.6})
    }

    else if(search.toLowerCase()==='234a'){
      setPointerVisible(true)
      setPosition({x:29, y:84.8})
    }

    else if(search.toLowerCase()==='235d'){
      setPointerVisible(true)
      setPosition({x:31.5, y:84.5})
    }

    else if(search.toLowerCase()==='235'){
      setPointerVisible(true)
      setPosition({x:32.8, y:85.5})
    }

    else if(search.toLowerCase()==='235c'){
      setPointerVisible(true)
      setPosition({x:31, y:86})
    }

    else if(search.toLowerCase()==='235b'){
      setPointerVisible(true)
      setPosition({x:33.8, y:86.5})
    }

    else if(search.toLowerCase()==='237c'){
      setPointerVisible(true)
      setPosition({x:35.5, y:87})
    }
    
    else if(search.toLowerCase()==='237b'){
      setPointerVisible(true)
      setPosition({x:38, y:87.5})
    }

    else if(search.toLowerCase()==='237'){
      setPointerVisible(true)
      setPosition({x:38.2, y:86.5})
    }

    else if(search.toLowerCase()==='238'){
      setPointerVisible(true)
      setPosition({x:37, y:84.5})
    }


    else if(search.toLowerCase()==='233'){
      setPointerVisible(true)
      setPosition({x:31, y:82.5})
    }

    else if(search.toLowerCase()==='239'){
      setPointerVisible(true)
      setPosition({x:42, y:87.5})
    }

    else if(search.toLowerCase()==='244'){
      setPointerVisible(true)
      setPosition({x:44.5, y:87.5})
    }

    else if(search.toLowerCase()==='242'){
      setPointerVisible(true)
      setPosition({x:44.8, y:85.3})
    }

    else if(search.toLowerCase()==='243'){
      setPointerVisible(true)
      setPosition({x:47, y:85.3})
    }

    else if(search.toLowerCase()==='246'){
      setPointerVisible(true)
      setPosition({x:51, y:85.5})
    }

    else if(search.toLowerCase()==='247'){
      setPointerVisible(true)
      setPosition({x:55, y:85.8})
    }

    else if(search.toLowerCase()==='248'){
      setPointerVisible(true)
      setPosition({x:57.5, y:86})
    }


    else if(search.toLowerCase()==='252'){
      setPointerVisible(true)
      setPosition({x:61, y:86.3})
    }


    else if(search.toLowerCase()==='254'){
      setPointerVisible(true)
      setPosition({x:63.2, y:86.3})
    }

    else if(search.toLowerCase()==='255'){
      setPointerVisible(true)
      setPosition({x:64, y:86.3})
    }

    else if(search.toLowerCase()==='256'){
      setPointerVisible(true)
      setPosition({x:67, y:86.5})
    }

    else if(search.toLowerCase()==='245'){
      setPointerVisible(true)
      setPosition({x:48, y:87.5})
    }


    else if(search.toLowerCase()==='245a'){
      setPointerVisible(true)
      setPosition({x:51.3, y:87.5})
    }

    else if(search.toLowerCase()==='249'){
      setPointerVisible(true)
      setPosition({x:54, y:88})
    }


    else if(search.toLowerCase()==='250'){
      setPointerVisible(true)
      setPosition({x:58, y:88})
    }


    else if(search.toLowerCase()==='251'){
      setPointerVisible(true)
      setPosition({x:60.8, y:88})
    }


    else if(search.toLowerCase()==='253'){
      setPointerVisible(true)
      setPosition({x:62.9, y:88})
    }

    else if(search.toLowerCase()==='257'){
      setPointerVisible(true)
      setPosition({x:65.5, y:88.3})
    }

    else if(search.toLowerCase()==='258'){
      setPointerVisible(true)
      setPosition({x:68.8, y:88.5})
    }

    else if(search.toLowerCase()==='262'){
      setPointerVisible(true)
      setPosition({x:71, y:84.5})
    }

    else if(search.toLowerCase()==='263'){
      setPointerVisible(true)
      setPosition({x:71, y:83.5})
    }

    else if(search.toLowerCase()==='264'){
      setPointerVisible(true)
      setPosition({x:67, y:83.5})
    }

    else if(search.toLowerCase()==='265'){
      setPointerVisible(true)
      setPosition({x:63.5, y:83.2})
    }

    else if(search.toLowerCase()==='266'){
      setPointerVisible(true)
      setPosition({x:60, y:83.2})
    }

    else if(search.toLowerCase()==='267'){
      setPointerVisible(true)
      setPosition({x:57, y:83})
    }

    else if(search.toLowerCase()==='268'){
      setPointerVisible(true)
      setPosition({x:53.5, y:82.5})
    }

    else if(search.toLowerCase()==='269' || search.toLowerCase()==='staff centre 4' ){
      setPointerVisible(true)
      setPosition({x:49, y:82.5})
    }

    else if(search.toLowerCase()==='learning core 2' ){
      setPointerVisible(true)
      setPosition({x:46, y:78})
    }

    else if(search.toLowerCase()==='230' || search.toLowerCase()==='staff centre 3' ){
      setPointerVisible(true)
      setPosition({x:34.5, y:78})
    }

    else if(search.toLowerCase()==='229'){
      setPointerVisible(true)
      setPosition({x:33.5, y:76.2})
    }

    else if(search.toLowerCase()==='228'){
      setPointerVisible(true)
      setPosition({x:31.8, y:74.5})
    }
    
    else if(search.toLowerCase()==='227'){
      setPointerVisible(true)
      setPosition({x:30.2, y:73.3})
    }

    else if(search.toLowerCase()==='226'){
      setPointerVisible(true)
      setPosition({x:29, y:72})
    }

    else if(search.toLowerCase()==='225'){
      setPointerVisible(true)
      setPosition({x:27.2, y:70.8})
    }

    else if(search.toLowerCase()==='225b'){
      setPointerVisible(true)
      setPosition({x:29.8, y:70.3})
    }

    else if(search.toLowerCase()==='225a'){
      setPointerVisible(true)
      setPosition({x:29.2, y:69.7})
    }

    else if(search.toLowerCase()==='224'){
      setPointerVisible(true)
      setPosition({x:26.6, y:70.2})
    }



    
    else{
      setPointerVisible(false)
    }
  }
   

  return (
    <div>
      <Navbar activePage={"home"} />
      <div style={{ height: "70vh" }}>
        {/* <h1 className="flex justify-center mt-2 mb-2">Map</h1> */}
      <PageTitle title={'Map'} />


        <div className="flex justify-center my-2" >
        <input type="text" placeholder="Search Room" onChange={onChangeSearch} className='rounded-xl text-center px-3 py-1 ' value={search} name="" id="" />
        </div>

        <div className="flex flex-col items-center justify-center relative  ">
      
       <div className="relative" >
       {
        pointerVisible &&  <Pin position={position} onClick={() => {}} pinColor="red" />
       }
       <img src={mapOne} className="object-contain w-full max-w-[390px]   " alt="" />
          <img src={mapTwo} className="object-contain w-full max-w-[390px] " alt="" />
          <img src={mapThree} className="object-contain w-full max-w-[390px] " alt="" />
       </div>
          
        </div>
      </div>
    </div>
  );
}

export default MapScreen;
