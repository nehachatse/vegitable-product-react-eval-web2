import styled from 'styled-components'

const ProductElement = styled.div`
    background: pink;
    border-bottom: 2px solid black;
    border-radius: 10px;
    margin: 1rem auto;
    padding: 1rem;
    width: 70%;
    text-align: left
    
`;
export default function ProductItem({data}){
    return (
        <>

            {
                 data.map( (item, ind) => (
                    <ProductElement key={ind}>
                        <h2>PRODUCT NAME: {item.title}</h2>
                        <h3>PRODUCT COST: {item.cost}</h3>
                        <p>CATEGORY: {item.catego}</p>
                    </ProductElement>)
                )
            }
        </>
    )
}