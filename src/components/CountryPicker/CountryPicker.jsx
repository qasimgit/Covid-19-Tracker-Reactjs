import React , {useEffect , useState} from 'react';
import {FormControl , NativeSelect} from '@material-ui/core'
import {fetchCountries} from '../../api'


const CountryPicker = () =>{

    const [fetchedCountries , setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchCountryApi = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchCountryApi();

    } , [setFetchedCountries])

    return(
        <div className='countPick_cont'>
            <div className='heading'>
                <div>

            <img src="https://img.icons8.com/ios/50/000000/virus.png" alt='img'/>
                </div>
            <div>

            <h1>
            COVID 19
            <br/><span>By Muhammad Qasim Qadri</span>
            </h1>
            </div>
            </div>
        
            <div>

             <FormControl className='searchBar'>
                 <NativeSelect>
                     <option value="global" >Global</option>

                 </NativeSelect>
             </FormControl>
            </div>
            

        </div>
    )

};

export default CountryPicker;