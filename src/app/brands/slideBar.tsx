import styles from "../styles/index"
export default function SlideBar({brandCatalogue}) {
    return (
      <div className="relative">
        <h1 className="uppercase">Bộ lọc</h1>
        <div className="relative">
          <input
            className={`${styles.btn} w-30 h-10 pl-8`}
            placeholder="Tìm kiếm"
            type="text"
            name="search"
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${styles.btnColor} w-6 h-6 hover:border-[#4682B4]`}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>

        </div>
        <div>
            check box
            {brandCatalogue.map((brandCatalogue) => (
                <div key={brandCatalogue.id}>
                <input
                    type="checkbox"
                    id={brandCatalogue.id}
                    value={brandCatalogue.title}
                    className="rounded-full h-5 w-5 border-gray-300 focus:ring-gray-400 checked:bg-blue-600 checked:border-transparent "
                />
                <label htmlFor={brandCatalogue.id} className="text-[#204075]">{brandCatalogue.title}</label>
                </div>  
            ))}
        </div>
        <button className="mx-auto bg-white rounded-full px-3 py-2 w-[80px] h-12 border-2 hover:bg-[#204075] hover:border-[#FFFAFA]-300 ">Xóa</button>
      </div>
    );
  }