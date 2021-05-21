import { useEffect, useState } from "react";
import { CourseItem } from "../../component";
import CourseApi from "../../service/courseApi";
import { Action } from "./component/Action";
import { Banner } from "./component/Banner";
import { CourseList } from "./component/CourseList";
import { Different } from "./component/Different";
import { Gallery } from "./component/Gallery";
import { Testimonial } from "./component/Testimonial";

export function Home() {
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
            <Banner />
            <CourseList {...list} />
            <Different />
            {/* <section class="section-3">
            <div class="container">
                <div class="video">
                    <iframe id="video-intro"
                        src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen allowscriptaccess="always"></iframe>

                    <div class="video-src" data-src="video/CFD-video-intro.mp4"></div>
                    <div class="play-btn btn-video-intro">
                        <img src="img/play-video-btn.png" alt="">
                    </div>
                </div>
            </div>
        </section> */}
            <Testimonial />
            <Gallery />
            <Action />
        </main>
    )
}