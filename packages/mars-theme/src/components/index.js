import React from "react";
import { Global, css, connect, Head, styled } from "frontity";
import Header from "./header/header";
import List from "./list";
import Post from "./post";
import Page404 from "./page404.js";
import Loading from "./utils/loading";
import Footer from "./footer";

import settingsCSS from './../assets/css/settings.css';
import globalCSS from './../assets/css/style.css';


const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);

  const showList = data.isArchive && !data.isCategory; 
  const show404 = data.is404 || data.isCategory || data.isTaxonomy;
  return (
    <>
      <Head>
        <html lang={state.frontity.lang} />
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,600&display=swap" rel="stylesheet" />
        <script id="dsq-count-scr" src="https://goiblas.disqus.com/count.js"
        onLoad={()=> console.log('he cargado')} async /> 
      </Head>
      <Global styles={css(settingsCSS)} />
      <Global styles={css(globalCSS)} />

      <Page>
          <Header />
          <main className="main">
            {data.isFetching && <Loading />}
            {showList && <List />}
            {data.isPostType && <Post />}
            {show404 && <Page404 />}
          </main>
          {!data.isPost && <Footer /> }
      </Page>
    </>
  );
};

export default connect(Theme);

const Page = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    main {
        flex-grow: 1;
    }
`;
