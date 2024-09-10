import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { ClientRegistration } from '../../tools/models/registration.interface';
import { ClientRegistrationService } from '../../tools/services/registration.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {

  clients: ClientRegistration[] = [];

  NoOfClients: number = 0;

  constructor(private clientsService: ClientRegistrationService) { }

  ngOnInit(): void { 
    this.clientsService.getClients()
    .subscribe((res: any) => {
      this.clients = res.data;
      console.log('Clients:', this.clients);
      this.NoOfClients = this.clients.length;
    })
  }

}
