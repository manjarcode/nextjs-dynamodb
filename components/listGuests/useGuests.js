import {useState, useEffect,} from 'react'

export default function useGuests() {
    const [guests, setGuests] = useState([])
    
    useEffect(() => {
        fetch(`/api/guests`)
            .then(response => response.json())
            .then(response => {
                setGuests(response)
            })       
    }, [setGuests])    

    return guests   
}