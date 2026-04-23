import { ImageResponse } from "next/og"

function getRandomLightHSL() {
  const h = Math.floor(Math.random() * 360); // any hue
  const s = Math.floor(Math.random() * 30) + 70; // 70–100%
  const l = Math.floor(Math.random() * 20) + 85; // 75–95% (light!)

  return `hsl(${h}, ${s}%, ${l}%)`;
}

export async function GET(request: Request){
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    const letter = name?.charAt(0).toUpperCase();
     
    return new ImageResponse((
        <div
        style={{
            display:"flex",
            backgroundColor:`${getRandomLightHSL()}`,
            width:"360px",
            height:"360px",
            justifyContent:"center",
            alignItems:"center",
            fontSize:"260px",
            fontWeight:"bold",
            color:"#364153",
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