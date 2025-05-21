import { Link } from "react-router-dom"

function Page2() {
    return(
        <div className="w-full bg-slate-700 h-[100vh] flex  justify-center items-center ">
            <div className="bg-yellow-50 w-[50%] h-[50%] flex flex-col justify-center items-center text-5xl rounded-2xl gap-14 text-center">
                <h1>Pilihan Anda Sedang Dalam Pengembangan</h1>
                <div className=" flex">
                    <Link to="/">
                        <button className=" text-3xl px-3 py-2 bg-teal-600 hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 rounded-4xl active:bg-teal-500 cursor-pointer">Kembali Ke <br /> Halaman Utama</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page2