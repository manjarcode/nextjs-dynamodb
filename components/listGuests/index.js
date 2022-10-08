import useGuests from './useGuests.js'

export default function ListGuests() {
    const guests = useGuests()

    return (<ul>
        {guests.map(({id, name}) => {
            return <li key={id}> {name}</li>
        })}
    </ul>)
}