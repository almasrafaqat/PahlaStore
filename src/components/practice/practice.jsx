import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  background-color: antiquewhite;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(150px, 1fr )); */
  /* grid-template-columns: fit-content(100px) fit-content(200px) 1fr; */
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat(2, minmax(100px, min-content)); */
  grid-auto-rows: 150px;
  /* align-items: center; */
  /* justify-items: center; */
  /* place-items: start center; */  //vertical alignment & horizontal alignment.

  margin:200px auto;
`;

const Item = styled.div`
  background-color: ${(props) => props.bg};
  color: red;
  /* align-self: start; */
  /* justify-self: start; */
  display: ${(props) => props.subitem && 'grid'};
  grid-template-columns: ${(props) => props.subitem && '2fr 1fr 1fr'};
  grid-gap: ${(props) => props.subitem && '0.6rem'};
`;

const SubItem = styled.div`
  background-color: lightskyblue;
  /* grid-column: 1 / span 2; */
`;
const SpanItem = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1/ span 2;
`;


const Practice = () => {
  return (
    <Container>
    <SpanItem> Span Item </SpanItem>
      <Item bg="lightgreen">sd lorem ipsums hol jjsd jsdf sjdf sdlfj sdj flsd </Item>
      <Item bg="pink">2 Lorem ispul lorem lorem lorem lorem lorem ds hye ooiu jkl asdi lkj hsdfl jlasdf l</Item>
      <Item bg="lightgray" subitem="true">
        <SubItem>Subitem 1</SubItem>
        <SubItem>Subitem 1</SubItem>
        <SubItem>Subitem 1</SubItem>
      </Item>
      
      

    </Container>
  );
};

export default Practice;
