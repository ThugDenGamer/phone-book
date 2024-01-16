import {useState} from 'react'

function List(  {contacts }) {

  const [filterText, setFilterText] = useState('')

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase())
    )
  })

  return (
    <div>

      <input placeholder='Filter contact' value={filterText} onChange={(e) => setFilterText(e.target.value)}/>
      
      <ul>
        {
          filtered.map((c, i) => <li key={i}>{c.fullname}</li>)
        }
      </ul>
    </div>
  )
}

export default List