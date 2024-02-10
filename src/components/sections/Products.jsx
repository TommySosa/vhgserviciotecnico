import Product from "../ui/product";

export default async function Products() {
    const csv = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSdnMGT9gmluS7oMww_wMHIJCsUSkT3eoxTTCgRjek0ykWFj-YXyr4byXppWyuHQkINLdrPWA_tB0Q9/pub?output=csv", { next: { revalidate: 20 } }).then(
        (res) => res.text())
    const products = csv
        .split("\n")
        .slice(1)
        .map((row) => {
            const [id, name, description, price, image] = row.split(",");

            return { id, name, description, price, image }
        })

    return (
        <>
            <section className="container mx-auto px-4 md:px-6 my-16 pb-12">
                <div className="bg-gradient-to-r from-[#3f5efb] to-[#46fcb1] ">
                    <h2 className="text-3xl font-bold text-center text-white mb-6" id="productos">Productos</h2>
                </div>
                <div className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {
                                products.map((product) => (
                                    <Product key={product.name} name={product.name} description={product.description} price={product.price} image_url={product.image} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section >
        </>

    )
}