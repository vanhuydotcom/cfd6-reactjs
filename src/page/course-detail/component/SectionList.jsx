import { data } from "jquery";
import { CourseItem } from "../../../component";

export function SectionList({ data }) {
    return (
        <>
            <section className="section-3">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">DỰ ÁN</h3>
                        <h2 className="main-title">THÀNH VIÊN</h2>
                    </div>
                    <div className="list row">

                    </div>
                </div>
            </section>
            <section className="section-4">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">Khóa học</h3>
                        <h2 className="main-title">Liên quan</h2>
                    </div>
                    <div className="list row">
                        {
                            data?.map((value, i) =>
                                <div className="col-md-4 course">
                                    <div className="wrap">
                                        <a href="#" className="cover">
                                            <img src={value.thumbnail.link} alt="" />
                                        </a>
                                        <div className="info">
                                            <a className="name" href="#">
                                                {value.title}
                                            </a>
                                            <p className="des">
                                                {value.short_description}
                                            </p>
                                        </div>
                                        <div className="bottom">
                                            <div className="teacher">
                                                <div className="avatar">
                                                    <img src={value.teacher.avatar} alt="" />
                                                </div>
                                                <div className="name">{value.teacher.title}</div>
                                            </div>
                                            <div className="register-btn">Đăng Ký</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </section>
        </>
    )
}