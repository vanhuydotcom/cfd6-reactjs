import React, { useState } from 'react'
import AccInfoTab from "./component/accInfoTab"
import Info from "./component/info"
import MyCoin from "./component/myCoin"
import MyCourse from "./component/myCourse"
import MyPayment from "./component/myPayment"
import MyProject from "./component/myProject"
import TitleTab from "./component/titleTab"
import { NavLink, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom'
import useDeLayLink from '../../hook/useDelayLink'
export function Profile() {
    let { path } = useRouteMatch()
    let delayLink = useDeLayLink()
    return (
        <main className="profile" id="main">
            <section>
                <Info />
                <div className="container">
                    <div className="tab">
                        <TitleTab />
                        <div className="tab-content">
                            {/* <AccInfoTab />
                            <MyCourse />
                            <MyProject />
                            <MyPayment />
                            <MyCoin /> */}


                            <Switch>
                                <Route exact path={`${path}/`} component={AccInfoTab} />
                                <Route path={`${path}/khoa-hoc-cua-ban`} component={MyCourse} />
                                <Route path={`${path}/du-an-da-lam`} component={MyProject} />
                                <Route path={`${path}/thanh-toan`} component={MyPayment} />
                                <Route path={`${path}/diem-thuong`} component={MyCoin} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}