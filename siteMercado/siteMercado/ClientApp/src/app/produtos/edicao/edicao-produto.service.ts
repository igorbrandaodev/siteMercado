import { Component, Inject, HostListener, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Produto } from '../../models/produto';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class EdicaoProdutoService {

    constructor(private http: HttpClient) {}

    // Solicita a API a atualização do Produto
    putProduto(produto: Produto, imagem: File): Observable<any>  {

        // Instancia um formulário de dados
        const formData = new FormData();
        
        // Preenche com o modelo
        for ( var key in produto ) {
            formData.append(key, produto[key]);
        }

        // Adiciona a imagem
        if(imagem != null)
        formData.append(imagem.name, imagem);

        // Define o cabeçalho da chamada
        const httpOptions = {
            headers: new HttpHeaders({ 'Accept': 'application/json, */*'})
        }

        // Monta a requisição
        const uploadReq = new HttpRequest('POST', environment.ApiUrl + `/Produtos/${produto.id}`, formData, {
            headers: httpOptions.headers,
            reportProgress: true
        });

        // Chama a API enviando os parâmetros
        return this.http.request(uploadReq);        
       

    }

}


