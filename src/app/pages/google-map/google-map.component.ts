import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
  public defaultIcon: google.maps.Icon = {
    url: './assets/google-map/map-icon.png',
    scaledSize: new google.maps.Size(40, 40),
    anchor: new google.maps.Point(20, 40) // 👈 optional: makes bottom center sit on coords
  };
  
  public activeIcon: google.maps.Icon = {
    url: './assets/google-map/map-active-icon.png',
    scaledSize: new google.maps.Size(50, 50),
    anchor: new google.maps.Point(25, 50)
  };
  // Default India's lat & long.
  public center: google.maps.LatLngLiteral = {
    lat: 20.593684,
    lng: 78.962888
  };
  public markerPosition: google.maps.LatLngLiteral | null = null;
  public zoom = 10;
  public destroy$ = new Subject();
  public storeLocation: any = [];
  @ViewChildren('storeItem') storeItem!: QueryList<ElementRef>;

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

  changeLocation = (marker: any) => {
    try {
      for (let i = 0; i < this.storeLocation.length; i++) {
        this.storeLocation[i]['active'] = false;
      }
      marker['active'] = true;
      this.center = { lat: marker.lat, lng: marker.lng };
      // auto scroll into view
      const index = this.storeLocation.findIndex((ele: any) => ele === marker);
      if (index !== -1) {
        const el = this.storeItem.toArray()[index].nativeElement;
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } catch (error) {
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
