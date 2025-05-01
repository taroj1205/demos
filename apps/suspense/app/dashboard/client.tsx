'use client'
import { someFunc } from "@/utils";
import { memo, useCallback } from "react";

export const Client = memo(() => {
    const handleOnClick = useCallback(async () => {
        const {data, error} = await someFunc();
        alert(data)
    }, []);
    return (
        <button onClick={handleOnClick}>Client</button>
    )
})