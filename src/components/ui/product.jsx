import CheckoutIcon from "../icons/checkout"
export default function Product({ name, image_url, description, price }) {
    return (
        <div className="group relative">
            <div className="w-full  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                    alt={name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    height="320"
                    src={image_url}
                    style={{
                        aspectRatio: "320/320",
                        objectFit: "cover",
                    }}
                    width="320"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700 dark:text-white font-bold ">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-white font-extralight">{description}</p>

                </div>
                <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-400">${price}</p>
                    <div className="relative">
                        <a href={`https://wa.me/3816610058?text=Hola!%20Me%20interesa%20el%20producto%20${name}`} target="_blank">
                            <CheckoutIcon className="absolute right-0 top-1 m-auto h-4 w-4 text-gray-500" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}