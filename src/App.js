
import './App.css';
import Api from './Api';
import Nav from './components/navigation';
import Options from './components/options';
import News from './components/news';
import TheLastest from './components/lastest';
import Watchlist from './components/watchlist';





function App() {
  const news = Api.map(item => {
    return (
      
    <News
      key = {item.id}
      link = {item.source}
      timestamp= {item.arrival}
      heading = {item.heading}
      source = {item.source}
      />
      
      
      
  )


    })

  return (
    <div className="App">
      <Nav/>

      <body className='news-body'>
      <Options/>

      <div className = "newsAreas" >
         
      < TheLastest />

      <section className='news-list'> 
        {news} 
      </section>
      
        </div>
        <div className='watchlist'>
        
          <Watchlist/>
        
      </div>
        </body>

      
    </div>
    
  );
}

export default App;
