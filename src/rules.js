import styled from "styled-components";
export const BodyContainer = styled.div`
        position: relative;
        font-family: 'Roboto', sans-serif;
        @media screen and (max-width: 620px) {
            padding: 1% 0;
        }
`;
export const Container = styled.div`
        padding: 1% 3vmin;
`;
export const Hat = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vmin;
    width: 100%;
`;

export const Header_top = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 620px) {
        flex-direction: column;
    }
`;

export const Logo = styled.p`
    display: flex;
    flex-direction: row;    
    a{
    text-decoration: none;
    font-style: normal;
    font-weight: 700;
    font-size: calc(1.5vw + 1.5vh + 1vmin);
    line-height: 33px;
    color: #1DC985;
    }
    button{
        margin-left: auto;
        display: none;
        border: none;
        background-color: transparent;
    }
    @media screen and (max-width: 620px) {
        button{
            display: block;
        }
    }
`;
export const Navl = styled.div`
    margin-right: 1%;
    margin-left: auto;
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 28px;
    a{
        text-decoration: none;
        font-style: normal;
        font-weight: 700;
        font-size: calc(1vw + 1vh + 1vmin);
        line-height: 28px;
        color: #230E07;
    }
    @media screen and (max-width: 620px) {
        a{
            display: none;
        }
    }
`;
export const DDmenu = styled.div`
    width: 100%;
    display: none;
    @media screen and (max-width: 620px){
        margin-top: 1px;
        gap: 1px;
        a{
            width: 100%;
            text-decoration: none;
            color: #230E07;
            background-color: whitesmoke;
            text-align: center;
        }
        &.hidden{
            display: none;
        }
        &.active{
            display: flex;
            flex-direction: column;
        }
    }
`;

export const Hbanner = styled.div`
    width: 100%;
    background-color: #232222;
    padding-inline: 5vmin;
    display: flex;
    align-items: center;
    gap: 50px;
    img{
        height: 10vmin;
        &:last-child{
            margin-left: auto;
        }
    }
`;

export const BannerTXT = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: calc(1vw + 1vh + 1vmin);
    line-height: 28px;
    color: #FFFFFF;
    display: inline-block;
`;
export const SunContainer = styled.div`
    margin-left: auto;
    position: relative;   
    @media screen and (max-width: 620px){
        display: none;
    }
`;
export const SunBanner = styled.div`
    z-index: -1;
    position: absolute;
    right: 0;
`;

export const Form_Container = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    width: 40vw;
    margin-top: 7vmin;
    padding: 5vmin 3vmin 5vmin 5vmin;
    display: flex;
    flex-direction: column;
    gap: 2.5vmin;
    p {
    font-style: normal;
    font-weight: 700;
    font-size: calc(0.5vw + 0.8vh + 0.8vmin);
    line-height: 2.5vmin;
    color: #000000;
    }
    .Input-container{
        display: flex;
        gap: 3vmin;
        input{
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border: none;
            height: 5vmin;
            width: 75%;
        }
        button{
            position: relative;
            border: none;
            background: #1DC985;
            height: 5.5vmin;
            width: 20%;
            font-weight: 400;
            font-size: calc(0.5vw + 0.5vh + 0.5vmin);
            line-height: 2vmin;
            text-align: center;
            color: #FFFFFF;
            transform:  skew(-15deg);
            border-radius: 10px 0 10px 0;
        }
    }
    @media screen and (max-width: 620px){
        width: 100%;
    }
`;

export const Cards_container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10vmin;
    margin-top: 51px;
    a{
        text-decoration: none;
    }
    @media screen and (max-width: 620px){
        width: 100%;
        align-items: center;
        justify-content: space-around;
    }
`;
export const Card_item = styled.div`
    width: 30vmin;
    min-height: 35vmin;
    background: #232222;
    padding: 2vmin;
    img{
        width: 100%;
        height: auto;
    }
    h2{
     font-weight: 700;
     font-size: calc(0.7vw + 0.7vh + 0.7vmin);
     text-align: center;
     color: #FFFFFF;
     margin-top: 5%;
    }
`;

export const CharInfo = styled.div`
    margin-top: 5vmin;
    display: flex;
    flex-direction: row;
    gap: 7vmin;
    img{
        width: 60vmin;
        height: auto;
    }
    h2{
        font-size: calc(2vw + 2vh + 2vmin);
    }
    ul{
        list-style: none;
        margin: 0; padding: 0;
        font-size: calc(1.5vw + 1.5vh + 1.5vmin);
        width: 80%;
    }
    span{
        font-weight: bold;
    }
    @media screen and (max-width: 1217px){
        backdrop-filter: blur(5px);
    }
    @media screen and (max-width: 620px){
        margin-top: 1vmin;
        flex-direction: column;
        align-items: center;
        img{
            width: auto;
        }
        h2{
            font-size: calc(2vw + 2vh + 2vmin);
        }
        ul{
            font-size: calc(1.5vw + 1.5vh + 1.5vmin);
        }
    }
`;