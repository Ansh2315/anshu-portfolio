import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  public zoom = 1;

  constructor() { }

  ngOnInit(): void {
  }


  viewResume = () => {
    try {
      const pdfUrl = "assets/resume/anshu-cv.pdf";
      fetch(pdfUrl)
        .then(response => response.blob())
        .then(blob => {
          const fileURL = URL.createObjectURL(blob);
          window.open(fileURL, '_blank');
        })
        .catch(err => {
          console.error('Error opening PDF:', err);
        });
    } catch (e) {
      console.error(e)
    }
  }

  zoomIn = () => {
    try {
      this.zoom += 0.1;
    } catch (error){
      console.error(error);
    }
  }

  zoomOut = () => {
    try {
      if(this.zoom === 1) {
        return;
      }
      this.zoom = this.zoom - 0.1;
    } catch (error) {
      console.error(error);

    }
  }

  contactClick = (data: any) => {
    try {
      switch (data) {
        case 'git':
          const url_1 = 'https://github.com/Ansh2315/anshu-portfolio';
          window.open(url_1, '_blank');
          break;
        case 'linkedin':
          const url_2 = 'https://www.linkedin.com/in/anshuman-behera24';
          window.open(url_2, '_blank');
          break;
      }
    } catch (error) {
      console.error(error);
    }
  }

}
