import React from 'react'

function Price(props) {
  return (
   <>
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.planname}</h5>
            <h6 className="card-price text-center">{props.data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.data.isuser?"":"text-muted"}><span className="fa-li"><i className={props.data.isuser?"fas fa-check":"fas fa-times"}></i></span>{props.data.user}</li>
              <li className={props.data.isstorage?"":"text-muted"}><span className="fa-li"><i className={props.data.isstorage?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage}</li>
              <li className={props.data.ispublicprojects?"":"text-muted"}><span className="fa-li"><i className={props.data.ispublicprojects?"fas fa-check":"fas fa-times"}></i></span>{props.data.publicprojects}</li>
              <li className={props.data.isaccess?"":"text-muted"}><span className="fa-li"><i className={props.data.isaccess?"fas fa-check":"fas fa-times"}></i></span>{props.data.access}</li>
              <li className={props.data.isprivateprojects?"":"text-muted"}><span className="fa-li"><i className={props.data.isprivateprojects?"fas fa-check":"fas fa-times"}></i></span>{props.data.privateprojects}</li>
              <li className={props.data.isphonesupport?"":"text-muted"}><span className="fa-li"><i className={props.data.isphonesupport?"fas fa-check":"fas fa-times"}></i></span>{props.data.phonesupport}</li>
              <li className={props.data.issubdomain?"":"text-muted"}><span className="fa-li"><i className={props.data.issubdomain?"fas fa-check":"fas fa-times"}></i></span>{props.data.subdomain}</li>
              <li className={props.data.isstatusreport?"":"text-muted"}><span className="fa-li"><i className={props.data.isstatusreport?"fas fa-check":"fas fa-times"}></i></span>{props.data.statusreport}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
    </div>
   </>
  )
}

export default Price