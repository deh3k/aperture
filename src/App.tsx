import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Works from './components/Works/Works';
import Box from './components/Box/Box';
import Tools from './components/Tools/Tools';
import Companies from './components/Companies/Companies';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Summary from './components/Summary/Summary';
import './App.scss';


function App() {
  return (
    <div>
      <Header />
      <Main />
      <Works />
      <Box
        img='https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
        note={
          <div className='note'>
            <h6>Sunset at Mount Fuji</h6>
            <p>Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
          </div>
        }
        summary={<Summary speed='1"' aperture='f/16' iso='400' geo='Japan' />}
      />
      <Tools />
      <Box
        img='https://phonoteka.org/uploads/posts/2022-09/1663924509_13-phonoteka-org-p-oboi-na-rabochii-stol-monstera-pinterest-14.jpg'
        note={
          <div className='note'>
            <h6>Monstera Leafs</h6>
            <p>Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
          </div>
        }
        summary={<Summary speed='1/400s' aperture='f/3,5' iso='100' geo='Costa Rica' />}
      />
      <Companies />
      <Box
        img='https://wallscloud.net/img/resize/1600/900/MM/2020-01-12-sky.jpg'
        note={
          <div className='note'>
            <h6>Star fall in the Himalayas</h6>
            <p>Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p>
          </div>
        }
        summary={<Summary speed='6"' aperture='f/11' iso='800' geo='Nepal' />}
      />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
