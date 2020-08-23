package com.zettaApp.apiZetta.resources;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zettaApp.apiZetta.models.Cargo;
import com.zettaApp.apiZetta.repository.CargoRepository;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping(value="/cargo")
public class CargoResource {

	@Autowired
	CargoRepository cargoRepository;
	
	
	@GetMapping("/listar")
	public List<Cargo> ListarCargo(){
		return cargoRepository.findAll();
	}
	
	@GetMapping("/buscarPorId/{id}")
	public Optional<Cargo> BuscarPorId(@PathVariable("id") long id){
	 		return this.cargoRepository.findById(id);
	}
	
	@PostMapping("/incluir")
	public Cargo incluir(@RequestBody Cargo entity) {
		return this.cargoRepository.save(entity);
	}
	
	@PutMapping("/alterar")
	public Cargo alterar(@RequestBody Cargo entity) {
		return this.cargoRepository.save(entity);
	}
	
	@DeleteMapping("/delete")
	public void delete(@RequestBody Cargo entity) {
		 this.cargoRepository.delete(entity);
	}
	

}
