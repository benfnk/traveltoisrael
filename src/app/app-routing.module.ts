import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPComponent } from "./main-p/main-p.component";
import { TravelComponent } from "./travel/travel.component";
import { TripOneComponent } from "./travel/trip-one/trip-one.component";
import { TripTwoComponent } from "./travel/trip-two/trip-two.component";
import { TripThreeComponent } from "./travel/trip-three/trip-three.component";
import { TelAvivComponent } from './cities/tel-aviv/tel-aviv.component';
import { JerusalemComponent } from './cities/jerusalem/jerusalem.component';
import { JaffoComponent } from './cities/jaffo/jaffo.component';
import { TiberiasComponent } from './cities/tiberias/tiberias.component';
import { EilatComponent } from './cities/eilat/eilat.component';
import { HeifaComponent } from './cities/heifa/heifa.component';
import { MasadaComponent } from './cities/masada/masada.component';
import { DeadSeaComponent } from './cities/dead-sea/dead-sea.component';
import { ResultComponent } from './result/result.component';
import { ResultHotelFlightComponent } from './result-hotel-flight/result-hotel-flight.component';

const appRoutes: Routes = [
    { path: "main", component: MainPComponent },
    { path: "travel", component: TravelComponent },
    { path: "trip-one", component: TripOneComponent },
    { path: "trip-two", component: TripTwoComponent },
    { path: "trip-three", component: TripThreeComponent },
    { path: "tel-aviv", component: TelAvivComponent },
    { path: "jerusalem", component: JerusalemComponent },
    { path: "jaffo", component: JaffoComponent },
    { path: "tiberias", component: TiberiasComponent },
    { path: "eilat", component: EilatComponent },
    { path: "heifa", component: HeifaComponent },
    { path: "masada", component: MasadaComponent },
    { path: "dead-sea", component: DeadSeaComponent },
    { path: "result", component: ResultComponent },
    { path: "hotel", component: ResultHotelFlightComponent },
    { path: "", redirectTo: "/main", pathMatch: "full" },
];

const appRouter = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [appRouter]
})
export class AppRoutingModule {}




