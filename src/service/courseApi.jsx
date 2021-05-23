import { endpoint } from './config'

const CourseApi = {
    async refreshToken() {
        let refreshToken = JSON.parse(localStorage.getItem("login"))?.token?.refreshToken
        console.log(refreshToken);
        let res = await fetch(`${endpoint}/elearning/v4/refresh-token`, {
            method: 'POST',
            body: JSON.stringify({
                refreshToken: refreshToken
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        if (res?.data?.accessToken) {
            localStorage.setItem('token', JSON.stringify(res.data))
        }
        return true;
    },

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
    async CourseRegister(login, slug) {
        let token = JSON.parse(localStorage.getItem("token"))?.accessToken

        let res = await fetch(`${endpoint}/elearning/v4/course-register/${slug}`, {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }

        })
        if (res.status === 200) {
            return res.json()
        }
        if (res.status === 403) {
            await CourseApi.refreshToken()
            let token = JSON.parse(localStorage.getItem('token'))?.accessToken
            console.log(token);

            return fetch(`${endpoint}/elearning/v4/course-register/${slug}`, {
                method: 'POST',
                body: JSON.stringify(login),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }).then(res => res.json())

        }
    }

}
export default CourseApi