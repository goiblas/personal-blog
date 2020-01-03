import React from "react";
import { Head, connect } from "frontity";

const Title = ({ state }) => {
  // Get data about the current URL.
  const data = state.source.get(state.router.link);
  // Set the default title.
  let title = state.frontity.title;

  if (data.isPostType) {
    // Add titles to posts and pages, using the title and ending with the Blog Name.
    // 1. Get the post entity from the state and get its title.
    const postTitle = state.source[data.type][data.id].title.rendered;
    // 2. Remove any HTML tags found in the title.
    const cleanTitle = postTitle.replace(/<\/?[^>]+(>|$)/g, "");
    // 3. Render the proper title.
    title = `${cleanTitle} - ${state.frontity.title}`;
  } else if (data.is404) {
    // Add titles to 404's.
    title = `404 Página no encontrada - ${state.frontity.title}`;
  }

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default connect(Title);