import { Router } from '@angular/router';
import { SessionsService } from 'app/shared/service/sessions.service';
import { FormateurService } from './../shared/service/formateur.service';
import { Formateur } from './../shared/model/formateur.model';
import { Participant } from './../shared/model/participant.model';
import { ParticipantService } from './../shared/service/participant.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss'],
  providers: [MessageService]
})
export class AddSessionComponent implements OnInit {

  sessionForm = new FormGroup({
    dateDebut: new FormControl('', [Validators.required]),
    dateFin: new FormControl('', [Validators.required]),
    formateur: new FormControl('', [Validators.required]),
    formation: new FormControl('', [Validators.required]),
    participants: new FormControl(),
  }
  );

  source: Participant[];
  target: Participant[];
  formateurs: Formateur[];
  constructor(private primengConfig: PrimeNGConfig, private particiapantService: ParticipantService,
    private formBuilder: FormBuilder, private formateurService: FormateurService,
    private messageService: MessageService, private sessionService: SessionsService,
    private router:Router) { }

  ngOnInit(): void {
    this.particiapantService.getParticipants().subscribe(participants => {
      this.source = <Participant[]>participants;
      this.formateurService.getFormateurs().subscribe(res => {
        this.formateurs = res;
      })
    })
    this.target = [];
    this.primengConfig.ripple = true;
  }

  showTarget() {
    console.log(this.target);
  }

  onSubmit() {
    if (this.sessionForm.valid) {
      this.sessionForm.controls['participants'].setValue(this.target);
      let data = this.sessionForm.value;
      console.log(data);
      this.sessionService.saveSession(data).subscribe(res=>{
        console.log(res);
        this.showSuccess();
        setTimeout(() => {
          this.router.navigateByUrl('/sessions-list');
        }, 2000);
      })
      
    } else {
      this.showError();
      console.log('here');
    }

  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Oops Something went wrong!!' });
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Data saved!'});
}
}
