import React, { useEffect } from "react";
import { useState, useMemo } from "react";
import { Markeditem } from "./Markeditem";
/*
INDEXOF

.indexOf(query): Luego, se llama al método indexOf() en el resultado de la expresión anterior. 
El método indexOf() busca la posición de una subcadena (query en este caso) dentro de una cadena 
(el título en minúsculas). Si encuentra la subcadena en la cadena, devuelve la posición
de la primera ocurrencia de la subcadena; de lo contrario, devuelve -1. Es decir, si
query se encuentra en el título, obtendrás un número mayor o igual a cero, de lo contrario, obtendrás -1.
*/
export const Results = ({
  items,
  onItemSelected,
  query,
  onResultsCalculated,
}) => {
  const [results, setResults] = useState([]);
  const filteredItems = useMemo(() => findMatch(items, query), [items, query]);

  useEffect(() => {
    onResultsCalculated(results)
  }, [results])

  function findMatch(items, query) {
    const res = items.filter((i) => {
      return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
    });

    setResults(res);
    return res; ///memoriza el resultado de res
  }
  ///se ejecuta la funcion solo cuando hay un cambio en items o query,
  ///diferenciada de useeffect ya que esta retorna un valor, el correspondiente a la funcion indicada dentro

  return (
    <div>
      {query !== ""
        ? filteredItems.map((item) => (
            <Markeditem  item={item} onClick={onItemSelected} query={query}/>
        ))
        : ""}
    </div>
  );
};
