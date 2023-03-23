import { IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ABOUT</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">ABOUT</IonTitle>
          </IonToolbar>
        </IonHeader>

          <img src='https://media0.giphy.com/media/13d2jHlSlxklVe/giphy.gif?cid=ecf05e47600vcftf00cu3fganarx2fo0v3coytxup4hajb9s&rid=giphy.gif&ct=g' alt='still nothing' className='gip'></img>
          <img src='https://media1.giphy.com/media/oovjytSc7UK8EzOErX/giphy.gif?cid=ecf05e475dsvhxe2zh50v95m9qmgp2re496191bzsp7shhz4&rid=giphy.gif&ct=g' className='gip2' alt='still nothing'></img>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
