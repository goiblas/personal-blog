import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Page404 from "./page404.js";
import Loading from "./loading";
import Toggle from "./toggle";
import Footer from "./footer";

import globalCSS from './style.css';

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);
  const { layout }  = state.theme;
  
  return (
    <>
      <Head>
        <html lang={state.frontity.lang} />
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <link href="https://fonts.googleapis.com/css?family=Rubik:400,500&display=optional" rel="stylesheet" />
        <link href='https://fonts.googleapis.com/css?family=Work+Sans:600&text=Jes%C3%BAs+Olazagoitia' rel='stylesheet' />
      </Head>
      <Global styles={css(globalCSS)} />

      <div className={`layout ${layout}`}>
        <Header />
        <div className="content">
          <div className="container">
              <main className="main">
                {data.isFetching && <Loading />}
                {data.isArchive && <List />}
                {data.isPostType && <Post />}
                {data.is404 && <Page404 />}
              </main>
            </div>
            <Footer />
          </div>
      </div>
    </>
  );
};

export default connect(Theme);

