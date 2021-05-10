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
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCard,
  } from "@ionic/react";
  
  import '../App.css';
  import React, {useState} from 'react';
  import MyHeader from '../components/MyHeader';
import { withRouter } from "react-router";
import FaqListing from './FaqDB';
import { arrowBackOutline } from "ionicons/icons";

const FaqDetail: React.FC<any> = ({match}) => {
    
    const [faqs] = useState<Array<any>>(FaqListing);
    const selectedFaq = faqs.find((issue) => {
       return issue.id === match.params.id;
    });

    return(
        <IonPage>
        <MyHeader/>
        <IonContent>
            
            <IonButton color="light" routerLink="/faq">
                <IonIcon slot="start" icon={arrowBackOutline} />
                Back
            </IonButton>    

            <IonCard>               
                <IonCardHeader>
                    <IonCardTitle>{selectedFaq.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    {selectedFaq.answer}
                </IonCardContent>
            </IonCard>

        </IonContent>
    </IonPage>
    );
};

export default withRouter(FaqDetail);