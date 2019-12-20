import React from "react";
import { connect, styled } from "frontity";
import Disqus from 'disqus-react';
import useInView from '@frontity/hooks/use-in-view';

const Comments = ({ state }) => {
    if(state.frontity.platform !== 'client') {
        return null
    }

    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];

    const disqusShortname = 'goiblas';

    const threadConfig = {
        url: `https://${disqusShortname}.com${state.router.link}`,
        identifier: post.id,
        title: post.title.rendered,
    };

    const [isVisible, ref] = useInView({ rootMargin: "600px" });

    return (
        <Container ref={ref}> 
            {isVisible && <Disqus.DiscussionEmbed shortname={disqusShortname} config={threadConfig} />}
        </Container>
    )
}

export default connect(Comments);

const Container = styled.div`
    --margin-top: 3;
    --padding-bottom: 2;

    @media ( max-width: 800px) {
        margin-bottom: var(--header-height);
    }
`
