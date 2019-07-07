import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import Timeago from "../timeago";

const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <Article>
      <Titlelink link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Titlelink>
      <Postdetails>
        Por {author.name} publicado el <Timeago date={date} />
      </Postdetails>

      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}
      <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
    </Article>
  );
};

export default connect(Item);


const Postdetails = styled.p`
  --margin-bottom: 1;
  --fs-size: -1;
  opacity: .7;
`;

const Title = styled.h2`
  --margin-bottom: 0;
`;

const Article = styled.article`
  --margin-bottom: 3;
`;

const Titlelink = styled(Link)`
  text-decoration:none;
`;