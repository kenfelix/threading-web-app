const Banner = () => {
    return (
        <div className="relative overflow-hidden w-full bg-black">
                <div className="flex animate-carousel">
                    {/* Slide 1 */}
                    <div className="flex-shrink-0 w-full flex justify-between items-center px-5 text-[12px] leading-[14px] h-8 bg-black space-x-5">
                        <div className="flex items-center space-x-1.5">
                            <span className="text-white">All participants</span>
                            <span className="text-blue-600 leading-[18px]">3 303 518</span>
                        </div>
                        <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                        <div className="flex items-center space-x-1.5">
                            <span className="text-white">Joined in 24 hours</span>
                            <span className="text-blue-600 leading-[18px]">764</span>
                        </div>
                        <div className="hidden sm:flex w-1 h-1 bg-blue-600 rounded-full"></div>
                        <div className="hidden sm:flex items-center space-x-1.5">
                            <span className="text-white">Profit users result</span>
                            <span className="text-blue-600 leading-[18px]">1 317 739 367</span>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="flex-shrink-0 w-full flex justify-between items-center px-5 text-[12px] leading-[14px] h-8 bg-black space-x-5">
                        <div className="flex items-center space-x-1.5">
                            <span className="text-white">All participants</span>
                            <span className="text-blue-600 leading-[18px]">3 303 518</span>
                        </div>
                        <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                        <div className="flex items-center space-x-1.5">
                            <span className="text-white">Joined in 24 hours</span>
                            <span className="text-blue-600 leading-[18px]">764</span>
                        </div>
                        <div className="hidden sm:flex w-1 h-1 bg-blue-600 rounded-full"></div>
                        <div className="hidden sm:flex items-center space-x-1.5">
                            <span className="text-white">Profit users result</span>
                            <span className="text-blue-600 leading-[18px]">1 317 739 367</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Banner