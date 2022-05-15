import  {Link} from 'react-router-dom'
import { useFirestore } from '../../hooks/useFirestore'
import { useState} from 'react'
import { FirebaseAddDocument } from '../../components/Firebase'
import { useTest } from '../../hooks/useTest'


// styles
import styles from './MyEvents.module.css'




export default function EventList({ events }) {
  const [collectionName, setCollectionName] = useState('temp')
  const [testTest, setTestTest] = useState('TestTest')

  console.log('running event list start')
  console.log(collectionName)
 const { addDocument, response } = useFirestore(collectionName)
//  const { addDocument, response } =   FirebaseAddDocument(collectionName)
  console.log(collectionName)


  const StartEvent = (eventPath,RoundCount) => {
//    firebaseAddDocument(eventPath)
  
    console.log('Start Event START')
   
   
    setCollectionName(eventPath)
    console.log(eventPath)  
    console.log(collectionName)

    for (let i = 1; i <= RoundCount; i++) {
      addDocument(eventPath,{"Status":"Inactive","roundNo":i})
    }
    
      
    console.log('Start Event END')

}

  
  return (
    <div>
    <ul className={styles.events} >
      {events.map((event) => (
        <li key={event.id}>
         <p className={styles.eventName}>{event.eventName}</p>
          <p className={styles.eventDate}>Starts: {event.eventStartDate}</p>
          <p><button className={styles.eventButton}>Edit</button></p>
          <p><button className={styles.eventButton} onClick={() => StartEvent("events/"+ event.id +"/rounds",event.eventRoundCount)}>Start</button></p> 
        
        </li>
      ))}
      
    </ul>
   
    </div>
    
  )

 
}