import {
  IonHeader,
  IonTitle,
  IonImg,
  IonToolbar,
  IonButtons,
  IonButton,
  IonBackButton,
  IonFooter,
  IonPage,
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonItemDivider,
  IonAlert,
  IonLabel,
  IonTextarea,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../App.css';


const Contact: React.FC = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [messageAlert, showMessageAlert] = useState<boolean>(false);
  let history = useHistory();

  const sendMEssage = () => {
    if (!name || !email || !message) {
      showMessageAlert(true);
    } else {
      console.log(name, email, message);
      history.push("/home");
    }
  };

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons>
            <IonBackButton />
          </IonButtons>
          <IonTitle class="ion-text-center"> Contact Us </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonAlert
          isOpen={messageAlert}
          onDidDismiss={() => showMessageAlert(false)}
          header={"Can not do that"}
          subHeader={"A little problem"}
          message={"Name, Email and Message are all required."}
          buttons={["OK"]}
        />

        <IonList>
          <IonItem>
            <IonInput
              value={name}
              placeholder="Name"
              onIonChange={(e) => setName(e.detail.value!)}
            />
          </IonItem>
          <IonItemDivider />
          <IonItem>
            <IonInput
              value={email}
              placeholder="Email"
              onIonChange={(e) => setEmail(e.detail.value!)}
            />
          </IonItem>
          <IonItemDivider />
          <IonItem>
            <IonTextarea
              rows={15}
              value={message}
              placeholder="Enter message here"
              onIonChange={(e) => setMessage(e.detail.value!)}
            />
          </IonItem>
          <IonItemDivider />
          <IonItem button onClick = {e => {sendMEssage()}}>
              <IonLabel class="ion-text-center">Send Message</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter>
                <IonToolbar>
                    <IonTitle class="ion-text-center">Created by Sean Anderson</IonTitle>
                    <IonTitle class="ion-text-center" size="small">2021 Cincinnati Ohio</IonTitle >
                </IonToolbar>
            </IonFooter>
    </IonPage>
  );
};

export default Contact;
