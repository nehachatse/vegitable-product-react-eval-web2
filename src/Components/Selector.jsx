export default function Selector({category, selectCato}){
    return (
        <select name="categ" value={category} onChange={ (e) => selectCato(e.currentTarget.value)} style={{width:"70%", marginTop:"2rem"}}>
                <option value="fruit">FRUIT</option>
                <option value="vegitable">VEGETABLE</option>
                <option value="provision">PROVISIONS</option>
            </select>
    )
}