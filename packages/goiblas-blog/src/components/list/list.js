import React from "react";
import { connect } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import Hero from "./hero";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  return (
    <>
      {data.isHome && (
        <Hero />
      )}
        <div className="entry-content">
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <Item key={item.id} item={item} />;
          })}
        </div>
      <Pagination />
    </>
  );
};

export default connect(List);