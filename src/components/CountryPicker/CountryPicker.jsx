import React from 'react';


const CountryPicker = () =>{

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
            <div className='searchBar'>
                <input type="text" placeholder='Search by country'/><i className="fa fa-search"></i>
                <li>
                    Pakistan
                </li>
                <li>
                    Pakistan
                </li>
                <li>
                    Pakistan
                </li>
                <li>
                    Pakistan
                </li>
                <li>
                    Pakistan
                </li>
                <li>
                    Pakistan
                </li>
                <li>
                    Pakistan
                </li>


            </div>
            

        </div>
    )

};

export default CountryPicker;