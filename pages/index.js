import styled from "styled-components";
import { fetchTestContent } from "../helpers/helpers";
import Layout from "../components/LayoutComponents/Layout";


//example of styled components using Theme
const Title = styled.h1`
  color: ${(props) =>
    props.primary ? props.theme.colors.main1 : props.theme.colors.main2};
  text-align: center;
`;

export default function Home(props) {
  
const {content, preview} = props;

  return (
    <Layout preview={preview}>
      <Title >{content[0].text}</Title>
      <p>testing automation‚</p>
      <p>webhook tesst</p>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {

  const content = await fetchTestContent(preview);
 
  return {
    props: { content: content, preview: preview },
  };
}
