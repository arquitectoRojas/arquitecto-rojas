import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent {
  experiencia:number = 0

    ngOnInit(): void {
      var currentTime = new Date();
      var year = currentTime.getFullYear()
      this.experiencia = Math.floor(year) - 1997
      console.log(year);

    }
}
