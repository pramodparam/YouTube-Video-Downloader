
const Input = ({ urlValue, setUrlValue, handleDownload }) => {
    return (
        <>
          
            <div className="bg-gray-900  h-96 flex justify-center items-center">
               
                <div className="">
                   
                    <h2 className=" text-center text-white text-2xl lg:text-3xl font-bold mb-3">
                        <span className="text-red-500">YouTube </span>
                        Video Downloader
                    </h2>

                   
                    <div className="flex justify-center">
                        <div>
                        
                            <input
                                type="text"
                                placeholder="Enter url"
                                value={urlValue}
                                onChange={(e) => setUrlValue(e.target.value)}
                                className=" bg-gray-800 px-2 py-2 w-64 lg:w-96 outline-none border border-gray-600 rounded-l-lg text-white"
                            />
                           
                            <button onClick={handleDownload} type="button" className=" bg-gray-600 hover:bg-gray-500 py-2 px-5 border border-gray-600 rounded-r-lg text-black font-semibold">Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Input;