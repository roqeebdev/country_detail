import { useState } from "react";
import CountryFlag from "./CountryFlag";
import NavBar from "./NavBar";
import Search from "./Search";



const Pagelayout = () => {
//   const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [filterParam, setFilterParam] = useState(['']);
    const [dark,setDark]=useState(false);

    return ( 
        <div className={dark?"dark":''}>
            <NavBar props={{dark,setDark}}/>
            <Search searchText = {setSearch} setFilter = {setFilterParam}/>
            
            <CountryFlag set = {search} filter= {filterParam} />

        </div>
             );
}
 
export default Pagelayout;