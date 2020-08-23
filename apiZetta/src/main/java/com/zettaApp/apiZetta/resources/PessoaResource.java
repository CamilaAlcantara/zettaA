package com.zettaApp.apiZetta.resources;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zettaApp.apiZetta.models.Pessoa;
import com.zettaApp.apiZetta.repository.PessoaRepository;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(value="/pessoa")
public class PessoaResource {

	@Autowired
	PessoaRepository pessoaRepository;
	
	
	@GetMapping("/listar")
	public List<Pessoa> listarPessoa(){
				
		return pessoaRepository.findAll();
	}
	@GetMapping("/pesquisar")
	public List<Pessoa> listar(){
		return pessoaRepository.getListar();
	}
	@GetMapping("/buscarPorId/{id}")
	public Optional<Pessoa> pesquisar(@PathVariable("id") long id){
	 		return this.pessoaRepository.findById(id);
	}
	
	@PostMapping("/incluir")
	public Pessoa incluir(@RequestBody Pessoa entity) {
		return this.pessoaRepository.save(entity);
	}
	
	@PutMapping("/alterar")
	public Pessoa alterar(@RequestBody Pessoa entity) {
		return this.pessoaRepository.save(entity);
	}
	
	@DeleteMapping("/delete")
	public void delete(@RequestBody Pessoa entity) {
		 this.pessoaRepository.delete(entity);
	}
	

}
