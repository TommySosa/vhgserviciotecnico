export default function Product({ name, image_url, description, price }) {
    return (
        <div className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
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
                        <a href="#">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-white font-extralight">{description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-400">${price}</p>
            </div>
        </div>
    )
}