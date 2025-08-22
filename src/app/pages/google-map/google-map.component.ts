import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  public display: any;
  public showLoader = false;

  public mapOptions: google.maps.MapOptions = {
    mapId: 'ee13eb1b998deadced2b48ec'
  }

  // Default India's lat & long.
  public center: google.maps.LatLngLiteral = {
    lat: 20.593684,
    lng: 78.962888
  };
  public markerPosition: google.maps.LatLngLiteral | null = null;
  public zoom = 6;
  public destroy$ = new Subject();
  public storeLocation = [];

  constructor(public _shared: SharedServiceService) { }

  ngOnInit(): void {
    this.getUserLocation();
    this.getStoreLocations();
  }

  getStoreLocations = () => {
    try {
      this.showLoader = true;
      this._shared.getStoreLocations().pipe(takeUntil(this.destroy$)).subscribe(resp => {
        if (resp?.status === 'success') {
          this.showLoader = false;
          this.storeLocation = resp.data;
        } else {
          this.showLoader = false;
        }
      })
    } catch (error) {
      this.showLoader = false;
      console.error(error);

    }
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.markerPosition = { ...this.center };
      }, (error) => {
        console.error("Geolocation error:", error);
        // fallback to default center
      });
    } else {
      console.error("Geolocation not supported by this browser.");
    }
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

}
