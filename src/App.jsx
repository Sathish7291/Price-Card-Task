import React from 'react'
import Price from './Price'
function App() {
    let data = [{
      planname:"FREE",
      price:"$0",
      user:"Single User",
      isuser:true,
      storage:"50GB Storage",
      isstorage:true,
      publicprojects:"Umlimited Public Projects",
      ispublicprojects:true,
      access:"Community Access",
      isaccess:true,
      privateprojects:"Unlimited Private Projects",
      isprivateprojects:false,
      phonesupport:"Dedicated Phone Support",
      isphonesupport:false,
      subdomain:"Free Subdomain",
      issubdomain:false,
      statusreport:"Monthly Status Reports",
      isstatusreport:false
    },
    {
      planname:"PLUS",
      price:"$9",
      user:"5 Users",
      isuser:true,
      storage:"50GB Storage",
      isstorage:true,
      publicprojects:"Umlimited Public Projects",
      ispublicprojects:true,
      access:"Community Access",
      isaccess:true,
      privateprojects:"Unlimited Private Projects",
      isprivateprojects:true,
      phonesupport:"Dedicated Phone Support",
      isphonesupport:true,
      subdomain:"Free Subdomain",
      issubdomain:true,
      statusreport:"Monthly Status Reports",
      isstatusreport:false
    },
    {
      planname:"PRO",
      price:"$49",
      user:"Unlimited Users",
      isuser:true,
      storage:"50GB Storage",
      isstorage:true,
      publicprojects:"Umlimited Public Projects",
      ispublicprojects:true,
      access:"Community Access",
      isaccess:true,
      privateprojects:"Unlimited Private Projects",
      isprivateprojects:true,
      phonesupport:"Dedicated Phone Support",
      isphonesupport:true,
      subdomain:"Free Subdomain",
      issubdomain:true,
      statusreport:"Monthly Status Reports",
      isstatusreport:true
    }
  ]
  return (
    <>
    <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i)=>{
          return <Price data={e} keys={i}/>
        })
      }
    </div>
  </div>
</section>
    </>
  )
}

export default App