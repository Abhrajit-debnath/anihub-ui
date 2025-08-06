import { useEffect, useState } from "react";

function windowSize() {
    const [Size, setSize] = useState(0)

    useEffect(() => {
        const handelSize = () => {
            setSize(window.innerWidth)
        }
        window.addEventListener("resize", handelSize)
        return () => window.removeEventListener('resize', handelSize)
    }, [])

    return Size

}

export default windowSize
