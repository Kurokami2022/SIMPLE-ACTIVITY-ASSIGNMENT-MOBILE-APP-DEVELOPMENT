import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonPage, 
  IonTitle,  
  IonLabel, 
  IonButton,
  IonCard 
} from '@ionic/react';
import './Tab2.css';
import { useRef } from 'react';

const Tab2: React.FC = () => {
    
    const getname = useRef<any>("");
    const getage = useRef<any>("");
    const getemail = useRef<any>("");
    const getpassword = useRef<any>("");
    const getabt = useRef<any>("");
    const getgender = useRef<any>("");
    const getyear = useRef<any>("");
    const getdate = useRef<any>("");
    const getcheck = useRef<any>("");
    const getrate = useRef<any>("");

    const Display = () => {
      const name = localStorage.getItem('getname');
      const age = localStorage.getItem('getage');
      const email = localStorage.getItem('getemail');
      const password = localStorage.getItem('getpassword');
      const abt = localStorage.getItem('getabt');
      const gender = localStorage.getItem('getgender');
      const year = localStorage.getItem('getyear');
      const date = localStorage.getItem('getdate');
      const check = localStorage.getItem('getcheck');
      const rate = localStorage.getItem('getrate');

      getname.current.innerHTML =  "NAME: " + name;
      getage.current.innerHTML =  "AGE: " + age;
      getemail.current.innerHTML =  "EMAIL: " + email;
      getpassword.current.innerHTML =  "PASSWORD: " + password;
      getabt.current.innerHTML =  "ABOUT: " + abt;
      getgender.current.innerHTML = "GENDER: " + gender;
      getyear.current.innerHTML = "YEAR: " + year;
      getdate.current.innerHTML = "BIRTHDAY: " + date;
      getcheck.current.innerHTML = "AGREE TO TAC: " + check;
      getrate.current.innerHTML = "RATE TO IONIC: " + rate + "/10";
    };
    
    
  return (
    <IonPage>
      <IonContent fullscreen>

      <IonHeader class="header">
          <IonTitle class="title">Display</IonTitle>
          <IonButton onClick={Display}>Display Information</IonButton>
      </IonHeader>

        <IonCard class="box">

        <IonItem>
          <IonLabel ref={getname}></IonLabel>
        </IonItem> 

        <IonItem>
          <IonLabel ref={getage}></IonLabel>
        </IonItem> 

        <IonItem>
          <IonLabel ref={getemail}></IonLabel>
        </IonItem>

        <IonItem>
          <IonLabel ref={getpassword}></IonLabel>
        </IonItem> 

        <IonItem>
          <IonLabel ref={getabt}></IonLabel>
        </IonItem>  
        
        <IonItem>
          <IonLabel ref={getgender}></IonLabel>
        </IonItem>  

        <IonItem>
          <IonLabel ref={getyear}></IonLabel>
        </IonItem>  

        <IonItem>
          <IonLabel ref={getdate}></IonLabel>
        </IonItem>  

        <IonItem>
          <IonLabel ref={getcheck}></IonLabel>
        </IonItem> 

        <IonItem>
          <IonLabel ref={getrate}></IonLabel>
        </IonItem> 

      </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
