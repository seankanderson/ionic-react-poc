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
    IonAvatar,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonIcon,
  } from "@ionic/react";
  
  import '../App.css';
  import React, {useState} from 'react';
  import MyHeader from '../components/MyHeader';
import { withRouter } from "react-router";
import FaqListing from './FaqDB';
import { arrowBackOutline, informationCircleOutline } from "ionicons/icons";

const Faq: React.FC = () => {
    
    const [faqs] = useState<Array<any>>(FaqListing);
    const faqList = faqs.map((issue) => 
        <IonItem key={issue.id} button routerLink={issue.path}>
            <IonIcon slot="start" icon={informationCircleOutline}></IonIcon>
            <IonLabel>{issue.title}</IonLabel>
        </IonItem>
    );

    return(
        <IonPage>
        <MyHeader/>
        <IonContent>
            <IonButton color="light" routerLink="/home">
                <IonIcon slot="start" icon={arrowBackOutline} />
                Back
            </IonButton>
            <IonList>
                <IonListHeader>
                    <h1>FAQ</h1>
                </IonListHeader>
                {faqList}
            </IonList>
        </IonContent>
    </IonPage>
    );
};

export default withRouter(Faq);