import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from '../../services/registro.service';


@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.css']
})
export class RegistroFormComponent implements OnInit {
  registroForm: FormGroup;
  isEditing = false;
  idRegistro: number | null = null;

  constructor(
    private fb: FormBuilder,
    private registroService: RegistroService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.registroForm = this.fb.group({
      estado: ['', Validators.required],
      id: ['', Validators.required],
      matricula: ['', Validators.required],
      razon_social: ['', Validators.required],
      cod_estado_actualizacion: ['', Validators.required],
      cod_departamento: ['', Validators.required],
      id_establecimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      respuesta_json: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (id) {
        this.idRegistro = id;
        this.isEditing = true;
        this.loadRegistro(id);
      }
    });
  }

  loadRegistro(id: number): void {
    this.registroService.getRegistro(id).subscribe(data => {
      this.registroForm.patchValue(data);
    });
  }

  onSubmit(): void {
    if (this.isEditing && this.idRegistro) {
      this.registroService.updateRegistro(this.idRegistro, this.registroForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.registroService.createRegistro(this.registroForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}