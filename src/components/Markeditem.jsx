import React, { useMemo } from "react";

export const Markeditem = ({ item, query, onClick }) => {

    const {left, center, right} = useMemo(() => getposition(item,query), [item,query])
  function getposition(item, query) {
    const index = item.title.toLowerCase().indexOf(query); ///retorna a partir de que parte del titulo aparece query
    const left = item.title.slice(0, index);
    const right = item.title.slice(index + query.length);
    const center = item.title.slice(index, index + query.length);

    return {
      left,
      center,
      right,
    };
  }
  return <button>{left}<span style={{backgroundColor: 'yellow'}}>{center}</span>{right} </button>
};
