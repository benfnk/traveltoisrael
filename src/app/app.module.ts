import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPComponent } from './main-p/main-p.component';
import { TravelComponent } from './travel/travel.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { DateStripComponent } from './main-p/date-strip/date-strip.component';
import { TripStripComponent } from './main-p/trip-strip/trip-strip.component';
import { ExplanStripComponent } from './main-p/explan-strip/explan-strip.component';
import { LogoStripComponent } from './main-p/logo-strip/logo-strip.component';
import { ContactComponent } from './main-p/contact/contact.component';
import { GalleryComponent } from './main-p/gallery/gallery.component';
import { BigWordComponent } from './main-p/big-word/big-word.component';
import { DealsComponent } from './main-p/deals/deals.component';
import { TripOneComponent } from './travel/trip-one/trip-one.component';
import { IntroWordComponent } from './travel/trip-one/intro-word/intro-word.component';
import { GalleryTrip1Component } from './travel/trip-one/gallery-trip1/gallery-trip1.component';
import { InfoTrip1Component } from './travel/trip-one/info-trip1/info-trip1.component';
import { DateComponent } from './date/date.component';
import { OrderComponent } from './travel/trip-one/order/order.component';
import { DateFormComponent } from './main-p/logo-strip/date-form/date-form.component';
import { DateFormFlightComponent } from './main-p/logo-strip/date-form-flight/date-form-flight.component';
import { DateFormHotelComponent } from './main-p/logo-strip/date-form-hotel/date-form-hotel.component';
import { DateFormHotelFlightComponent } from './main-p/logo-strip/date-form-hotel-flight/date-form-hotel-flight.component';
import { TripTwoComponent } from './travel/trip-two/trip-two.component';
import { TripThreeComponent } from './travel/trip-three/trip-three.component';
import { InfoTripComponent } from './travel/trip-two/info-trip/info-trip.component';
import { InfoCommentComponent } from './travel/trip-two/info-comment/info-comment.component';
import { CitiesComponent } from './cities/cities.component';
import { TelAvivComponent } from './cities/tel-aviv/tel-aviv.component';
import { JerusalemComponent } from './cities/jerusalem/jerusalem.component';
import { JaffoComponent } from './cities/jaffo/jaffo.component';
import { TiberiasComponent } from './cities/tiberias/tiberias.component';
import { EilatComponent } from './cities/eilat/eilat.component';
import { HeifaComponent } from './cities/heifa/heifa.component';
import { MasadaComponent } from './cities/masada/masada.component';
import { DeadSeaComponent } from './cities/dead-sea/dead-sea.component';
import { InfoCityTelAvivComponent } from './cities/tel-aviv/info-city-tel-aviv/info-city-tel-aviv.component';
import { CommentCityTelAvivComponent } from './cities/tel-aviv/comment-city-tel-aviv/comment-city-tel-aviv.component';
import { CommentDeadSeaComponent } from './cities/dead-sea/comment-dead-sea/comment-dead-sea.component';
import { InfoCityDeadSeaComponent } from './cities/dead-sea/info-city-dead-sea/info-city-dead-sea.component';
import { CommentEilatComponent } from './cities/eilat/comment-eilat/comment-eilat.component';
import { InfoCityEilatComponent } from './cities/eilat/info-city-eilat/info-city-eilat.component';
import { CommentHeifaComponent } from './cities/heifa/comment-heifa/comment-heifa.component';
import { InfoCityHeifaComponent } from './cities/heifa/info-city-heifa/info-city-heifa.component';
import { CommentJaffoComponent } from './cities/jaffo/comment-jaffo/comment-jaffo.component';
import { InfoCityJaffoComponent } from './cities/jaffo/info-city-jaffo/info-city-jaffo.component';
import { CommentJerusalemComponent } from './cities/jerusalem/comment-jerusalem/comment-jerusalem.component';
import { InfoCityJerusalemComponent } from './cities/jerusalem/info-city-jerusalem/info-city-jerusalem.component';
import { CommentMadadaComponent } from './cities/masada/comment-madada/comment-madada.component';
import { InfoCityMasadaComponent } from './cities/masada/info-city-masada/info-city-masada.component';
import { InfoCityTiberiasComponent } from './cities/tiberias/info-city-tiberias/info-city-tiberias.component';
import { CommentTiberiasComponent } from './cities/tiberias/comment-tiberias/comment-tiberias.component';
import { DeadSeaParalexComponent } from './cities/dead-sea/dead-sea-paralex/dead-sea-paralex.component';
import { EilatParalexComponent } from './cities/eilat/eilat-paralex/eilat-paralex.component';
import { HeifaParalexComponent } from './cities/heifa/heifa-paralex/heifa-paralex.component';
import { JaffoParalexComponent } from './cities/jaffo/jaffo-paralex/jaffo-paralex.component';
import { JerusalemParalexComponent } from './cities/jerusalem/jerusalem-paralex/jerusalem-paralex.component';
import { MasadaParalexComponent } from './cities/masada/masada-paralex/masada-paralex.component';
import { TelAvivParalexComponent } from './cities/tel-aviv/tel-aviv-paralex/tel-aviv-paralex.component';
import { TiberiasParalexComponent } from './cities/tiberias/tiberias-paralex/tiberias-paralex.component';
import { ResultComponent } from './result/result.component';
import { ResultHotelComponent } from './result-hotel/result-hotel.component';
import { ResultFlightComponent } from './result-flight/result-flight.component';
import { ResultPackageComponent } from './result-package/result-package.component';
import { ResultHotelFlightComponent } from './result-hotel-flight/result-hotel-flight.component';
import { PackageFormComponent } from './result-package/package-form/package-form.component';
import { SummaryComponent } from './summary/summary.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPComponent,
    TravelComponent,
    DateStripComponent,
    TripStripComponent,
    ExplanStripComponent,
    LogoStripComponent,
    ContactComponent,
    GalleryComponent,
    BigWordComponent,
    DealsComponent,
    TripOneComponent,
    IntroWordComponent,
    GalleryTrip1Component,
    InfoTrip1Component,
    DateComponent,
    OrderComponent,
    DateFormComponent,
    DateFormFlightComponent,
    DateFormHotelComponent,
    DateFormHotelFlightComponent,
    TripTwoComponent,
    TripThreeComponent,
    InfoTripComponent,
    InfoCommentComponent,
    CitiesComponent,
    TelAvivComponent,
    JerusalemComponent,
    JaffoComponent,
    TiberiasComponent,
    EilatComponent,
    HeifaComponent,
    MasadaComponent,
    DeadSeaComponent,
    InfoCityTelAvivComponent,
    CommentCityTelAvivComponent,
    CommentDeadSeaComponent,
    InfoCityDeadSeaComponent,
    CommentEilatComponent,
    InfoCityEilatComponent,
    CommentHeifaComponent,
    InfoCityHeifaComponent,
    CommentJaffoComponent,
    InfoCityJaffoComponent,
    CommentJerusalemComponent,
    InfoCityJerusalemComponent,
    CommentMadadaComponent,
    InfoCityMasadaComponent,
    InfoCityTiberiasComponent,
    CommentTiberiasComponent,
    DeadSeaParalexComponent,
    EilatParalexComponent,
    HeifaParalexComponent,
    JaffoParalexComponent,
    JerusalemParalexComponent,
    MasadaParalexComponent,
    TelAvivParalexComponent,
    TiberiasParalexComponent,
    ResultComponent,
    ResultHotelComponent,
    ResultFlightComponent,
    ResultPackageComponent,
    ResultHotelFlightComponent,
    PackageFormComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
