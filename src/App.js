import React from 'react'
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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/coin' component={Coin} />
          <Route path='/khoa-hoc' component={Course} />
          <Route path='/chi-tiet-khoa-hoc' component={CourseDetail} />
          <Route path='/dang-ky-thanh-cong' component={Email} />
          <Route path='/cau-hoi-thuong-gap' component={Faq} />
          <Route path='/lien-he' component={Partner} />
          <Route path='/ca-nhan' component={Profile} />
          <Route path='/du-an' component={Project} />
          <Route path='/dang-ky' component={Register} />
          <Route path='/doi-ngu' component={MyTeam} />
          <Route path='/thanh-toan' component={Payment} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
