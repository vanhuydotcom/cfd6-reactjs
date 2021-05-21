import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CourceItem } from "../../component";
import CourseApi from "../../service/courseApi";
import { Banner } from "./component/Banner";
import { Section2 } from "./component/Section2";
import { SectionList } from "./component/SectionList";

export function CourseDetail() {
    let { slug } = useParams()
    let [ListDetail, setListDetail] = useState({
        data: []
    })
    useEffect(() => {
        CourseApi.ListDetail(slug)
            .then(res => {
                setListDetail(res)
            })
    }, [])

    let [ListRelated, setListRelated] = useState({
        data: []
    })
    useEffect(() => {
        CourseApi.ListRelated(slug)
            .then(res => {
                setListRelated({
                    data: res.data
                })
            })
    }, [])
    console.log(ListDetail);
    return (
        <main className="course-detail" id="main">
            <Banner {...ListDetail.data} />
            <Section2 {...ListDetail.data} />
            <SectionList data={ListRelated.data} />
        </main>
    )
}