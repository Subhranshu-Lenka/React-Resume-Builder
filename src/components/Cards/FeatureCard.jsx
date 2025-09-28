function FeatureCard(
    { icon = "Icon", cardHeader = "Header", cardContent = "Simple Line Content" }
) {
    return (
        <>
            <div
                className="
                p-[3%] aspect-[1.2/1] max-w-[75%]
                border-2 rounded-2xl
                hover:shadow-cyan-200/50 hover:shadow-xl hover:scale-[1.05]
                transition-all duration-400 ease-in-out
                container
                "
            >
                <figure className="text-3xl">
                    <div className="rounded-full aspect-square max-w-fit p-[5%] mx-auto my-3
                    bg-gradient-to-r from-teal-200 to-teal-500">
                        {`${icon}`}
                    </div>
                </figure>
                <p className="font-bold text-xl my-3 card-header">
                    {`${cardHeader}`}
                </p>
                <p className="text-center italic p-2 card-content">
                    {`${cardContent}`}
                </p>
            </div>
        </>
    )
}

export default FeatureCard