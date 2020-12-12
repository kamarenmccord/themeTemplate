import logo from './logo.svg';
import './App.css';
import './Dark.css';
import { useState, useEffect } from 'react';
import SubComponet from './SubComponet';
import PrevComponet from './PrevComponet';

function App() {

  const themeSet = ["extraLight-theme", "light-theme", "dark-theme"];
  const themeTitles = ["Extra Light Mode", "Shadded Mode", "Dark Mode"];
  
  const getDefaultTheme = () =>{
    const selectedTheme = JSON.parse(localStorage.getItem('kamsTheme'))
    return selectedTheme || 0;
  }

  const [themeCount, setThemeCount] = useState(getDefaultTheme());


  useEffect(() => {
    localStorage.setItem('kamsTheme', JSON.stringify(themeCount));
  }, [themeCount])

  const nextTheme = () =>{
    let count = themeCount + 1;
    if (count > themeSet.length-1){ count = 0 };
    return count
  }

  const prevTheme = () =>{
    let count = themeCount - 1;
    if (count < 0){ count = 2 };
    return count
  }

  return (
    <div className={themeCount? themeSet[themeCount]+ ' app' : 'extraLight-theme app'}>

            <button 
                className={themeSet[nextTheme()] + ' nextThemeButton'}
                onClick={()=> setThemeCount(nextTheme())}
            >
                Next Theme
            </button>

      <button 
        className={themeSet[prevTheme()] + ' prevThemeButton'} 
        onClick={()=> setThemeCount(prevTheme())}
      >
          Last theme
      </button>

      <div className='content'>
        <h1>{themeCount? themeTitles[themeCount] : 'Ultra Light Mode'}</h1>
        <p>A simple Theme management example app</p>
      </div>
      <div className='subDiv'>

        <SubComponet 
            style={ themeSet }
            styleIndex={ themeCount }
            titleSet= { themeTitles }
        />

        <PrevComponet 
            style={ themeSet }
            styleIndex={ themeCount }
            titleSet= { themeTitles }
        />

      </div>
    </div>
  );
}

export default App;
