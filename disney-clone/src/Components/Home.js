import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Newdisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommendations";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from '../firebase';
import { setMovies } from "../Features/User/movie/movieSlice";
import { selectUserName } from "../Features/User/userSlice";

const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends=[];
    let newDisney=[];
    let originals =[];
    let trending= [];
    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot)=>{
           snapshot.docs.map((doc)=>{
               switch(doc.data().type){
                   case 'recommend':
                   recommends.push({
                       id:doc.id, ...doc.data()})
                       break;
                    case 'new':
                        newDisney.push({id:doc.id, ...doc.data()})
                        break;
                        case 'original':
                            originals.push({id:doc.id, ...doc.data()})
                            break;
                        case 'trending':
                        trending.push({id:doc.id, ...doc.data()})
                        break;

               }
           });
        });
    dispatch(setMovies({
        recommend:recommends,
        newDisney:newDisney,
        original:originals,
        trending:trending,
  })
    );
}, [userName]);
    return(
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommends/>
            <Newdisney/>
            <Originals/>
            <Trending/>
          </Container>
    );
};
const Container = styled.main`
position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/Images/home-background.png") center center/ cover
    no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;