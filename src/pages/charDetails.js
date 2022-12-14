import { CharInfo } from "../rules";
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
function CharDetails(){
    let {id} = useParams();
    let [CardData, updCD] = useState([]);
    let _APIurl = `https://rickandmortyapi.com/api/character/${id}`;
    useEffect(()=>{
        (
            async function(){
                let data = await fetch(_APIurl).then((res)=>res.json());
                updCD(data);
            }
        )();
    },[_APIurl]);
    let {image, name, gender, location, status} = CardData;
    return(
        <CharInfo>
            <img src={CardData.image} alt="" />
            <div className="CharData">
                <h2>{name}</h2>
                <ul>
                    <li><span>Gender:</span> {gender}</li>
                    <li><span>Location:</span> {location?.name}</li>
                    <li><span>Status:</span> {status} </li>
                </ul>
            </div>
        </CharInfo>
    );
}
export default CharDetails;