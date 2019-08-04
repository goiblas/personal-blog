import React from "react";
import { connect, styled } from "frontity";
import Disqus from 'disqus-react';
import { inMobile } from './utils/media-queries';

const Comments = ({ state }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];

    const disqusShortname = 'goiblas';

    const threadConfig = {
        url: `https://${disqusShortname}.com${state.router.link}`,
        identifier: post.id,
        title: post.title.rendered,
    };


    if(typeof window !== "undefined" ) {
        return (
            <>
                <Container>
                    <Disqus.DiscussionEmbed shortname={disqusShortname} config={threadConfig} />
                </Container>
            </>
        )
    } else {
        return null;
    }
}
export default connect(Comments);

const Container = styled.div`
    --margin-top: 3;
    --padding-bottom: 2;

    ${inMobile} {
        margin-bottom: var(--header-height);
    }
`