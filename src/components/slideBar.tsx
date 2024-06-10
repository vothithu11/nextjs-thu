"use client";
import styles from "../app/styles/index";
import { useState } from "react";
import { brandList } from "@/data/data";
import CustomButton from "./CustomButton";
import { SlideBarProps, Brand } from "@/data/types";

export default function SlideBar({ getSearchResults }: SlideBarProps) {
  const [keyword, setKeyword] = useState('');
  const [updateBrandList, setUpdateBrandList] = useState<Brand[]>(brandList);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const results = updateBrandList.filter((value) =>
      value.title.toLowerCase().includes(keyword.toLowerCase())
    );
    getSearchResults(results);
  };

  const handleClear = () => {
    setKeyword('');
    setUpdateBrandList(brandList);
    getSearchResults(brandList);
  };

  const handleCheckboxChange = (id: number) => {
    const updatedList = updateBrandList.map((value) => {
      if (value.id === id) {
        return { ...value, completed: !value.completed };
      }
      return value;
    });
    setUpdateBrandList(updatedList);
    getSearchResults(updatedList.filter(value => value.completed));
  };

  return (
    <div className="sticky top-1/4 text-custom max-lg:hidden">
      <h1 className="uppercase p-2 text-lg font-semibold">Bộ lọc</h1>
      <form onSubmit={handleSearch} className="relative w-64 h-10">
        <input
          className="w-full h-full pl-8 relative rounded-full py-2.5 px-5 font-medium text-[#003da5] transition-colors overflow-hidden border-2 border-[#003da5] hover:border-[3px] active:border-[3px] active:border-[#003da5] focus:outline-none focus:border-[#003da5] focus:ring-[#003da5] focus:border-[3px]"
          placeholder="Tìm kiếm"
          type="text"
          name="search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 absolute right-4"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </form>
      <div className="">
        {updateBrandList.map((brand) => (
          <div key={brand.id}>
            <input
              type="checkbox"
              checked={brand.completed}
              onChange={() => handleCheckboxChange(brand.id)}
              className="rounded-full h-5 w-5 mr-4 mt-4 border-[#204075] focus:ring-[#204075] checked:bg-[#204075] cursor-pointer checked:border-transparent"
            />
            <label className="text-[#204075] hover:font-semibold">{brand.title}</label>
          </div>
        ))}
      </div>
      <CustomButton
        title="Xóa"
        handleClear={handleClear}
      />
    </div>
  );
}