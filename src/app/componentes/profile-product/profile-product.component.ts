import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-product',
  templateUrl: './profile-product.component.html',
  styleUrls: ['./profile-product.component.scss']
})
export class ProfileProductComponent {

  id: any;

  constructor(private route: ActivatedRoute){

    this.id = this.route.snapshot.paramMap.get('id');

  }

}
