import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-detail',
  templateUrl: './registro-detail.component.html',
  styleUrls: ['./registro-detail.component.css']
})
export class RegistroDetailComponent implements OnInit {
  registro: any = {};

  constructor(private registroService: RegistroService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id_registro = +this.route.snapshot.paramMap.get('id_registro')!;
    this.registroService.getRegistro(id_registro).subscribe(data => {
      this.registro = data;
    });
  }
}
