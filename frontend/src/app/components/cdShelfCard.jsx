"use client"
import {useState} from "react";
import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";


const CdShelfCard = (props) => {
    const router = useRouter();

    return (
        <div className="flex flex-col justify-center mx-auto pt-1.5 h-200 w-auto ">
            <Link className= " flex flex-col justify-center mx-auto h-200 w-auto items-center" href= {`/cd/${props.id}`} passHref>
                <Image width={100} height={100} src={props.imageUrl} alt={props.name}></Image>
                <p className="mt-2 text-black">{props.name}</p>
            </Link>
        </div>
    )
}

export default CdShelfCard;