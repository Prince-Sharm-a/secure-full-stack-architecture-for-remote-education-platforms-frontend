export default function PublicCourses(){
    const course = [{},{},{},{},{},{},{},{},{},{},{},{}];
    // console.log(course.length);
    return (
        <div className="justify-items-center my-10 not-md:my-5">
            <div className="grid lg:grid-cols-4 w-11/12 md:grid-cols-3 grid-cols-2 justify-items-center lg:space-y-10 md:space-y-6">
                {
                    course && course.map((e,i) => (
                        <div key={i} className="h-50 w-30 md:h-70 md:w-60 mx-1 lg:h-90 lg:w-70 rounded-2xl border border-zinc-400">
                            
                        </div>
                    ))
                }
            </div>            
        </div>
    )
}