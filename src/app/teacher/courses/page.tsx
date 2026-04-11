import { Button } from "@/components/ui/button";

export default function TeacherCourses(){
    const course = [{},{},{},{},{},{},{},{},{},{},{},{}];
    return (
        <div className="justify-items-center my-10 not-md:my-5">
            <div className="w-11/12 p-3 rounded-2xl dark:bg-zinc-900/60 mb-4 flex">
                <Button className="ml-auto" variant={"outline"}>
                    Add New Course
                </Button>
            </div>
            <div className="grid lg:grid-cols-4 dark:bg-zinc-900/60 pt-3 rounded-2xl w-11/12 md:grid-cols-3 grid-cols-2 justify-items-center lg:space-y-10 md:space-y-6">
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