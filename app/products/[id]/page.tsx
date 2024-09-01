export default function Products({params}: {params: {id: String}}){
    return (
        <div>Product {params.id}</div>
    )
}