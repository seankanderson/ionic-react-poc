import {
    IonContent,
    IonPage,
    IonButton,
    IonIcon,
    IonImg,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle
  } from "@ionic/react";

  import React, {useState} from 'react';
  import MyHeader from '../components/MyHeader';
  import LawyerListing from '../pages/LawyerDB';
  import {arrowBackOutline} from 'ionicons/icons';
  import '../App.css';
import { withRouter } from "react-router";

  const LawyerDetail: React.FC<any> = ({match}) => {
    console.log('paramters:', match);
    const [list] = useState<Array<any>>(LawyerListing);
    const selectedLawyer = list.find((lawyer) => {
        return lawyer.id === match.params.id;
    });
    return (
        <IonPage>
            <MyHeader/>
            <IonContent>
                <IonButton color="light" routerLink="/lawyerlist">
                    <IonIcon slot="start" icon={arrowBackOutline} />
                    Back
                </IonButton>    

                <IonCard>
                    <IonImg class="detailImage" src={selectedLawyer.pic} />
                    <IonCardHeader>
                        <IonCardTitle>{selectedLawyer.name}</IonCardTitle>
                        <IonCardSubtitle>{selectedLawyer.phone}</IonCardSubtitle>
                        <IonCardSubtitle>{selectedLawyer.web}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        {selectedLawyer.info}
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    );

  };

  export default withRouter(LawyerDetail);
