import styled from "styled-components";


const Title = styled.h1`
color:${props => props.primary ? props.theme.colors.main1 : props.theme.colors.main2};
text-align:center;
width:1000px;

`



export default function Home() {
  return (

      <Title  >hello</Title>

  )
}

