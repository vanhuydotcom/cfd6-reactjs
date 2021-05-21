import { CourseItem } from "../../../component";

export function CourseList({ online, offline }) {
    return (
        <>
            <section className="section-courseoffline">
                <div className="container">
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
            </p>
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Offline</h2>
                    </div>
                    <div className="list row">
                        {
                            offline.map((value, i) => <CourseItem
                                key={value.slug}
                                {...value}
                            />)
                        }
                    </div>
                </div>
            </section>
            <section className="section-courseonline section-blue">
                <div className="container">
                    <div className="textbox">
                        <h2 className="main-title">Khóa học Online</h2>
                    </div>
                    <div className="list row">
                        {
                            online.map((value, i) => <CourseItem
                                key={value.slug}
                                {...value}
                            />)
                        }
                        {/* <CourseItem
                            name='Scss, Grunt JS và Boostrap 4'
                            des='One of the best corporate fashion brands in Sydney'
                            img='/img/img4.png'
                            teach_name='Trần Nghĩa'
                            teach_avatar='/img/avt.png'
                            status='da-ket-thuc' />
                        <CourseItem
                            name='UX/UI Design'
                            des='One of the best corporate fashion brands in Sydney'
                            img='/img/img5.png'
                            teach_name='Trần Nghĩa'
                            teach_avatar='/img/avt.png'
                            status='sap-khai-giang' />
                        <CourseItem
                            name='Web Responsive'
                            des='One of the best corporate fashion brands in Sydney'
                            img='/img/img6.png'
                            teach_name='Trần Nghĩa'
                            teach_avatar='/img/avt.png'
                            status='da-ket-thuc' /> */}
                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </>
    )
}