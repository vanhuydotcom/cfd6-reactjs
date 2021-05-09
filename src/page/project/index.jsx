import { ProjectItem } from "./component/ProjextItem";


export function Project() {
    return (
        <main className="projectpage" id="main">
            <section className="section-1">
                <div className="container">
                    <h2 className="main-title">dự án</h2>
                    <p className="top-des">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non
                        luctus
            </p>
                    <div className="list row">
                        <ProjectItem
                            img_cover='img/project/project (1).jpg'
                            info_name='furnitown'
                            info_makeby='Hoàn thành với Trần Nghĩa'
                        />
                        <ProjectItem
                            img_cover='img/project/project (2).jpg'
                            info_name='furnitown'
                            info_makeby='Hoàn thành với Trần Nghĩa'
                        />
                        <ProjectItem
                            img_cover='img/project/project (3).jpg'
                            info_name='furnitown'
                            info_makeby='Hoàn thành với Trần Nghĩa'
                        />
                        <ProjectItem
                            img_cover='img/project/project (4).jpg'
                            info_name='furnitown'
                            info_makeby='Hoàn thành với Trần Nghĩa'
                        />
                    </div>
                    <div className="bottom">
                        <div className="btn overlay round btn-more">
                            tải thêm
              </div>
                    </div>
                </div>
            </section>
        </main>
    )
}