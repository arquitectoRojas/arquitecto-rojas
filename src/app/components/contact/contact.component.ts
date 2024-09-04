import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {
  message: string | null;

  constructor(
    private aRoute: ActivatedRoute,
    ) {
      this.message = this.aRoute.snapshot.paramMap.get('message');
    }

  ngOnInit() {
    this.messageExist();
  }

  messageExist(){
    if (this.message != null) {
      console.log("this.message",this.message)
      var els:any = document.getElementsByName('message')[0];
      els.value = this.message;
    }
  }
}
