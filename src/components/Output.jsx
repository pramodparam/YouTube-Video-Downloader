import Loader from "./Loader";


const Output = ({ data, loading }) => {
    return (
        <div className="flex justify-center mt-2 lg:mt-5">
            {
                loading ?
                    (
                        <div>
                            <Loader />
                        </div>
                    )
                    :
                    (
                        <div className="">
                            {data !== null ?
                                (
                                    <div>
                                     
                                        <iframe
                                            src={`${data.url}`}
                                            title="video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            className=" rounded-lg w-96 h-56 lg:w-[46em] lg:h-[26em]"
                                        />

                                     
                                        <div className="">
                                            {data?.info.map((formatName, index) => {
                                                return (
                                                    <div key={index} className="bg-gray-800 hover:bg-gray-700 mt-4 text-center py-4 mb-2 text-white font-black cursor-pointer rounded-lg">
                                                        <a
                                                            href={formatName.url}
                                                            target="_blank"
                                                            download
                                                        >
                                                            {formatName.mimeType.split(';')[0] + " "}
                                                            {formatName.hasVideo
                                                                ?
                                                                formatName.height + "p"
                                                                :
                                                                ""
                                                            }
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                                :
                                (
                                    <div className="">
                                      
                                        <div className="flex justify-center">
                                            <img className="mb-2" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                                        </div>
                                       
                                        <h1 className="text-center font-semibold text-xl">No downloads yet</h1>
                                    </div>

                                )
                            }
                        </div>
                    )
            }


        </div>
    );
}

export default Output;