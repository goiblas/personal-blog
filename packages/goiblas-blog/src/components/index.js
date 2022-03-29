import React, { useEffect } from "react";
import { Global, connect, Head, styled } from "frontity";
import Header from "./header/header";
import List from "./list";
import Post from "./post";
import Page404 from "./page404";
import Loading from "./utils/loading";
import Footer from "./footer";
import PageMetaTitle from "./page-meta-title";

import settingsCSS from "./styles/settings";
import globalCSS from "./styles/globalStyle";

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);

  const showList = data.isArchive && !data.isCategory;
  const show404 = data.is404 || data.isCategory || data.isTaxonomy;

  return (
    <>
      <PageMetaTitle />
      <Head>
        <html lang={state.frontity.lang} />
        <meta name="description" content={state.frontity.description} />
        {data.isPostType && (
          <script
            id="dsq-count-scr"
            src="https://goiblas.disqus.com/count.js"
            async
          />
        )}
      </Head>
      <Global styles={settingsCSS} />
      <Global styles={globalCSS} />
      <Page>
        <Header />
        <main className="main">
          {data.isFetching && <Loading />}
          {showList && <List />}
          {data.isPostType && <Post />}
          {show404 && <Page404 />}
        </main>
        {!data.isPost && <Footer />}
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
