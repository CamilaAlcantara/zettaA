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

import com.zettaApp.apiZetta.models.Usuario;
import com.zettaApp.apiZetta.repository.UsuarioRepository;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(value="/usuario")
public class UsuarioResource {

	@Autowired
	UsuarioRepository usuarioRepository;
	
	
	@GetMapping("/listar")
	public List<Usuario> listarUsuario(){
		return usuarioRepository.findAll();
	}
	
	@GetMapping("/pesquisar")
	public List<Usuario> listar(){
		return usuarioRepository.getListar();
	}
	
	@GetMapping("/buscarPorId/{id}")
	public Optional<Usuario> buscarPorId(@PathVariable("id") long id){
	 		return this.usuarioRepository.findById(id);
	}
	
	@PostMapping("/incluir")
	public Usuario incluir(@RequestBody Usuario entity) {
		return this.usuarioRepository.save(entity);
	}
	
	@PutMapping("/alterar")
	public Usuario alterar(@RequestBody Usuario entity) {
		return this.usuarioRepository.save(entity);
	}
	
	@DeleteMapping("/delete")
	public void delete(@RequestBody Usuario entity) {
		 this.usuarioRepository.delete(entity);
	}
	

}
