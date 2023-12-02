import { data } from "autoprefixer"
import { useState ,useEffect } from "react";

function usecurrencyInfo(){

    useEffect(()=>{
        const [data , setdata] = useState({})
        
fetch( `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json` )
.then((res)=>  res.json())
.then( (res)=> setdata(res[currency]) )
console.log(data);
    },[currency ])
    console.log(data);
    return data
}

export default usecurrencyInfo;