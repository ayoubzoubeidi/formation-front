import { Router } from '@angular/router';
import { SessionsService } from 'app/shared/service/sessions.service';
import { FormateurService } from '../shared/service/formateur.service';
import { ParticipantService } from '../shared/service/participant.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.scss'],
  providers: [MessageService]
})
export class AddParticipantComponent implements OnInit {

  participantForm = new FormGroup({
    birthDate: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tel: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
  }
  );

  constructor(private primengConfig: PrimeNGConfig, private particiapantService: ParticipantService,
    private formBuilder: FormBuilder, private formateurService: FormateurService,
    private messageService: MessageService, private sessionService: SessionsService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.participantForm.valid);
    if (this.participantForm.valid) {
      let data = this.participantForm.value;
      this.particiapantService.addParticipant(data).subscribe(res=>{
        this.showSuccess();
        setTimeout(() => {
          this.router.navigateByUrl('/sessions-list');
        }, 2000);
      })
      
    } else {
      this.showError();
    }

  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Oops Something went wrong!!' });
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Data saved!'});
}
}
