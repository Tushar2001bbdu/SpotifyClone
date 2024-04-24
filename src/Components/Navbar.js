import React ,{useContext,useState}from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaSearch } from 'react-icons/fa'
import NodeState from '../Context/nodeContext'
import SearchResults from './SearchResults'


export default function Navbar(props) {
const con=useContext(NodeState)
const[query,setQuery]=useState(null)

function search(e){
  setQuery(e.target.value)
  
}


  return (
    <div className='container d-flex justify-content-between' >
     
      <div className="avatar text-center"  style={{backgroundColor:"black",color:"white",width:"auto",border:"0.2rem solid black",borderRadius:"0.15rem",margin:"5%",alignSelf:"center",justifySelf:"center",fontWeight:"bold"}}>
      <CgProfile/><a style={{"color":"white","textDecoration":"none"}} href="/" onClick={con.logout}>{props.name}</a>
      </div>
      <div className="searchbar my-3 mx-3" style={{height:"7vh",minWidth:"auto",maxWidth:"60%",postion:"sticky"}}>
        <form onSubmit={(e)=>{e.preventDefault();con.getSearchResults(query)}}>
        <div className="input_field" style={{display:"flex",flexDirection:"row",gap:"0vw",border:"0.5vw solid white",borderRadius:"0.2vw"}}>
        <span style={{backgroundColor:"white",height:"7vh",width:"3vw",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}><FaSearch/></span>
        <span>
      
        <input type="text" placeholder='Artists Songs Or Podcasts' onChange={(e)=>{search(e)}} style={{height:"7vh",width:"37vw",border:"1px solid white"}}/></span>

        
        </div>
        </form>
       
        {con.check==true &&con.search!=null  && <div className="results my-1" style={{overflowY: 'scroll',scrollbarColor:"#2F4F4F #2F4F4F",height:"160%"}}>
        {con.check==true &&con.search!=null  && (con.search.tracks.items.map((element)=>{
      return(<SearchResults  key={element.id} element={element} name={element.name} image={element.album.images[2].url} style={{width:"100%",height:"100%"}}/>)
     })) }
        </div>}
        
      </div>
     
    </div>
    
  )
}
