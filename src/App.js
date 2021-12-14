import logo from './logo.svg';
import './App.css';
import Card from './card';


function App() {
  return (
    <section class="pricing py-5">
    <div class="container">
      <div class="row">
      <Card user= "Single" storage = "5GB" public = "Unlimited"  Community = "" period= "0"  free= "FREE" private="" mute1="text-muted" mute2="text-muted" mute3="text-muted" mute4="text-muted"

support="" subdomain="" status=""></Card>
      <Card user= "5" storage = "50GB" public = "Unlimited"  Community = "" period= "9"  free= "PLUS" private="" mute1="text-unmuted" mute2="text-unmuted" mute3="text-unmuted" mute4="text-muted"

support="" subdomain="" status=""></Card>
        
      <Card user= "Unlimited" storage = "150GB" public = "Unlimited"  Community = "" period= "49"  free= "PRO"  private="" mute1="text-unmuted" mute2="text-unmuted" mute3="text-unmuted" mute4="text-unmuted"

support="" subdomain="" status=""></Card>
        </div>
      </div>
    
       </section>
  ); 
}


export default App;