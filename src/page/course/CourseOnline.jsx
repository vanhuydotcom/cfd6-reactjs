import { CourseItem } from "../../component";
export default function CourseOnline({ online }) {
    return (
        <section className="section-1">
            <div className="container">
                <h2 className="main-title">KHÓA HỌC CFD</h2>
                <p className="top-des">
                    The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                    has
                    a more-or-less normal
            </p>
                <div className="textbox">
                    <h3 className="sub-title">KHÓA HỌC</h3>
                    <h2 className="main-title">ONLINE</h2>
                </div>
                <div className="list row">
                    {
                        online.map((value, i) => <CourseItem
                            key={value.slug}
                            {...value}
                        />)
                    }

                </div>
            </div>
        </section>
    )
}