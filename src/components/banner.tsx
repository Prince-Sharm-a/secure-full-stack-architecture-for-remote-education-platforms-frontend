import BannerImage from "./banner-image"


export default async function Banner(){
    const imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    const title="Welcome to Shopy"
    const subtitle="Best deals, every day"

    return (
        <div className="relative flex m-1 mb-4 h-[86.34px] rounded-xl overflow-hidden md:h-[198.73px] shadow shadow-zinc-400">
            <BannerImage />
        </div>
    )
}