import React, { useCallback, useEffect, useState } from 'react'
import { Header, Footer, Nav } from './component'
import { Home } from './page/home'
import { Error } from './page/404'
import { CourseDetail } from './page/course-detail'
import { Email } from './page/email'
import { Faq } from './page/faq'
import { Coin } from './page/coin'
import { Partner } from './page/partner'
import { Course } from './page/course'
import { Project } from './page/project'
import { MyTeam } from './page/team'
import { Profile } from './page/profile'
import { Register } from './page/register'
import './assets/scss/custom.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Team } from './page/team/component/team'
import { Payment } from './page/payment'
import PopupLogin from './component/PopupLogin'
import PrivateRoute from './component/PrivateRoute'
import Auth from './service/auth'
import { Provider } from 'react-redux'
import store from './redux'
import PopupRegister from './component/PopupRegister'
export let Context = React.createContext({})
function App() {
  // let login = {
  //   name: 'Văn Huy',
  //   avatar: '/img/avt.png'
  // }

  let [state, setState] = useState({
    // login: false
    login: JSON.parse(localStorage.getItem('login'))
  })
  useEffect(() => {
    localStorage.setItem('login', JSON.stringify(state.login))
  }, [state.login])
  async function handleLogin(username, password) {
    try {
      let res = await Auth.login({ username, password })

      if (res.data) {
        setState({
          ...state,
          login: res.data
        })
        return {
          success: true
        }
      } else if (res.error) {
        return {
          error: res.error
        }
      }

    } catch (err) {

    }
    //   if (username === 'dvhuy.design@gmail.com' && password === '123456') {
    //     setState({
    //       ...state,
    //       login: {
    //         name: 'Văn Huy',
    //         avatar: '/img/avt.png'
    //       }
    //     })
    //     // localStorage.setItem('login', JSON.stringify({
    //     //   name: 'Văn Huy',
    //     //   avatar: '/img/avt.png'
    //     // }))
    //   } else {
    //     return 'Wrong login information'
    //   }
    // }
  }
  // function handleLogout() {
  //   setState({
  //     ...state,
  //     login: false
  //   })
  //   // localStorage.setItem('login', false)
  // }

  return (
    <Provider store={store}>
      <Context.Provider value={{ ...state, handleLogin }}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Nav />
            <PopupLogin />
            <PopupRegister />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/coin' component={Coin} />
              <Route path='/khoa-hoc' component={Course} />
              <Route path='/chi-tiet-khoa-hoc/:slug' component={CourseDetail} />
              <Route path='/dang-ky-thanh-cong' component={Email} />
              <Route path='/cau-hoi-thuong-gap' component={Faq} />
              <Route path='/lien-he' component={Partner} />
              <PrivateRoute path='/ca-nhan' component={Profile} />
              <Route path='/du-an' component={Project} />
              <Route path='/dang-ky/:slug' component={Register} />
              <Route path='/doi-ngu' component={MyTeam} />
              <Route path='/thanh-toan' component={Payment} />
              <Route component={Error} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </Context.Provider>
    </Provider>
  );
}

export default App;
