import React from "react";

function Me() {
    return (
        <div className="flex flex-col w-full h-full gap-3">
            <div className="w-full bg-gray-600 flex flex-row justify-evenly p-2 rounded-2xl border-2 border-amber-50">
                <img src="fotoDiri.jpg" alt="" className="w-[120px] h-[120px] rounded-full object-cover object-center " />
                <div className="flex flex-col justify-center items-center text-white gap-2">
                    <p className="text-4xl font-bold">Muhammad Dzaky Raihan</p>
                    <p className="text-xl">Konten Kreator / Penulis / Pegiat Pemrograman</p>
                </div>
            </div>

            <div className="w-full p-4 bg-gray-600 flex flex-col justify-evenly rounded-2xl border-2 border-amber-100 ">
                <div className=" w-full justify-start mb-4">
                    <div className="flex flex-col mb-4">
                        <p className="text-2xl font-bold">Deskripsi</p>
                        <div className="h-1 w-28 bg-gray-500"></div>
                    </div>
                    <div>
                        <p className="text-xl">Raihan adalah seorang konten kreator yang berfokus pada pembuatan konten edukatif dan inspiratif. Saya juga aktif dalam dunia penulisan dan pemrograman, dengan tujuan untuk berbagi pengetahuan dan pengalaman saya kepada orang lain.</p>
                    </div>
                </div>

                <div className=" w-full justify-start ">
                    <div className="flex flex-col mb-4">
                        <p className="text-2xl font-bold">Biodata</p>
                        <div className="h-1 w-28 bg-gray-500"></div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div>
                            <p className="text-xl font-bold">2003</p>
                            <p className="text-xl">Lahir di Palembang, 2003</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">Juni 2021</p>
                            <p className="text-xl">Lulus dari Madrasah Aliyah Negeri 2 Palembang, Jurusan Sains</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">September 2022 - Agustus 2025 <span className="text-sm font-light">(ongoing)</span></p>
                            <p className="text-xl">Mahasiswa Informatika Universitas Multi Data Palembang</p>
                        </div>

                        <div>
                            <p className="text-xl font-bold">Februari 2025 - Juli 2025 <span className="text-sm font-light">(4 Bulan)</span></p>
                            <p className="text-xl mb-1">Kerja Praktik di LLDIKTI Wilayah 2</p>
                            <div className="flex flex-row gap-2">
                                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                    Laravel
                                </span>
                                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                    Tailwindcss
                                </span>
                            </div>
                        </div>

                        <div>
                            <p className="text-xl font-bold">September 2024 - Agustus 2025  <span className="text-sm font-light">(ongoing)</span></p>
                            <p className="text-xl mb-1">Konten Kreator Yt, Blogger</p>
                            <div className="flex flex-row gap-2">
                                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                    Pemrograman
                                </span>
                                <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                    Self Development
                                </span>
                            </div>
                        </div>

                        <div>
                            <p className="text-xl font-bold">Kemampuan Pemrograman</p>
                            <p className="text-xl mb-1">Javascript, PHP, CSS, Tailwindcss, Java, Python, Dart, Laravel React, Flutter, React-Redux, MySql, </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Me;