import {IonHeader, IonTitle, IonImg, IonToolbar, IonButtons, IonButton} from '@ionic/react';
import React from 'react';
import '../App.css'

const MyHeader: React.FC = () => {
    return (
        <IonHeader class="ion-no-border">
            <IonToolbar class="toolbarStyle">
                <IonButtons slot="start">
                    <IonButton routerLink="/about">About</IonButton>
                </IonButtons>
                <IonButtons slot="end">
                    <IonButton routerLink="/contact">Contact</IonButton>
                </IonButtons>
                <IonImg class="logoImg" src="images/scales.jpg"></IonImg>
                <IonTitle class="ion-text-center">Law Choice</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default MyHeader;