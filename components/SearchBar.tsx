"use client";

import React, {useState} from "react";
import {useRouter} from "next/navigation";

import SearchManufacturer from "./SearchManufacturer";
import {SearchButton} from "@/components/index";
import Image from "next/image";
import {SearchBarProps} from "@/types";

function SearchBar({setManufacturer, setModel}: SearchBarProps) {
    const [searchManufacturer, setSearchManufacturer] = useState('');
    const [searchModel, setSearchModel] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchManufacturer === '' && searchModel === '') {
            return alert('Please fill in the search bar');
        }

        setModel(searchModel);
        setManufacturer(searchManufacturer);
    }

    return (
        <form className={"searchbar"} onSubmit={handleSearch}>
            <div className={"searchbar__item"}>
                <SearchManufacturer
                    selected={searchManufacturer}
                    setSelected={setSearchManufacturer}
                />

                <SearchButton otherClasses={"sm:hidden"}/>
            </div>

            <div className={"searchbar__item"}>
                <Image
                    src={"/model-icon.png"}
                    width={25}
                    height={25}
                    className={"absolute w-[20px] h-[20px] ml-4"}
                    alt={"car model"}
                />
                <input
                    type={"text"}
                    name={"model"}
                    value={searchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
                    placeholder={"Tiguan"}
                    className={"searchbar__input"}
                />
                <SearchButton otherClasses={"sm:hidden"}/>
            </div>
            <SearchButton otherClasses={"max-sm:hidden"}/>
        </form>
    );
}

export default SearchBar;