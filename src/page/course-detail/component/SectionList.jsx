import { CourceItem } from "../../../component";

export function SectionList() {
    return (
        <>
            <section className="section-3">
                <div className="container">
                    <div className="textbox">
                        <h3 className="sub-title">DỰ ÁN</h3>
                        <h2 className="main-title">THÀNH VIÊN</h2>
                    </div>
                    <div className="list row">
                        <CourceItem
                            name='React JS'
                            des='One of the best corporate fashion brands in Sydney'
                            img='img/img3.png'
                            teach_name='Đặng Vương'
                            teach_avatar='img/avt.png'
                            status='da-ket-thuc' />
                        <CourceItem
                            name='Animation'
                            des='One of the best corporate fashion brands in Sydney'
                            img='img/img4.png'
                            teach_name='Trần Nghĩa'
                            teach_avatar='img/avt.png'
                            status='da-ket-thuc' />
                        <CourceItem
                            name='Scss, Grunt JS và Boostrap 4'
                            des='One of the best corporate fashion brands in Sydney'
                            img='img/img5.png'
                            teach_name='Trần Nghĩa'
                            teach_avatar='img/avt.png'
                            status='da-ket-thuc' />
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
                        <CourceItem
                            name='React JS'
                            des='One of the best corporate fashion brands in Sydney'
                            img='img/img3.png'
                            teach_name='Đặng Vương'
                            teach_avatar='img/avt.png'
                            status='da-ket-thuc' />
                        <CourceItem
                            name='Animation'
                            des='One of the best corporate fashion brands in Sydney'
                            img='img/img4.png'
                            teach_name='Trần Nghĩa'
                            teach_avatar='img/avt.png'
                            status='da-ket-thuc' />
                        <CourceItem
                            name='Scss, Grunt JS và Boostrap 4'
                            des='One of the best corporate fashion brands in Sydney'
                            img='img/img5.png'
                            teach_name='Trần Nghĩa'
                            teach_avatar='img/avt.png'
                            status='da-ket-thuc' />
                    </div>
                </div>
            </section>
        </>
    )
}