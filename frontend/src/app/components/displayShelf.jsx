import Image from "next/image";
import CdShelfCard from "./cdShelfCard";
import {useEffect, useState} from "react";




export default function DisplayShelf(props) {
    const [displayCds, setDisplayCds] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const cdPerPage = 24;
    const maxPages = Math.ceil(props.cdArray.length / cdPerPage );
    const cdLength = props.cdArray.length;
    const setFirst = () => {
        if(maxPages === 1){
            setDisplayCds(props.cdArray.slice(0, cdLength));
        } else {
            setDisplayCds(props.cdArray.slice(0,cdPerPage));
        }//if
    };//setFirstPage
    const setLast = () => {
        setDisplayCds(props.cdArray.slice((currentPage * cdPerPage), cdLength));
    }; //lastPage
    const displayNext = () => {
        if(currentPage + 1 === maxPages){
            setLast();
        } else{
            setDisplayCds(props.cdArray.slice((currentPage * cdPerPage),(currentPage * cdPerPage) + cdPerPage));
        } //if
        setCurrentPage(currentPage+1);
    }; //display next page
    const displayPrev = () => {
      if( currentPage - 1 === 1){
          setFirst();
          setCurrentPage(currentPage -1);
      } else{
          setCurrentPage(currentPage -1);
          const n = currentPage -1;
          setDisplayCds(props.cdArray.slice((n * cdPerPage),(n * cdPerPage) + cdPerPage ));
      }
    }
    useEffect(() => {
        console.log(props.cdArray);
        setFirst();
    }, [props.cdArray]);

    return (
        <div className="pt-4 mx-auto flex justify-center items-center">
            {/* Fixed width and height for the container */}
            <div className="mt-4 border-t-2 relative w-[625px] h-[870px]">
                {/* Background image */}
                <Image
                    src="/shelf.png"
                    alt="Shelf Background"
                    width={1250}
                    height={1740}
                    objectFit="cover"
                    priority
                />

                {/* Grid overlay */}
                <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 grid-rows-6 mt-4 p-2">
                    {/* Dynamically render the CDs */}
                    {displayCds.map((cd, index) => (
                        <div key={cd.id} className="flex flex-box align-bottom pb-1 ml-3">
                            <CdShelfCard id={cd.id} name={cd.name} imgUrl={cd.imgUrl}/>
                        </div>
                    ))}
                </div>
                {/*Page Buttons*/}
                <div className= "flex flex-box justify-center justify-items-center gap-10">
                    <button className={`text-black px-4 py-3 ${currentPage === 1? 'cursor-not-allowed':'hover:text-white'}`}
                    onClick={displayPrev}
                    disabled={currentPage === 1}>Prev</button>
                    <button className={`text-black px-4 py-3  ${currentPage === maxPages? 'cursor-not-allowed' : 'hover:text-white'}`}
                    onClick={displayNext}
                    disabled={currentPage === maxPages}>Next</button>
                </div>
            </div>
        </div>
    )
}