import {useEffect, useState} from 'react'
import './App.css'
import {ApiData, fetchData} from "./data.ts";

function App() {
  const [nodeData, setNodeData] = useState<ApiData>([])

  useEffect(() => {
    fetchData().then(data => {
      setNodeData(data as ApiData)
    })
  }, [])

  const traverseNode = (data: ApiData | undefined, indent: boolean) => {
    if(!data || data.length == 0) return;
    return data.map(node => {
      return (
        <li className={indent? "nested" : "main" } key={node.id}>
          {node.name}
          {traverseNode(node.children, true)}
        </li>
      )
    })
  }

  return (
    <>
      {traverseNode(nodeData, false)}
    </>
  )
}

export default App
