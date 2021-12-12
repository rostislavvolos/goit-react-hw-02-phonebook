import style from './FilterList.module.css';

export default function FilterList ({filter, onFilterHandleChange}) {
    const onHandleChange = event => {
        onFilterHandleChange(event.target.value)
    }
    return (
        <label>
         Find contact by name
         <input type="text" value={filter} name="filter" onChange={onHandleChange}/>
        </label>
    )
}