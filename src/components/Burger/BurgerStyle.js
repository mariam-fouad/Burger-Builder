import styled from 'styled-components';
const BurgerStyle = styled.div`
width:100%;
height:250px;
margin:auto;
textAlign:center;
textWeight:bold;
overflow:scroll;
textSize:1.2rem;
@media (min-width: 1000px) and (min-height: 700px):
  {
  width:700px;
  height:600px;
}
@media (min-width: 500px) and (min-height: 400px):
  {
  width:350px;
  height:300px;
}
@media (min-width: 500px) and (min-height: 401px):
  {
  width:400px;
  height:400px;
}
`;

export default BurgerStyle;
