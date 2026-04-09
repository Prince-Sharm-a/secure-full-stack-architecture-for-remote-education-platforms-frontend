import { ImageResponse } from "next/og"

export async function GET(request: Request){
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    const letter = name?.charAt(0).toUpperCase();
     
    return new ImageResponse((
        <div
        style={{
            display:"flex",
            backgroundColor:"transparent",
            width:"360px",
            height:"360px",
            justifyContent:"center",
            alignItems:"center",
            fontSize:"260px",
            fontWeight:"800",
            color:"#9f9fa9",
            fontFamily:"sans-serif",
        }} >
            <span style={{lineHeight:"1",transform:"translateX(10px)"}}>{letter}</span>
        </div>
    ),
    {
        width:360,
        height:360
    })
}