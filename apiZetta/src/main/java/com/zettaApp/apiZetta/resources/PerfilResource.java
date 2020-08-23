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


import com.zettaApp.apiZetta.models.Perfil;
import com.zettaApp.apiZetta.repository.PerfilRepository;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(value="/perfil")
public class PerfilResource {

	@Autowired
	PerfilRepository perfilRepository;
	
	
	@GetMapping("/listar")
	public List<Perfil> listarPerfil(){
		return perfilRepository.findAll();
	}
	
	@GetMapping("/pesquisar")
	public List<Perfil> listar(){
		return perfilRepository.getListar();
	}
	
	
	@GetMapping("/buscarPorId/{id}")
	public Optional<Perfil> buscarPorId(@PathVariable("id") long id){
	 		return this.perfilRepository.findById(id);
	}
	
	@PostMapping("/incluir")
	public Perfil incluir(@RequestBody Perfil entity) {
		return this.perfilRepository.save(entity);
	}
	
	@PutMapping("/alterar")
	public Perfil alterar(@RequestBody Perfil entity) {
		return this.perfilRepository.save(entity);
	}
	
	@DeleteMapping("/delete")
	public void delete(@RequestBody Perfil entity) {
		 this.perfilRepository.delete(entity);
	}
	

}
