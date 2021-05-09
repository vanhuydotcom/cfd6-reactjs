export function ProjectItem({ img_cover, info_name, info_makeby }) {
    return (
        <a href="#" className="item col-md-6">
            <div className="wrap">
                <div className="cover">
                    <img src={img_cover} alt="" />
                </div>
                <div className="info">
                    <div className="name">{info_name}</div>
                    <div className="makeby">{info_makeby}</div>
                </div>
            </div>
        </a>
    )
}