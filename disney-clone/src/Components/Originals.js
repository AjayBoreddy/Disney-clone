import { Link } from "react-router-dom";
import styled from "styled-components";

const Originals =(props) =>{
    return(
        <Container>
            <h4>Originals</h4>
            <Content>
            <Wrap>
                <Link to ="/">
                <img src="https://hbomax-images.warnermediacdn.com/images/GXdcPuwAQoMPCwwEAACou/tileburnedin?size=1280x720&partner=hbomaxcom&v=18c8a5cffd1f73fa1c2820f3215d9325&host=artist.api.cdn.hbo.com&w=Infinity" alt="/" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to ="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvr7jJr1ZEJ5J0ZrJJY3wf0eCmqtXHGSBoGVbPYANzvnZ5w5jyWjnf8GHekpzpzjo4Ffk&usqp=CAU" alt="/" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to ="/">
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5413/1055413-h-889c997857c5" alt="/" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to ="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcXxoOHiuDwNZwyRdzgJrYMs6gVBI6p88jba0V3orWBTyrx2z7Ptcn_RkBbmcqqEV1RU&usqp=CAU" alt="/" />
                </Link>
            </Wrap>
            
             </Content>
        </Container>
    );
}
const Container = styled.div`
padding: 0 0 26px;`;
const Content = styled.div`
display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
padding-top:56.25%;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img{inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
}&: hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
}

  }`;

export default Originals;