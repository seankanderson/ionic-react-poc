import {
  IonContent,
  IonPage,
  IonImg,
  IonList,
  IonItem,
  IonItemGroup,
  IonLabel,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import MyHeader from "../components/MyHeader";
import "../App.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <MyHeader></MyHeader>
      <IonContent>

        <IonList>

          <IonItemGroup class="ion-content-center">
            <IonItem button routerLink="/lawyerlist">
              <IonImg class="logoImg" src="images/scales.jpg" />
            </IonItem>
            <IonItem button routerLink="/about">
              <IonLabel class="ion-text-center">
                LAWYERS
              </IonLabel>
            </IonItem>
          </IonItemGroup>

          <IonItemGroup>
            <IonItem button routerLink="/contact">
              <IonImg class="logoImg" src="images/scales.jpg" />
            </IonItem>
            <IonItem button routerLink="/contact">
              <IonLabel class="ion-text-center">
                BLOG
              </IonLabel>
            </IonItem>
          </IonItemGroup>

          <IonItemGroup>
            <IonItem button routerLink="/faq">
              <IonImg class="logoImg" src="images/scales.jpg" />
            </IonItem>
            <IonItem button routerLink="/about">
              <IonLabel class="ion-text-center">
                FAQ
              </IonLabel>
            </IonItem>
          </IonItemGroup>

        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Home;
