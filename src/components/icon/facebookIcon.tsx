export default function FacebookIcon({width="12px", height="12px"}: {width?:string | number, height?:string | number}){
    return (
        <svg width={width} height={height} viewBox="0 0 0.6 0.6" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path fill="#1877f2" d="M.563.3A.263.263 0 0 0 .3.037a.263.263 0 0 0-.041.522V.376H.192V.3h.067V.242C.259.176.298.14.358.14c.029 0 .059.005.059.005V.21H.384C.351.21.341.23.341.251V.3h.073L.402.376H.341v.183A.26.26 0 0 0 .563.3"/>
            <path fill="#fff" d="M.402.376.414.3H.341V.251C.341.23.351.21.384.21h.033V.145S.387.14.358.14C.298.14.259.176.259.242V.3H.192v.076h.067v.183a.3.3 0 0 0 .082 0V.376z"/>
        </svg>
    )
}