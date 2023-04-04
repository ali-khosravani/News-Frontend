import React, { Component } from 'react';
import TopNews from '../News/TopNews';


import './Main.css'
class Main extends Component {
    state = {  } 
    render() { 
        return (
            <div className="Main" dir='rtl'>
                <div className='container pt-5 main-container'>
                    <div className='row'>
                        <div className='col-12 col-lg-9 float-right'>
                            <div className='row'>
                            <div className='col-12 col-md-8 float-right m-0 p-0'>
                            <section>
                                <div className='text-over-image'>
                                    <TopNews/>
                                </div>
                            </section>
                            <section>
                                <div className='news-list'>
                                 <ul>
                                    <li>news1</li>
                                    <li>news2</li>
                                    <li>news3</li>
                                    <li>news4</li>
                                    <li>news5</li>
                                 </ul>
                                </div>
                            </section>
                            </div>
                            <div className='col-12 col-md-4 flex-column p-0 m-0'>
                                <section>
                                    <div className='selection'></div>
                                </section>
                                <section>
                                    <div className='full-read'>

                                    </div>
                                </section>
                            </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 float-right mt-3 mt-md-0 main-left-col p-0 m-0 test'></div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Main;
