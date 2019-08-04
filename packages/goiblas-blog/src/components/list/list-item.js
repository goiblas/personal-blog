import React from "react";

import { connect, styled } from "frontity";
import Link from "../utils/link";
import DateFormat from "../utils/date";
import nextId from "react-id-generator";

const Item = ({ state, item }) => {

  const { author } = state.frontity;
  const date = new Date(item.date);
  const dateFormatted = `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`

  const excerptWithoutParragraph = item.excerpt.rendered.replace(/<\/?p>/g,''); 
  const excerptPlain = excerptWithoutParragraph.replace('[&hellip;]', '&hellip; '); 
  
  const titleId  = nextId('title-');
  const readmoreId  = nextId('readmore-');

  return (
    <Article>
      <Link link={item.link}>
        <Title id={titleId} dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>
      <Postdetails>
        <DateFormat date={item.date} />
      </Postdetails>
      <p>
        <span dangerouslySetInnerHTML={{__html: excerptPlain} } />
        <Link link={item.link} id={readmoreId} ariaLabelledby={readmoreId + ' ' + titleId }>Leer&nbsp;más</Link>
      </p>
    </Article>
  );
};

export default connect(Item);

const Postdetails = styled.p`
  --margin-bottom: 1;
`;

const Title = styled.h2`
  --margin-bottom: 0;
`;

const Article = styled.article`
  --margin-bottom: 3;
`;

