import React, { useState } from 'react'
import { Results } from './Results'

export const Searchbar = ({items, onItemSelected}) => {

    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    const handleChange = (e) => {
        const value = e.target.value
        setQuery(value)
    }

    function handleResults(items){
        setResults(items)
    }

    function handleItemSelected(){
        
    }

  return (
    <div>
        <div>{results.length} Results</div>
        <input type="text" onChange={handleChange} value={query} />
        <Results items={items}
        onItemSelected={handleItemSelected}
        query={query}
        onResultsCalculated={handleResults}/>
    </div>
  )
}
