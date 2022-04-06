import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PresencaRequest } from '../models/Presenca.model';
import { PresencaService } from '../services/presenca.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

  error = false;
  loading = false;
  disableButtons = false;
  mensagemText: string;

  constructor(private presencaService: PresencaService) { }

  formPresenca = new FormGroup({
    nome: new FormControl('',[Validators.required]),
    familia: new FormControl(false),
  });

  ngOnInit(): void {
  }

  enviarConfirmacao(event: {submitter: HTMLElement}){
    if(this.formPresenca.valid){
      let confirmacao = event.submitter.className === 'accept';
      let presencaRequest: PresencaRequest = {
        nome: this.formPresenca.controls.nome.value,
        familia: this.formPresenca.controls.familia.value,
        confirmacao        
      };
      this.loading = true;
      this.disableButtons = true;
      this.presencaService.confirmar(presencaRequest).subscribe((resposta)=> {
        this.loading = false;
        this.mensagemText = resposta.confirmacao? 'Sua presença foi confirmada!' : 'Os de verdade eu sei quem são!'

        console.log(resposta)
      })
    }else{
        this.error = true;
      }

    }

  }


