export function Team({ img_cover, info_name, info_title }) {
    return (
        <div className="wrap">
            <div className="cover">
                <img src={img_cover} alt="" />
            </div>
            <div className="info">
                <div className="name">
                    {info_name}
                </div>
                <p className="title">{info_title}</p>
            </div>
        </div>
    )
}