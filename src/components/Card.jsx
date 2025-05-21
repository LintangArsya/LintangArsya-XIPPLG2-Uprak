import React, { useEffect, useState } from "react";
import Notfound from '../assets/notfound.jpg'

function Card() {
    const [posts, setpost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setpost(data))
            .catch((posts) => console.error('Gagal fetch', posts))
    }, []);

    return (
        <div className=" bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-white tra p-7 flex flex-col justify-center items-center">
            <div className=" mt-16 gap-9">
                <div className="">
                    <h2 className=" font-bold text-teal-600 dark:text-teal-400 text-sm">Kategori</h2>
                    <h1 className=" font-bold">Mau belajar apa hari ini?</h1>
                    <h2>Temukan tutorial berdasarkan minatmu.</h2>
                </div>
                <div className=" flex gap-5 mt-10">
                    <div className="bg-white dark:bg-slate-800 hover:shadow-lg  dark:hover:outline-slate-600 dark:hover:outline-1 rounded-3xl p-3 w-max">
                        <i className='bx bx-code-alt text-4xl bg-indigo-500 rounded-2xl p-2' ></i>
                        <h1 className=" font-bold mt-4">Basic Programming</h1>
                        <h3 className=" mt-3">Baca tutorial dasar-dasar pemogramman <br /> menggunakan C, C++, C#, Java, Javascript, dan <br /> masih banayak lagi.</h3>
                    </div>
                    <div className="bg-white dark:bg-slate-800 hover:shadow-lg  dark:hover:outline-slate-600 dark:hover:outline-1 rounded-3xl p-3 w-max">
                        <i className='bx bx-planet text-4xl bg-orange-500 rounded-2xl p-2'></i>
                        <h1 className=" font-bold mt-4">Web Programming</h1>
                        <h3 className=" mt-3">Baca tutorial cara membuat web. Mulai dari HTML,  <br /> CSS, JS, MySQL, Codeigniter, React, masih <br /> banayak lagi.</h3>
                    </div>
                    <div className="bg-white dark:bg-slate-800 hover:shadow-lg  dark:hover:outline-slate-600 dark:hover:outline-1 rounded-3xl p-3 w-max">
                        <i className='bx bx-dock-top text-4xl bg-cyan-500 rounded-2xl p-2' ></i>
                        <h1 className=" font-bold mt-4">Basic Programming</h1>
                        <h3 className=" mt-3">Baca tutorial dalam kategori lainnya seperti Mobile <br /> Programming, Game Programming, IoT, Blockhain, <br /> dan masih banayak lagi.</h3>
                    </div>
                </div>
            </div>
            <div className=" mt-16">
                <div className="">
                    <h2 className=" font-bold text-teal-600 dark:text-teal-400 text-sm">UPDATE</h2>
                    <h1 className=" font-bold">Apa yang Baru di Petani Kode? 🔥 </h1>
                    <h2>Baca artikel terbaru yang masih fresh dan hangat</h2>
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 mt-10 w-full max-w-6xl">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white dark:bg-slate-800 hover:shadow-lg  dark:hover:outline-slate-600 dark:hover:outline-1 rounded-3xl p-3">
                            <a href="">
                                <h1>{post.userid}</h1>
                                <img src={Notfound} alt="" className=" flex justify-center  rounded-3xl w-50" />
                                <h1 className=" font-bold">{post.id}</h1>
                                <h2 className=" font-bold">{post.title}</h2>
                                <h3 className=" font-normal ">{post.body}</h3>
                            </a>
                            
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Card