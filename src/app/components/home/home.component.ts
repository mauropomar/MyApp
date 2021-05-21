import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  goProducts(): void {
    this.router.navigate(['home/products']);
  }

  goPerfil(): void {
    this.router.navigate(['home/perfil']);
  }

}
