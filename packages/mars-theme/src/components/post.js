import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import Timeago from "./timeago";

const Post = ({ state, actions, libraries }) => {
  // Get info of current post.
  const data = state.source.get(state.router.link);
  // Get the the post.
  const post = state.source[data.type][data.id];
  // Get the author.
  const author = state.source.author[post.author];
  // Get a date for humans.
  const date = new Date(post.date);

  // Prefetch home posts and the list component.
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  return data.isReady ? (
    <>

        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        {data.isPost && (
          <Postdetails>Por {author.name} publicado el <Timeago date={date} /></Postdetails>
        )}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )}
        <libraries.html2react.Component html={post.content.rendered} />
    </>
  ) : null;
};

export default connect(Post);

const Postdetails = styled.p`
  --margin-bottom: 1;
  --fs-size: -1;
  opacity: .7;
`;