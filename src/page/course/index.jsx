import { useEffect, useState } from "react";
import { CourseItem } from "../../component";
import CourseApi from "../../service/courseApi";
import CourseOffline from "./CourseOffline";
import CourseOnline from "./CourseOnline";

export function Course() {
    let [list, setList] = useState({
        offline: [],
        online: []
    })
    useEffect(() => {
        CourseApi.list()
            .then(res => {
                setList(res)
            })
    }, [])
    return (
        <main className="homepage" id="main">
            <CourseOnline {...list} />
            <CourseOffline {...list} />
        </main>
    )

}