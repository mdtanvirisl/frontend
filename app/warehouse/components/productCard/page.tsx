export default function ProductCard(props: any) {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={'http://localhost:3008/warehouse/getimage/' + props.data.filename} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> {props.data.productName}</h2>
                    ID: {props.data.productId} <br />
                    Product Code: {props.data.productCode} <br />
                    Quantity: {props.data.productQuantity} <br />
                    Catagory: {props.data.productCategory} <br />
                    Price: {props.data.productPrice} <br />
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}