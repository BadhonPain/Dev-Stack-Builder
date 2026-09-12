import BannerImage from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                <div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
                        Build Your Ideal <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-5 text-[#475569] text-base sm:text-lg leading-relaxed max-w-lg">
                        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a
                            href="#technologies"
                            className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-white font-medium px-6 py-3 rounded-lg text-sm sm:text-base transition-colors shadow-sm"
                        >
                            Explore Technologies
                        </a>
                        <a
                            href="#learn-more"
                            className="border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-6 py-3 rounded-lg text-sm sm:text-base transition-colors"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img
                        src={BannerImage}
                        alt="Development Stack"
                        className="w-full max-w-md lg:max-w-lg object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;
