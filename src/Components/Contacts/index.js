import {useEffect, useState} from 'react'
import List from './List'
import Form from './Form'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname:"Hans",
      phone_number:"123124"
    },
    {
      fullname:"Phillip",
      phone_number:"456457"
    },
    {
      fullname:"Rene",
      phone_number:"789780"
    }
  ])

  useEffect(() => {
    console.log(contacts)
  }, [contacts])

  return (
    <div>
      <Form addContact={setContacts} contacts={contacts}/>
      <List contacts={contacts}/>      
    </div>
  )
}

export default Contacts