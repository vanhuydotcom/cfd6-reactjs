import { Team } from "./component/team";
import Reat, { useState, useRef } from 'react'
export function MyTeam() {
    return (
        <main className="team" id="main">
            <section>
                <div className="container">
                    <div className="top">
                        <h2 className="main-title">cfd team</h2>
                        <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt
                        elementum
                        sem non luctus
              </p>
                    </div>
                    <div className="list row">
                        <div className="item col-md-6 col-sm-6">
                            <Team
                                img_cover='img/thumb-member.jpg'
                                info_name='trần nghĩa'
                                info_title='Founder & Creative Front-End Developer'
                            />
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <Team
                                img_cover='img/thumb-member.jpg'
                                info_name='trần nghĩa'
                                info_title='Founder & Creative Front-End Developer'
                            />

                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <Team
                                img_cover='img/thumb-member.jpg'
                                info_name='trần nghĩa'
                                info_title='Founder & Creative Front-End Developer'
                            />
                        </div>
                        <div className="item col-md-6 col-sm-6">
                            <Team
                                img_cover='img/thumb-member.jpg'
                                info_name='trần nghĩa'
                                info_title='Founder & Creative Front-End Developer'
                            />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <Team
                                img_cover='img/thumb-member.jpg'
                                info_name='trần nghĩa'
                                info_title='Founder & Creative Front-End Developer'
                            />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <Team
                                img_cover='img/thumb-member.jpg'
                                info_name='trần nghĩa'
                                info_title='Founder & Creative Front-End Developer'
                            />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <Team
                                img_cover='img/thumb-member.jpg'
                                info_name='trần nghĩa'
                                info_title='Founder & Creative Front-End Developer'
                            />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <Team
                                img_cover='img/thumb-member.jpg'
                                info_name='trần nghĩa'
                                info_title='Founder & Creative Front-End Developer'
                            />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <Team
                                img_cover='img/thumb-member.jpg'
                                info_name='trần nghĩa'
                                info_title='Founder & Creative Front-End Developer'
                            />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <Team
                                img_cover='img/thumb-member.jpg'
                                info_name='trần nghĩa'
                                info_title='Founder & Creative Front-End Developer'
                            />
                        </div>
                        <div className="item col-md-3 col-sm-4 col-xs-6">
                            <Team
                                img_cover='img/thumb-member.jpg'
                                info_name='trần nghĩa'
                                info_title='Founder & Creative Front-End Developer'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}