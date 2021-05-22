import { endpoint } from './config'

const CourseApi = {
    list() {
        return fetch(`${endpoint}/elearning/v4/courses`, {
            method: 'GET',

        }).then(res => res.json())
    },
    ListDetail(slug) {
        return fetch(`${endpoint}/elearning/v4/course/${slug}`, {
            method: 'GET',

        }).then(res => res.json())
    },
    ListRelated(slug) {
        return fetch(`${endpoint}/elearning/v4/course-related/${slug}`, {
            method: 'GET',

        }).then(res => res.json())
    },
    CourseRegister(login, slug) {
        let { token } = JSON.parse(localStorage.getItem("login"))
        return fetch(`${endpoint}/elearning/v4/course-register/${slug}`, {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token.accessToken}`
            }

        }).then(res => res.json())
    }
}
export default CourseApi