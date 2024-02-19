
const ProductsData = ({users}) =>{
    return(
        <>
        {
            users.map((post) =>{
                const {id, title, price, description} = post;
                return(
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{price}</td>
                        <td>{description}</td>
                    </tr>
                )
            })
        }
        </>
    )
    }
    export default ProductsData;