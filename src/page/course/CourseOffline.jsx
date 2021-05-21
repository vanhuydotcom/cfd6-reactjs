import { CourseItem } from "../../component";

export default function CourseOffline({ offline }) {
    return (
        <section className="section-2 section-blue">
            <div className="container">
                <div className="textbox ">
                    <h3 className="sub-title">KHÓA HỌC</h3>
                    <h2 className="main-title">OFFLINE</h2>
                </div>
                <div className="list row">
                    {
                        offline.map((value, i) => <CourseItem
                            key={value.slug}
                            {...value}
                        />)
                    }
                </div>
                <div className="text-deco">C</div>
            </div>
        </section>
    )
}