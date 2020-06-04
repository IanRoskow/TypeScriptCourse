export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(selector: string) {
    this.googleMap = new google.maps.Map(document.querySelector(selector), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
