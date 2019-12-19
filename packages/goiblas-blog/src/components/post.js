import React, { useEffect, useRef } from "react";
import { connect, styled } from "frontity";

import DateFormat from "./utils/date";
import List from "./list";

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

  // Focus onChange page
  const titleEl = useRef(null);
  const { focusOnChange } = state.theme;

  useEffect(()=> {
    if(titleEl.current && focusOnChange) {
      titleEl.current.focus();
    }
  });

  return data.isReady ? (
    <div className="entry-content">
        <Title ref={titleEl} tabIndex="-1" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        {data.isPost && (
          <Postdetails>
            <DateFormat date={ post.date } />
          </Postdetails>
        )}
        <libraries.html2react.Component html={post.content.rendered} />
        { data.isPost && libraries.comments && <libraries.comments.Comment /> }

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