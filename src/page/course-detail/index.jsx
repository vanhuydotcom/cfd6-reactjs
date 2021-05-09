import { CourceItem } from "../../component";
import { Banner } from "./component/Banner";
import { Section2 } from "./component/Section2";
import { SectionList } from "./component/SectionList";

export function CourseDetail() {
    return (
        <main className="course-detail" id="main">
            <Banner />
            <Section2 />
            <SectionList />
        </main>
    )
}