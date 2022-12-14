import Form from "../components/form/form";
import Cards from "../components/cards/Cards";
import { useEffect, useState } from "react";
let rnd = Math.random() * (42 - 1) + 1;
function CharPage(){
    let [pageNum,setPage] = useState(rnd);
    let [CardData, updCD] = useState([]);
    let [SearchDat, updSearch] = useState("");
    let _APIurl = `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${SearchDat}`;
    useEffect(()=>{
        (
            async function(){
                let data = await fetch(_APIurl).then((res)=>res.json());
                updCD(data.results);
            }
        )();
    },[_APIurl]);
    return(
        <>
            <Form updSearch={updSearch} setPage={setPage}/>
            <Cards data={CardData}/>
        </>
    );
}
export default CharPage;