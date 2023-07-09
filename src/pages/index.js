import * as React from 'react';
import { graphql } from 'gatsby';
import { HeadContent } from '../components/head/Head';
import { Header } from '../components/header/Header';

const IndexPage = ({ data }) => {
  const posts = data.allContentfulPageBlogPost.nodes || [];

  return (
    <>
      <Header />
      <main>
        <h1>Heading One</h1>
        <h2>Heading Two</h2>
        <h3>Heading Three</h3>
        <h4>Heading Four</h4>
        <h5>Heading Five</h5>
        <h6>Heading Six</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          convallis, <a href="#">ante in rutrum semper</a>, enim lectus congue
          orci, eu laoreet ex massa eu arcu. Aenean dapibus venenatis feugiat.
          Nunc lacinia est sed faucibus tincidunt. Aenean lobortis nunc ligula,
          vel laoreet mi interdum a. Nullam et euismod nisl. Cras rhoncus
          pulvinar massa ac blandit. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Nullam quis nulla lectus. Morbi vel est diam.
          Morbi euismod suscipit tortor a tempus. Maecenas pharetra bibendum
          nibh id semper. Maecenas vitae rutrum enim, non finibus sapien. Nullam
          at felis tellus. Duis eget aliquet nunc. Duis fermentum libero ac
          neque consectetur tempor. Ut viverra a elit ac pulvinar. Mauris
          porttitor ante ut efficitur vehicula. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Maecenas cursus
          volutpat vestibulum. Nam mauris lectus, ornare vel porta vel,
          dignissim eu dui. Curabitur ut odio magna. Aliquam a nunc sed sapien
          fringilla ultrices a tempor sem. Donec a orci vulputate, commodo mi
          vitae, malesuada magna. Maecenas consectetur libero ante, nec faucibus
          massa faucibus vel. Vivamus porta dolor a dolor pretium, sit amet
          semper tortor tristique. Sed id molestie est, sed euismod nisi.
          Aliquam vel consequat libero, non ultrices tortor. Nunc facilisis
          commodo purus eget rhoncus. Aliquam convallis metus diam, vitae
          hendrerit odio tincidunt eu. Quisque feugiat urna eu ultricies
          iaculis. Aenean vitae tortor tincidunt, tempor dolor sit amet,
          facilisis magna. Aliquam tempus, est congue faucibus accumsan, nunc
          nisi posuere dui, blandit rutrum felis sapien vel justo. Phasellus
          eros urna, vestibulum rhoncus maximus condimentum, laoreet at mi.
          Praesent porttitor eget tortor id semper. Vestibulum blandit est sit
          amet nunc rhoncus, vel finibus nisi euismod. Aliquam id nibh est.
          Maecenas laoreet orci in urna eleifend suscipit. Morbi mattis euismod
          risus, nec consequat neque tincidunt nec. Fusce odio velit, euismod ac
          ex vitae, tincidunt facilisis tortor. Morbi mollis accumsan risus id
          aliquam. Nulla facilisi. Maecenas quis rhoncus urna, vitae porttitor
          erat. Sed eu est sit amet odio volutpat elementum at non libero.
          Integer bibendum maximus velit, ut porttitor sem lacinia at. Nulla
          facilisi. Pellentesque velit erat, molestie vel orci ac, maximus
          commodo tortor. Proin massa sem, consectetur in pharetra at, varius at
          nunc. Etiam consectetur rhoncus lacus, ac ultricies lacus tempor ut.
          Curabitur ullamcorper vehicula aliquam. Nulla efficitur lacus eget
          velit varius imperdiet. Praesent consequat elit sed velit convallis,
          vitae commodo quam fermentum. Suspendisse potenti. Nulla euismod
          auctor molestie. Ut id hendrerit turpis. Duis accumsan bibendum quam,
          dignissim lobortis ex imperdiet a. Donec gravida augue et blandit
          rhoncus.
        </p>
        {posts.map((post) => (
          <div>
            <h2>{post.title}</h2>
            <p>{post.shortDescription?.shortDescription}</p>
          </div>
        ))}
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Home Page</title>
    <HeadContent />
  </>
);

export const IndexPageQuery = graphql`
  {
    allContentfulPageBlogPost {
      nodes {
        contentful_id
        publishedDate(formatString: "MMMM DD, YYYY")
        title
        featuredImage {
          gatsbyImageData
        }
        shortDescription {
          shortDescription
        }
      }
    }
  }
`;
