import React, { useEffect } from "react";
import { connect, styled } from "frontity";

import DateFormat from "./utils/date";
import List from "./list";
import Comments from './comments';

const Post = ({ state, actions, libraries }) => {
  // Get info of current post.
  const data = state.source.get(state.router.link);
  // Get the the post.
  const post = state.source[data.type][data.id];

  // Prefetch home posts and the list component.
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  return data.isReady ? (
    <div className="entry-content">
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        {data.isPost && (
          <Postdetails>
            <DateFormat date={ post.date } />
          </Postdetails>
        )}
        <libraries.html2react.Component html={post.content.rendered} />
        {data.isPost 
            && typeof window !== "undefined"
            && ( <Comments post={post} /> )
         }
    </div>
  ) : null;
};

export default connect(Post);

const Postdetails = styled.p`
  --margin-bottom: 2;
`;

const Title = styled.h1`
  --margin-top: 1;
  --margin-bottom: .5;
`