import { FaEnvelope, FaPhone, Fa,FaIdBadge } from "react-icons/fa"

export default function ClientInfo({client}) {
  return (
    <div>
      <h5 className="mt-5">Client Info</h5>
      <ul className="list-group">
        <li className='list-group-item'>
            <FaIdBadge className="icon" /> {client.name}
        </li>
        <li className='list-group-item'>
            <FaEnvelope className="icon" /> {client.email}
        </li>
        <li className='list-group-item'>
            <FaPhone className="icon" /> {client.phone}
        </li>
      </ul>
    </div>
  )
}