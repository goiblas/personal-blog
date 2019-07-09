import React from "react";
import { connect } from "frontity";

const diffFromNow = ts => Math.floor((ts - +Date.now()) / 1000 / 60 / 60)

const Timeago = ({ state, date }) => {

    if(typeof window == 'undefined') {
        return ''
    }

    const { lang } = state.frontity.lang;
    const articleDate = new Date(date);

    const rtf = new Intl.RelativeTimeFormat( lang, { style: 'short' })
    const diff = diffFromNow(date)
    const timeago = diff > -24
      ? rtf.format(diff, 'hours')
      : rtf.format(Math.floor(diff / 24), 'days')

    return (
        <time pubdate="true" dateTime={ date.toString() }>{timeago}</time>
    )
}

export default connect(Timeago);