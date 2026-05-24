import BackButton from "@/components/button/backButton";
import Editor from "@/components/Editor";

export default function NewCourse(){
    return (
        <div>
            <BackButton title="Create New Course" />
            <Editor />
        </div>
    )
}