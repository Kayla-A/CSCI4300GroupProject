import {useEffect, useState} from "react";
import React from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";
import Image from "next/image";


const CdShelfCard = (props) => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [cutOff, setCutOff] = useState(false);
    useEffect(() => {
        if(props.name.length > 12){
            setName(props.name.slice(0,10) + "...");
            setCutOff(true);
        } else{
            setName(props.name);
        }
        console.log(props.imgUrl);
    }, [props.name]);

    return (
        <div className="flex flex-col justify-center mx-auto pt-1.5 h-200 w-auto ">
            <style>
                {`
                    .hovertext {
                        position: absolute;
                        left: 50%;
                        bottom: 100%;
                        transform: translateX(-50%);
                        visibility: hidden;
                        opacity: 0;
                        width: 120px;
                        background-color: black;
                        color: white;
                        text-align: center;
                        padding: 5px 0;
                        border-radius: 6px;
                        font-size: 12px;
                        transition: opacity 0.3s ease, visibility 0.3s ease;
                    }

                    .hover-container:hover .hovertext {
                        visibility: visible;
                        opacity: 1;
                    }
                `}
            </style>
            <Link className=" flex flex-col justify-center mx-auto h-200 w-auto items-center" href={`/cd/${props.id}`}
                  passHref>
                <Image width={100} height={100} src={props.imgUrl} alt={props.name}></Image>
                <p className="mt-2 text-black relative hover-container">
                    {name}
                    {cutOff && (
                        <span className="hovertext">
                            {props.name}
                        </span>
                    )}
                </p>
            </Link>
        </div>
    )
}

export default CdShelfCard;