import { 
IonContent,
IonHeader,
IonPage, 
IonTitle,  
IonCard, IonList, 
IonItem,
IonInput,
IonLabel,
IonTextarea,
IonRadioGroup,
IonRadio,
IonSelect,
IonSelectOption,
IonCheckbox,
IonRange,
IonDatetimeButton,
IonModal,
IonDatetime,
IonButton,
useIonAlert 
} from '@ionic/react';
import { useRef } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {

  const name = useRef<any>("")
  const age = useRef<any>("")
  const email = useRef<any>("")
  const password = useRef<any>("")
  const abt = useRef<any>("")
  const gender = useRef<any>("");
  const year = useRef<any>("");
  const date = useRef<any>("");
  const check = useRef<any>("");
  const rate = useRef<any>("");
  const [presentAlert] = useIonAlert();

  const sub = () => {
    const getname = name.current.value;
    const getage = age.current.value;
    const getemail = email.current.value;
    const getpassword = password.current.value;
    const getabt = abt.current.value;
    const getgender = gender.current?.value??'';
    const getyear = year.current?.value??'';
    const getdate = date.current?.value??'';
    const dateObj = new Date(getdate);
    const dateString = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const getcheck = check.current.checked ? "yes" : "no";
    const getrate = rate.current.value;

    localStorage.setItem( "getname", getname);
    localStorage.setItem( "getage", getage);
    localStorage.setItem( "getemail", getemail);
    localStorage.setItem( "getpassword", getpassword);
    localStorage.setItem( "getabt", getabt);
    localStorage.setItem("getgender", getgender);
    localStorage.setItem("getyear", getyear);
    localStorage.setItem("getdate", dateString);
    localStorage.setItem("getcheck", getcheck);
    localStorage.setItem("getrate", getrate);

    presentAlert({
      header: 'Notice',
      subHeader: 'Information Submitted',
      message: 'Go to Display tab to view your information.',
      buttons: ['OK'],
    })
  }

  return (
    <IonPage>
      <IonContent fullscreen class="body">

      <IonHeader>
          <IonTitle class="header">Home</IonTitle>
      </IonHeader>

        <IonCard class="box">
          <IonList>

            <IonItem> 
                <IonLabel>Name: </IonLabel>
                <IonInput class = "input_name" ref={name}></IonInput>
            </IonItem>

            <IonItem> 
                <IonLabel>Age: </IonLabel>
                <IonInput type='number' class = "input_age" ref={age}></IonInput>
            </IonItem>

            <IonItem> 
                <IonLabel>Email: </IonLabel>
                <IonInput type='email' class = "input_email" ref={email}></IonInput>
            </IonItem>

            <IonItem> 
                <IonLabel>Password: </IonLabel>
                <IonInput type='password' class = "input_password" ref={password}></IonInput>
            </IonItem>

            <IonItem> 
                <IonLabel>About me: </IonLabel>
                <IonTextarea class = "input_abt" ref={abt}></IonTextarea>
            </IonItem>

            <IonItem class= "gender">
              <IonRadioGroup ref={gender} allowEmptySelection={true} >
              <IonLabel>Gender: </IonLabel>

              <IonItem>
                <IonRadio value="Male"></IonRadio>
                <IonLabel class="lblmale">Male</IonLabel>
              </IonItem>
              
              <IonItem>
                <IonRadio value="Female"></IonRadio>
                <IonLabel class="lblfemale">Female</IonLabel>
              </IonItem>

              </IonRadioGroup>
            </IonItem>

              <IonItem class="year">Year: 
                <IonItem>
                <IonSelect ref={year} interface="popover" placeholder="Select Year">
                  <IonSelectOption value="1st Year">1st Year</IonSelectOption>
                  <IonSelectOption value="2nd Year">2nd Year</IonSelectOption>
                  <IonSelectOption value="3rd Year">3rd Year</IonSelectOption>
                  <IonSelectOption value="4th Year">4th Year</IonSelectOption>
                </IonSelect>
                </IonItem>
                </IonItem>
                

                <IonItem class="bday">
                <IonLabel>Birthday: </IonLabel>
                <IonItem>
                <IonDatetimeButton datetime="datetime"></IonDatetimeButton>
                <IonModal keepContentsMounted={true}>
                <IonDatetime id="datetime" presentation="date" ref={date}></IonDatetime>
                </IonModal>
                </IonItem>
                </IonItem>

              <IonItem class="agree">
                  <IonLabel>Agree to terms and conditions</IonLabel>
                  <IonItem >
                  <IonCheckbox ref={check} slot="start" class="agreebox"></IonCheckbox>
                </IonItem>
              </IonItem>
              
              <div className="rate">
              <IonItem >
                <IonLabel>How much you would rate ionic: </IonLabel>
                </IonItem>
                <IonItem>
                <IonRange ref={rate} min={0} max={10} value={5} pin={true} ticks={true} snaps={true}></IonRange>
              </IonItem>
              </div>

              <div className='btnsub'>
                <IonButton color="success" onClick={sub}>Submit</IonButton>
              </div>

          </IonList>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
