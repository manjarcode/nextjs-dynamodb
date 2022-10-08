import ListGuests from '../components/listGuests'

export default function Home() {
  return (
    <div>
      <h1>Retrieving guests from DynamoDB</h1>
      <ListGuests />
    </div>
  )
}
