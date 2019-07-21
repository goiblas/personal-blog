import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./utils/link";
import List from "./list";

const Post = ({ state, actions, libraries }) => {
  // Get info of current post.
  const data = state.source.get(state.router.link);
  // Get the the post.
  const post = state.source[data.type][data.id];
  // Get the author.
  const { author } = state.frontity;
  // Get a date for humans.
  const date = new Date(post.date);
  const dateFormatted = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`

  // Prefetch home posts and the list component.
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  return data.isReady ? (
    <div className="entry-content">
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        {data.isPost && (
          <Postdetails>
            Por <Link link={author.link} rel="me nofollow"> {author.name}</Link>  el <time dateTime={date.toLocaleDateString('en-US')}>{dateFormatted}</time>
          </Postdetails>
        )}
        <libraries.html2react.Component html={post.content.rendered} />
    </div>
  ) : null;
};

export default connect(Post);

const Postdetails = styled.p`
  --margin-bottom: 2;
  color: var(--color-text-light);
`;