import { Link } from "react-router-dom";
import useDeLayLink from '../../../hook/useDelayLink'
export function Action() {
    let delayLink = useDeLayLink()
    return (

        <section className="section-action">
            <div className="container">
                <h3>Bạn đã sẵn sàng trở thành chiến binh tiếp theo của Team CFD chưa?</h3>
                <div className="btn main round bg-white"><Link to="/dang-ky" onClick={delayLink}>Đăng ký</Link></div>
            </div>
        </section>
    )
}