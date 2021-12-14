import './style.css'

export default function Card(props){
    return <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">{props.free}</h5>
                  <h6 class="card-price text-center">${props.period}<span class="period">/month</span></h6>
                  <hr/>
    
                  <ul class="fa-ul">
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.user} User</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span> {props.storage} Storage</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.public} Public Projects</li>
                    <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.community} Community Access</li>
                    <li class={props.mute1}><span class="fa-li"><i class="fas fa-times"></i></span>{props.private}Unlimited
                      Private Projects</li>
                    <li class={props.mute2} ><span class="fa-li"><i class="fas fa-times"></i></span>{props.support}Dedicated
                      Phone Support</li>
                    <li class={props.mute3} ><span class="fa-li"><i class="fas fa-times"></i></span>{props.subdomain}Free Subdomain
                    </li>
                    <li class={props.mute4} ><span class="fa-li"><i class="fas fa-times"></i></span>{props.status}Monthly Status
                      Reports</li>
                  </ul>
                  <div class="d-grid">
                    <a href="#" class="btn btn-primary text-uppercase">Button</a>
                  </div>
                </div>
              </div>  
            </div>
            
            
           
    }