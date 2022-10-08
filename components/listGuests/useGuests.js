import {useState, useEffect,} from 'react'
import getConfig from '../../config'

export default function useGuests() {
    const [guests, setGuests] = useState([])
    
    useEffect(() => {
        const {host} = getConfig()
        fetch(`${host}/api/guests`)
            .then(response => response.json())
            .then(response => {
                setGuests(response)
            })       
    }, [setGuests])    

    return guests   
}