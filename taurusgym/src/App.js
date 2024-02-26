import React, {useState, useEffect} from 'react';
import './App.css';
import NavigationBar from './components/navigation-bar/index';
import CapaMusculo from './components/capa-musculo/index';
import Footer from './components/footer/index';
import TelaAbdomen from './components/tela-Abdomen/index';
import TelaBraco from './components/tela-Braco/index';
import TelaCostas from './components/tela-Costas/index';
import TelaOmbro from './components/tela-Ombro/index';
import TelaPeito from './components/tela-Peito/index';
import TelaPerna from './components/tela-Perna/index';

function App() {
  const [Key, setKey] = useState('');
  const [CapaMusculoVisibility, setCapaMusculoVisibility] = useState(false);
  const [OmbroVisibility, setOmbroVisibility] = useState(false);
  const [PeitoVisibility, setPeitoVisibility] = useState(false);
  const [BracoVisibility, setBracoVisibility] = useState(false);
  const [AbdomenVisibility, setAbdomenVisibility] = useState(false);
  const [CostasVisibility, setCostasVisibility] = useState(false);
  const [PernaVisibility, setPernaVisibility] = useState(false);

  const handleCallback = (key) => {
    setKey(key)
  };

  useEffect(() => {
    setCapaMusculoVisibility( Key == '');
    setOmbroVisibility( Key == 'OMBRO');
    setPeitoVisibility( Key == 'PEITO');
    setBracoVisibility( Key == 'BRACO');
    setAbdomenVisibility( Key == 'ABDOMEN');
    setCostasVisibility( Key == 'COSTAS');
    setPernaVisibility( Key == 'PERNA');
  }, [Key]);

  return (
    <div>
    <NavigationBar onPressCallback={handleCallback}/>

    <div className='main'>
     {CapaMusculoVisibility && <CapaMusculo onPressCallback={handleCallback}/>}

     {OmbroVisibility && 
        <TelaOmbro onPressCallback={handleCallback}/>
     }

     {PeitoVisibility &&
      <TelaPeito onPressCallback={handleCallback}/>
     }

     {BracoVisibility &&
      <TelaBraco onPressCallback={handleCallback}/>
     }

     {AbdomenVisibility &&
      <TelaAbdomen onPressCallback={handleCallback}/>
     }

     {CostasVisibility &&
      <TelaCostas onPressCallback={handleCallback}/>
     }

     {PernaVisibility &&
      <TelaPerna onPressCallback={handleCallback}/>
     }
    </div>

    <Footer/>
     
    </div>
  );
}

export default App;
