export default function YoutubeIcon({width="12px", height="12px"}: {width?:string | number, height?:string | number}){
    return (
        <svg
        width={width}
        height={height}
        viewBox="0 0 0.8 0.8"
        xmlns="http://www.w3.org/2000/svg"
        fill="none">
            <path fill="red" d="M.736.232A.09.09 0 0 0 .674.17C.619.155.4.155.4.155s-.219 0-.274.014a.09.09 0 0 0-.062.062C.05.286.05.4.05.4s0 .114.014.168c.008.03.032.054.062.062C.181.645.4.645.4.645s.219 0 .274-.014A.09.09 0 0 0 .736.569C.75.514.75.4.75.4S.75.286.736.232"/>
            <path fill="#fff" d="M.33.505.512.4.33.295z"/>
        </svg>
    )
}