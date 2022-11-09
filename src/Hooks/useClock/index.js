import React, { useEffect, useState } from 'react'; // JSX

const useClock = () => {
    const [date, setDate] = useState(new Date()) // ['', (newValue)=>{}]
  
    useEffect(() => {
      console.log('Date updated:', date)
    }, [date])
  
    useEffect(() => {
      const tid = setInterval(() => { setDate(new Date()) }, 1000)
      return () => { // On unmount
        return clearInterval(tid)
    }
    }, [])
  
    // Clock
    const hours = `${date.getHours()}`.padStart(2, '0')
    const minutes = `${date.getMinutes()}`.padStart(2, '0')
    const seconds = `${date.getSeconds()}`.padStart(2, '0')
    const clock = `${hours}:${minutes}:${seconds}`
  
    return { clock } // { clock: clock }
  }

  export default useClock
