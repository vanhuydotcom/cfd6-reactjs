import { CourceItem } from "../../component";

export function Course() {
    return (
        <main className="homepage" id="main">
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
                        <CourceItem
                            name='Front-end căn bản'
                            des='One of the best corporate fashion brands in Sydney'
                            img='img/img1.png'
                            teach_name='Trần Nghĩa'
                            teach_avatar='img/avt.png'
                            status='da-ket-thuc'
                        />
                        <CourceItem
                            name='React JS'
                            des='One of the best corporate fashion brands in Sydney'
                            img='img/img2.png'
                            teach_name='Đặng Vương'
                            teach_avatar='img/avt.png'
                            status='dang-dien-ra' />
                        <CourceItem
                            name='Animation'
                            des='One of the best corporate fashion brands in Sydney'
                            img='img/img3.png'
                            teach_name='Trần Nghĩa'
                            teach_avatar='img/avt.png'
                            status='sap-khai-giang' />
                        <CourceItem
                            name='Scss, Grunt JS và Boostrap 4'
                            des='One of the best corporate fashion brands in Sydney'
                            img='img/img4.png'
                            teach_name='Trần Nghĩa'
                            teach_avatar='img/avt.png'
                            status='da-ket-thuc' />
                        <CourceItem
                            name='UX/UI Design'
                            des='One of the best corporate fashion brands in Sydney'
                            img='img/img5.png'
                            teach_name='Trần Nghĩa'
                            teach_avatar='img/avt.png'
                            status='sap-khai-giang' />
                        <CourceItem
                            name='Web Responsive'
                            des='One of the best corporate fashion brands in Sydney'
                            img='img/img6.png'
                            teach_name='Trần Nghĩa'
                            teach_avatar='img/avt.png'
                            status='da-ket-thuc' />

                    </div>
                </div>
            </section>
            <section className="section-2 section-blue">
                <div className="container">
                    <div className="textbox ">
                        <h3 className="sub-title">KHÓA HỌC</h3>
                        <h2 className="main-title">OFFLINE</h2>
                    </div>
                    <div className="list row">
                        <CourceItem
                            name='Scss, Grunt JS và Boostrap 4'
                            des='One of the best corporate fashion brands in Sydney'
                            img='img/img4.png'
                            teach_name='Trần Nghĩa'
                            teach_avatar='img/avt.png'
                            status='da-ket-thuc' />
                        <CourceItem
                            name='UX/UI Design'
                            des='One of the best corporate fashion brands in Sydney'
                            img='img/img5.png'
                            teach_name='Trần Nghĩa'
                            teach_avatar='img/avt.png'
                            status='sap-khai-giang' />
                        <CourceItem
                            name='Web Responsive'
                            des='One of the best corporate fashion brands in Sydney'
                            img='img/img6.png'
                            teach_name='Trần Nghĩa'
                            teach_avatar='img/avt.png'
                            status='da-ket-thuc' />
                    </div>
                    <div className="text-deco">C</div>
                </div>
            </section>
        </main>
    )

}