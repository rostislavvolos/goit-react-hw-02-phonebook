import style from './ContactList.module.css';


export default function ContactList({contact, onDelete}) { 
    return (
        <ul>
            {contact.map(({id, name, number}) => (
                <li key = {id}>
                    <p>{name}</p>
                    <p>{number}</p>
                    <button type='buttton' onClick={() =>  onDelete(id)}>Delete v jopu</button>
                </li>
            ))}
        </ul>
    )
}
