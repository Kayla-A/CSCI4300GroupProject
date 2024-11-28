import React from "react";
import Link from "next/link";

export default function RestrictedAccess(){
    return(
        <div className="p-2">
            <title className="text-7xl">Restricted Access</title>
            <p>You cannot access this page.</p>
            <Link href="../">
                <button className="rounded bg-red-500 text-white px-4 py-3 hover:bg-white hover:text-black">
                    Return to home
                </button>
            </Link>
        </div>
    )
}