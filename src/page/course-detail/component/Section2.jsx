import { Accordian } from "../../../component";
import React, { useState } from 'react'
import useDeLayLink from "../../../hook/useDelayLink";
export function Section2({ long_description, thumbnail, required, benefits, content, opening_time, schedule, teacher }) {
    // let delayLink = useDeLayLink()
    const [currentIndex, setCurrentIndex] = useState(-1)
    function handleClick(i) {
        setCurrentIndex(i)
        if (i === currentIndex) {
            setCurrentIndex(-1)
        }
    }
    return (
        <section className="section-2">
            <div className="container">
                <p className="des">{long_description}</p>
                <h2 className="title">giới thiệu về khóa học</h2>
                <div className="cover">
                    <img src={thumbnail?.link} style={{ width: "100%" }} alt="" />
                </div>
                <h3 className="title">nội dung khóa học</h3>
                {
                    content?.map((value, i) => <Accordian
                        key={value.i}
                        {...value} index={i + 1}
                        active={i === currentIndex}
                        clickAccdian={handleClick.bind(null, i)}
                    />
                    )
                }

                {/* <Accordian
                    date='Ngày 1'
                    title='Giới thiệu HTML, SEO, BEM.'
                    content="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers some tangible benefits over alternatives like VueJS for simple page interactions."
                />
                <Accordian date='Ngày 2'
                    title='CSS, CSS3, Flexbox, Grid'
                    content="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers some tangible benefits over alternatives like VueJS for simple page interactions." />
                <Accordian
                    date='Ngày 3'
                    title='Media Queries'
                    content="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers some tangible benefits over alternatives like VueJS for simple page interactions."
                />
                <Accordian
                    date='Ngày 4'
                    title='Boostrap 4'
                    content="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers some tangible benefits over alternatives like VueJS for simple page interactions."
                />
                <Accordian
                    date='Ngày 5'
                    title='Thực hành dự án website Landing Page'
                    content="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers some tangible benefits over alternatives like VueJS for simple page interactions."
                />
                <Accordian
                    date='Ngày 6'
                    title='Cài đặt Grunt và cấu trúc thư mục dự án'
                    content="I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that offers some tangible benefits over alternatives like VueJS for simple page interactions."
                /> */}

                <h3 className="title">yêu cầu cần có</h3>
                <div className="row row-check">
                    {
                        required?.map((e, i) =>
                            <div key={i} className="col-md-6">{e.content}</div>
                        )
                    }
                </div>
                <h3 className="title">hình thức học</h3>
                <div className="row row-check">

                    {
                        benefits?.map((e, i) => <div key={i} className="col-md-6">{e.content}</div>)
                    }
                </div>
                <h3 className="title">
                    <div className="date-start">lịch học</div>
                    <div className="sub">*Lịch học và thời gian có thể thống nhất lại theo số đông học viên.</div>
                </h3>
                <p>
                    <strong>Ngày bắt đầu: </strong> {opening_time} <br />
                    <strong>Thời gian học: </strong> {schedule}
                </p>
                <h3 className="title">Người dạy</h3>
                <div className="teaches">
                    <div className="teacher">
                        <div className="avatar">
                            <img src={teacher?.avatar.link} alt="" />
                        </div>
                        <div className="info">
                            <div className="name">{teacher?.title}</div>
                            <div className="title">{teacher?.position}</div>
                            <p className="intro">{teacher?.description}</p>
                            <p><strong>Website:</strong> <a href={teacher?.website}>{teacher?.website}</a></p>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="user">
                        <img src="/img/user-group-icon.png" alt="" /> 12 bạn đã đăng ký
            </div>
                    <div className="btn main btn-register round">đăng ký</div>
                    <div className="btn-share btn overlay round btn-icon">
                        <img src="/img/facebook.svg" alt="" />
                    </div>
                </div>
            </div>
        </section >
    )
}