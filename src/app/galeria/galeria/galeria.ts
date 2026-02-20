import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar.class';
import { CategoriaClass } from '../../categorias/categoria/categoria-class';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
})
export class Galeria implements OnInit{

  lugaresBuscados:Lugar[] = [];
  lugaresFiltrados:Lugar[] = [];
  categoriasFiltro:CategoriaClass[] = [];
  filtrosForm!:FormGroup;


  constructor(
    private lugarService:LugarService,
    private categoriaService:CategoriaService,
    private fb:FormBuilder
  ){
    this.filtrosForm = fb.group({
      lugar:[''],
      categoria:['']
    })


  }

  ngOnInit(): void {
    this.buscarTodasCategorias();
    this.buscarTodosLugares();
    
  }

  buscarTodasCategorias(){
    this.categoriaService.obterTodasCategorias().subscribe({
      next:(res) => {
        console.log(res)
        this.categoriasFiltro = res;
      },
      error:(err) => console.error(err)
    });
  }
  buscarTodosLugares(){
    this.lugarService.obterTodosLugares().subscribe({
      next:(res) => {
        console.log(res)
        this.lugaresBuscados = res;
        console.table(this.lugaresBuscados);
      },
      error:(err) => console.error(err)
    })
  }
  getTotalEstrelas(lugar:Lugar):string{
    return '&#9733'.repeat(lugar.avaliacao || 0) + '&#9734;'.repeat(5 - (lugar.avaliacao || 0));
  }
  filtrar(){
    let nomeLugarPesquisa = this.filtrosForm.value.lugar;
    let categoriaPesquisada = this.filtrosForm.value.categoria;

    console.log(categoriaPesquisada,nomeLugarPesquisa);
    this.lugarService.obterLugaresFiltrados(nomeLugarPesquisa,categoriaPesquisada).subscribe({
      next:(res) => {
        console.log(res);
        this.lugaresFiltrados = res;
      },
      error:(err) => console.error(err)
    })

  }


}
