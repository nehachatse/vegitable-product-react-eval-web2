import styled from 'styled-components'

const ProductElement = styled.div`
    background: ${(prop) => (prop.categ === "fruit" ? "pink" : prop.categ === "vegitable" ? "rgb(116, 212, 85)" : "rgb(255, 242, 66)")};
    border-bottom: 2px solid white;
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
                    <ProductElement key={ind} categ={item.catego}>
                        <h2>PRODUCT NAME: {item.title}</h2>
                        <h3>PRODUCT COST: {item.cost}</h3>
                        <p>CATEGORY: {item.catego}</p>
                    </ProductElement>)
                )
            }
        </>
    )
}