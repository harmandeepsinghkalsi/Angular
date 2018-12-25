import { Component } from '@angular/core';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedFile = null;

  constructor(private http: HttpClient) {

  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = function () {
        const image = <HTMLImageElement>document.getElementById('image');
        image.src = reader.result;

      };
      reader.readAsDataURL(file);
    }
  }


  onUpload() {
    const formData = new FormData();
    formData.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('url', formData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(events => {
        if (events.type === HttpEventType.UploadProgress) {
          console.log('Uploading', (events.loaded / events.total * 100));
        } else if (events.type === HttpEventType.Response) {
          console.log(events);
        }
      });
  }
}
