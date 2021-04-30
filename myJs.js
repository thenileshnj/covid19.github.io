// async function getCovidapi(){
//     const jsondata = await fetch('https://api.covid19api.com/summary');
//     // console.log(jsondata);
//     const jsdata = await jsondata.json();
//     console.log(jsdata.Countries[76]);
//     console.log(jsdata.Countries[76].Country);
//     console.log(jsdata.Countries[76].CountryCode);
//     console.log(jsdata.Countries[76].NewConfirmed);
//     console.log(jsdata.Countries[76].NewDeaths);
//     console.log(jsdata.Countries[76].NewRecovered);
//     console.log(jsdata.Countries[76].Country);
//     console.log(jsdata.Countries[76].Country);
//     console.log(jsdata.Countries[76].Country);
// }

// getCovidapi();


async function getCovidData(){
    const fetchapi = await fetch('https://api.covid19india.org/data.json');
    // console.log(fetchapi);
    const ftapi = await fetchapi.json();
    // console.log(ftapi);


    // all over India
    console.log(ftapi.statewise[0].active);
    console.log(ftapi.statewise[0].confirmed);
    console.log(ftapi.statewise[0].deltaconfirmed);
    console.log(ftapi.statewise[0].deltadeaths);
    console.log(ftapi.statewise[0].deltarecovered);
    console.log(ftapi.statewise[0].lastupdatedtime);
    console.log(ftapi.statewise[0].migratedother);
    console.log(ftapi.statewise[0].state);
    console.log(ftapi.statewise[0].statecode);


    // For All over India

    document.getElementById('indSt').innerHTML= `All over India`;
    document.getElementById('indAct').innerHTML= `Active Cases: ${ftapi.statewise[0].active}`;
    document.getElementById('indRec').innerHTML= `Recover Cases: ${ftapi.statewise[0].recovered}`;
    document.getElementById('indDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[0].deaths}`;
    document.getElementById('indTime').innerHTML= `Data Updated on: ${ftapi.statewise[0].lastupdatedtime}`;



    // For MH

    document.getElementById('mhSt').innerHTML= `State: ${ftapi.statewise[1].state}`;
    document.getElementById('mhAct').innerHTML= `Active Cases: ${ftapi.statewise[1].active}`;
    document.getElementById('mhRec').innerHTML= `Recover Cases: ${ftapi.statewise[1].recovered}`;
    document.getElementById('mhDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[1].deaths}`;
    document.getElementById('mhTime').innerHTML= `Data Updated on: ${ftapi.statewise[1].lastupdatedtime}`;
    

     // For Kerala

     document.getElementById('keSt').innerHTML= `State: ${ftapi.statewise[2].state}`;
     document.getElementById('keAct').innerHTML= `Active Cases: ${ftapi.statewise[2].active}`;
     document.getElementById('keRec').innerHTML= `Recover Cases: ${ftapi.statewise[2].recovered}`;
     document.getElementById('keDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[2].deaths}`;
     document.getElementById('keTime').innerHTML= `Data Updated on: ${ftapi.statewise[2].lastupdatedtime}`;
     

     // For "Karnataka"

     document.getElementById('kaSt').innerHTML= `State: ${ftapi.statewise[3].state}`;
     document.getElementById('kaAct').innerHTML= `Active Cases: ${ftapi.statewise[3].active}`;
     document.getElementById('kaRec').innerHTML= `Recover Cases: ${ftapi.statewise[3].recovered}`;
     document.getElementById('kaDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[3].deaths}`;
     document.getElementById('kaTime').innerHTML= `Data Updated on: ${ftapi.statewise[3].lastupdatedtime}`;
     

     // For "Andhra Pradesh"

     document.getElementById('apSt').innerHTML= `State: ${ftapi.statewise[4].state}`;
     document.getElementById('apAct').innerHTML= `Active Cases: ${ftapi.statewise[4].active}`;
     document.getElementById('apRec').innerHTML= `Recover Cases: ${ftapi.statewise[4].recovered}`;
     document.getElementById('apDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[4].deaths}`;
     document.getElementById('apTime').innerHTML= `Data Updated on: ${ftapi.statewise[4].lastupdatedtime}`;
     

     // For "Tamil Nadu"

     document.getElementById('tnSt').innerHTML= `State: ${ftapi.statewise[5].state}`;
     document.getElementById('tnAct').innerHTML= `Active Cases: ${ftapi.statewise[5].active}`;
     document.getElementById('tnRec').innerHTML= `Recover Cases: ${ftapi.statewise[5].recovered}`;
     document.getElementById('tnDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[5].deaths}`;
     document.getElementById('tnTime').innerHTML= `Data Updated on: ${ftapi.statewise[5].lastupdatedtime}`;
     

     // For ""Delhi"

     document.getElementById('dlSt').innerHTML= `State: ${ftapi.statewise[6].state}`;
     document.getElementById('dlAct').innerHTML= `Active Cases: ${ftapi.statewise[6].active}`;
     document.getElementById('dlRec').innerHTML= `Recover Cases: ${ftapi.statewise[6].recovered}`;
     document.getElementById('dlDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[6].deaths}`;
     document.getElementById('dlTime').innerHTML= `Data Updated on: ${ftapi.statewise[6].lastupdatedtime}`;
     

     // For "Uttar Pradesh"

     document.getElementById('upSt').innerHTML= `State: ${ftapi.statewise[7].state}`;
     document.getElementById('upAct').innerHTML= `Active Cases: ${ftapi.statewise[7].active}`;
     document.getElementById('upRec').innerHTML= `Recover Cases: ${ftapi.statewise[7].recovered}`;
     document.getElementById('upDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[7].deaths}`;
     document.getElementById('upTime').innerHTML= `Data Updated on: ${ftapi.statewise[7].lastupdatedtime}`;
     

      // For "West Bengal"

      document.getElementById('wbSt').innerHTML= `State: ${ftapi.statewise[8].state}`;
      document.getElementById('wbAct').innerHTML= `Active Cases: ${ftapi.statewise[8].active}`;
      document.getElementById('wbRec').innerHTML= `Recover Cases: ${ftapi.statewise[8].recovered}`;
      document.getElementById('wbDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[8].deaths}`;
      document.getElementById('wbTime').innerHTML= `Data Updated on: ${ftapi.statewise[8].lastupdatedtime}`;
      

       // For "Odisha"

       document.getElementById('osSt').innerHTML= `State: ${ftapi.statewise[9].state}`;
       document.getElementById('osAct').innerHTML= `Active Cases: ${ftapi.statewise[9].active}`;
       document.getElementById('osRec').innerHTML= `Recover Cases: ${ftapi.statewise[9].recovered}`;
       document.getElementById('osDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[9].deaths}`;
       document.getElementById('osTime').innerHTML= `Data Updated on: ${ftapi.statewise[9].lastupdatedtime}`;
       

       // For "Rajasthan"

       document.getElementById('rjSt').innerHTML= `State: ${ftapi.statewise[10].state}`;
       document.getElementById('rjAct').innerHTML= `Active Cases: ${ftapi.statewise[10].active}`;
       document.getElementById('rjRec').innerHTML= `Recover Cases: ${ftapi.statewise[10].recovered}`;
       document.getElementById('rjDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[10].deaths}`;
       document.getElementById('rjTime').innerHTML= `Data Updated on: ${ftapi.statewise[10].lastupdatedtime}`;
       

       // For "Chhattisgarh"

       document.getElementById('cgSt').innerHTML= `State: ${ftapi.statewise[11].state}`;
       document.getElementById('cgAct').innerHTML= `Active Cases: ${ftapi.statewise[11].active}`;
       document.getElementById('cgRec').innerHTML= `Recover Cases: ${ftapi.statewise[11].recovered}`;
       document.getElementById('cgDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[11].deaths}`;
       document.getElementById('cgTime').innerHTML= `Data Updated on: ${ftapi.statewise[11].lastupdatedtime}`;
       

       // For "Telangana"

       document.getElementById('tsSt').innerHTML= `State: ${ftapi.statewise[12].state}`;
       document.getElementById('tsAct').innerHTML= `Active Cases: ${ftapi.statewise[12].active}`;
       document.getElementById('tsRec').innerHTML= `Recover Cases: ${ftapi.statewise[12].recovered}`;
       document.getElementById('tsDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[12].deaths}`;
       document.getElementById('tsTime').innerHTML= `Data Updated on: ${ftapi.statewise[12].lastupdatedtime}`;
       

       // For "Haryana"

       document.getElementById('hrSt').innerHTML= `State: ${ftapi.statewise[13].state}`;
       document.getElementById('hrAct').innerHTML= `Active Cases: ${ftapi.statewise[13].active}`;
       document.getElementById('hrRec').innerHTML= `Recover Cases: ${ftapi.statewise[13].recovered}`;
       document.getElementById('hrDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[13].deaths}`;
       document.getElementById('hrTime').innerHTML= `Data Updated on: ${ftapi.statewise[13].lastupdatedtime}`;
       

       // For "Gujarat"

       document.getElementById('gjSt').innerHTML= `State: ${ftapi.statewise[14].state}`;
       document.getElementById('gjAct').innerHTML= `Active Cases: ${ftapi.statewise[14].active}`;
       document.getElementById('gjRec').innerHTML= `Recover Cases: ${ftapi.statewise[14].recovered}`;
       document.getElementById('gjDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[14].deaths}`;
       document.getElementById('gjTime').innerHTML= `Data Updated on: ${ftapi.statewise[14].lastupdatedtime}`;
       

       // For "Bihar"

       document.getElementById('brSt').innerHTML= `State: ${ftapi.statewise[15].state}`;
       document.getElementById('brAct').innerHTML= `Active Cases: ${ftapi.statewise[15].active}`;
       document.getElementById('brRec').innerHTML= `Recover Cases: ${ftapi.statewise[15].recovered}`;
       document.getElementById('brDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[15].deaths}`;
       document.getElementById('brTime').innerHTML= `Data Updated on: ${ftapi.statewise[15].lastupdatedtime}`;
       

       // For "Madhya Pradesh"

       document.getElementById('mpSt').innerHTML= `State: ${ftapi.statewise[16].state}`;
       document.getElementById('mpAct').innerHTML= `Active Cases: ${ftapi.statewise[16].active}`;
       document.getElementById('mpRec').innerHTML= `Recover Cases: ${ftapi.statewise[16].recovered}`;
       document.getElementById('mpDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[16].deaths}`;
       document.getElementById('mpTime').innerHTML= `Data Updated on: ${ftapi.statewise[16].lastupdatedtime}`;
       

       // For "Madhya Pradesh"

       document.getElementById('asSt').innerHTML= `State: ${ftapi.statewise[17].state}`;
       document.getElementById('asAct').innerHTML= `Active Cases: ${ftapi.statewise[17].active}`;
       document.getElementById('asRec').innerHTML= `Recover Cases: ${ftapi.statewise[17].recovered}`;
       document.getElementById('asDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[17].deaths}`;
       document.getElementById('asTime').innerHTML= `Data Updated on: ${ftapi.statewise[17].lastupdatedtime}`;
       
        // For "Punjab"

        document.getElementById('pbSt').innerHTML= `State: ${ftapi.statewise[18].state}`;
        document.getElementById('pbAct').innerHTML= `Active Cases: ${ftapi.statewise[18].active}`;
        document.getElementById('pbRec').innerHTML= `Recover Cases: ${ftapi.statewise[18].recovered}`;
        document.getElementById('pbDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[18].deaths}`;
        document.getElementById('pbTime').innerHTML= `Data Updated on: ${ftapi.statewise[18].lastupdatedtime}`;
        

        // For "Jammu and Kashmir"

        document.getElementById('jkSt').innerHTML= `State: ${ftapi.statewise[19].state}`;
        document.getElementById('jkAct').innerHTML= `Active Cases: ${ftapi.statewise[19].active}`;
        document.getElementById('jkRec').innerHTML= `Recover Cases: ${ftapi.statewise[19].recovered}`;
        document.getElementById('jkDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[19].deaths}`;
        document.getElementById('jkTime').innerHTML= `Data Updated on: ${ftapi.statewise[19].lastupdatedtime}`;
        
        // For "Jharkhand"

        document.getElementById('jhSt').innerHTML= `State: ${ftapi.statewise[20].state}`;
        document.getElementById('jhAct').innerHTML= `Active Cases: ${ftapi.statewise[20].active}`;
        document.getElementById('jhRec').innerHTML= `Recover Cases: ${ftapi.statewise[20].recovered}`;
        document.getElementById('jhDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[20].deaths}`;
        document.getElementById('jhTime').innerHTML= `Data Updated on: ${ftapi.statewise[20].lastupdatedtime}`;
        

        // For "Uttarakhand"

        document.getElementById('utSt').innerHTML= `State: ${ftapi.statewise[21].state}`;
        document.getElementById('utAct').innerHTML= `Active Cases: ${ftapi.statewise[21].active}`;
        document.getElementById('utRec').innerHTML= `Recover Cases: ${ftapi.statewise[21].recovered}`;
        document.getElementById('utDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[21].deaths}`;
        document.getElementById('utTime').innerHTML= `Data Updated on: ${ftapi.statewise[21].lastupdatedtime}`;
        

        // For "Himachal Pradesh"

        document.getElementById('hpSt').innerHTML= `State: ${ftapi.statewise[22].state}`;
        document.getElementById('hpAct').innerHTML= `Active Cases: ${ftapi.statewise[22].active}`;
        document.getElementById('hpRec').innerHTML= `Recover Cases: ${ftapi.statewise[22].recovered}`;
        document.getElementById('hpDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[22].deaths}`;
        document.getElementById('hpTime').innerHTML= `Data Updated on: ${ftapi.statewise[22].lastupdatedtime}`;
        

        // For "Goa"

        document.getElementById('gaSt').innerHTML= `State: ${ftapi.statewise[23].state}`;
        document.getElementById('gaAct').innerHTML= `Active Cases: ${ftapi.statewise[23].active}`;
        document.getElementById('gaRec').innerHTML= `Recover Cases: ${ftapi.statewise[23].recovered}`;
        document.getElementById('gaDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[23].deaths}`;
        document.getElementById('gaTime').innerHTML= `Data Updated on: ${ftapi.statewise[23].lastupdatedtime}`;
        

        // For "Puducherry"

        document.getElementById('pySt').innerHTML= `State: ${ftapi.statewise[24].state}`;
        document.getElementById('pyAct').innerHTML= `Active Cases: ${ftapi.statewise[24].active}`;
        document.getElementById('pyRec').innerHTML= `Recover Cases: ${ftapi.statewise[24].recovered}`;
        document.getElementById('pyDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[24].deaths}`;
        document.getElementById('pyTime').innerHTML= `Data Updated on: ${ftapi.statewise[24].lastupdatedtime}`;
        

        // For "Tripura"

        document.getElementById('trSt').innerHTML= `State: ${ftapi.statewise[25].state}`;
        document.getElementById('trAct').innerHTML= `Active Cases: ${ftapi.statewise[25].active}`;
        document.getElementById('trRec').innerHTML= `Recover Cases: ${ftapi.statewise[25].recovered}`;
        document.getElementById('trDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[25].deaths}`;
        document.getElementById('trTime').innerHTML= `Data Updated on: ${ftapi.statewise[25].lastupdatedtime}`;
        

        // For "Manipur"

        document.getElementById('mnSt').innerHTML= `State: ${ftapi.statewise[26].state}`;
        document.getElementById('mnAct').innerHTML= `Active Cases: ${ftapi.statewise[26].active}`;
        document.getElementById('mnRec').innerHTML= `Recover Cases: ${ftapi.statewise[26].recovered}`;
        document.getElementById('mnDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[26].deaths}`;
        document.getElementById('mnTime').innerHTML= `Data Updated on: ${ftapi.statewise[26].lastupdatedtime}`;
        

        // For "Chandigarh"

        document.getElementById('chSt').innerHTML= `State: ${ftapi.statewise[27].state}`;
        document.getElementById('chAct').innerHTML= `Active Cases: ${ftapi.statewise[27].active}`;
        document.getElementById('chRec').innerHTML= `Recover Cases: ${ftapi.statewise[27].recovered}`;
        document.getElementById('chDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[27].deaths}`;
        document.getElementById('chTime').innerHTML= `Data Updated on: ${ftapi.statewise[27].lastupdatedtime}`;
        

        // For "Arunachal Pradesh"

        document.getElementById('arSt').innerHTML= `State: ${ftapi.statewise[28].state}`;
        document.getElementById('arAct').innerHTML= `Active Cases: ${ftapi.statewise[28].active}`;
        document.getElementById('arRec').innerHTML= `Recover Cases: ${ftapi.statewise[28].recovered}`;
        document.getElementById('arDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[28].deaths}`;
        document.getElementById('arTime').innerHTML= `Data Updated on: ${ftapi.statewise[28].lastupdatedtime}`;
        

        // For"Meghalaya"

        document.getElementById('mlSt').innerHTML= `State: ${ftapi.statewise[29].state}`;
        document.getElementById('mlAct').innerHTML= `Active Cases: ${ftapi.statewise[29].active}`;
        document.getElementById('mlRec').innerHTML= `Recover Cases: ${ftapi.statewise[29].recovered}`;
        document.getElementById('mlDeaths').innerHTML= `Total Deaths: ${ftapi.statewise[29].deaths}`;
        document.getElementById('mlTime').innerHTML= `Data Updated on: ${ftapi.statewise[29].lastupdatedtime}`;
        

}

getCovidData();