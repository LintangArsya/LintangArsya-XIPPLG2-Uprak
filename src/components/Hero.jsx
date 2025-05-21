
import Petani from "../assets/petanikode-hero.svg";

function Main() {
    return(
        <div className=" text-gray-100 bg-slate-800">
            <div className=" flex justify-center items-center">
                <div className=" px-6 py-20 w-100 md:w-1/2  gap-40 ">
                    <div className="  w-max">
                        <h1 className=" text-6xl font-bold mb-5 tracking-tighter mt-16">Petani Kode</h1>
                        <h3 className=" text-2xl font-light max-w-1/2">Belajar budidaya kode (coding) dengan tutorial yang mudah dipahami. Mostly pakai Linux</h3>
                    </div>
                    <div className=" flex gap-3.5 mt-4">
                        <div className=" px-3 py-2 bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-lg active:bg-teal-500">
                            <a href="">Mulai Belajar</a>
                        </div>
                        <div className=" px-3 py-2 bg-teal-400/10 border border-teal-400/50 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 text-teal-100 rounded-lg accent-teal-500">
                            <a href="">Join Newsletter</a>
                        </div>
                    </div>
                </div>
                <div className=" w-125 -mb-56">
                    <h1><img src={Petani} alt="" /></h1>
                </div>
            </div>
        </div>
    )
}

export default Main