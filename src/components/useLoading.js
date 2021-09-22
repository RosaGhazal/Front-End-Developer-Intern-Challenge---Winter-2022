import React, { useState } from "react";
import Loading from "./Loading";


export default function useLoading(){
    const [loading, setLoading] = useState(false);

    return[
        loading ? <Loading /> : null,
        () => setLoading(true),
        () => setLoading(false)
    ];
};