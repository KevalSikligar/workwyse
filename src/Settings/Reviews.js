import React, { Component } from 'react'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import SideNav from '../SideNav/SideNav';
import GaugeChart from 'react-gauge-chart'


const pathList = [
    { to: "/reviews", title: "Reviews" }
]
class Reviews extends Component {


    render() {
        return (
            <div>
                <BreadCrumbs title="Reviews" breadcrumbssegment={pathList} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-12 col-md-12">
                            <SideNav />
                        </div>
                        <div className="col-xl-9 col-lg-12 col-md-12 sptb">
                            <GaugeChart id="gauge-chart5"
                                nrOfLevels={420}
                                arcsLength={[0.3, 0.5, 0.2]}
                                colors={['#5BE12C', '#F5CD19', '#EA4228']}
                                percent={0.37}
                                arcPadding={0.02}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Reviews;