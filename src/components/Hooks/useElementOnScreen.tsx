/** @format */

import {useState, useRef, useEffect} from 'react'

const DEFAULT_OPTIONS = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
}
const useElementOnScreen = (options = DEFAULT_OPTIONS): Array<any> => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(e => {
            const [entry] = e
            setIsVisible(entry.isIntersecting)
        }, options)
        const ref = containerRef.current
        if (ref) {
            observer.observe(ref)
        }
        return () => {
            if (ref) {
                observer.unobserve(ref)
            }
        }
    }, [containerRef, options])
    return [containerRef, isVisible]
}

export default useElementOnScreen
